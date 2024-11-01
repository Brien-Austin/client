import axios from "axios"

import { API_URL } from "./constants"
import { cleanUserTokens, getUserAccessToken, getUserRefreshToken, LoadCookie, setUserAccessToken, setUserRefreshToken } from "./localstorage"
import toast from "react-hot-toast";


const appApiClient = axios.create({
    baseURL : API_URL,
    withCredentials: true
})



appApiClient.interceptors.request.use(
    (config) => {
      const {refreshToken,accessToken} = LoadCookie()
      console.log('Hi form api ', 'AccessToken', accessToken, 'RefreshToken',refreshToken)
      const token = getUserAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


appApiClient.interceptors.response.use(
    (response)=>response,
    async(error) =>{
      
        if(error.response && error.response.status === 400){
            try {
                const refreshToken = getUserRefreshToken()
                if(refreshToken){
                    const response = await appApiClient.post("/refresh-token",{refreshToken})
                    setUserRefreshToken(response.data.refreshToken);
            setUserAccessToken(response.data.accessToken);
                }
                
            } catch (error) {
                cleanUserTokens()
                toast.error('Session expired !!! Login Again')
            

                return Promise.reject(error)
                
            }

        }
        return Promise.reject(error)
    }
)

export default appApiClient