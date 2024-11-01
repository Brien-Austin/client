import axios from "axios"

import { API_URL } from "./constants"
import { cleanUserTokens, LoadCookie, setUserAccessToken, setUserRefreshToken } from "./localstorage"
import toast from "react-hot-toast";
import Cookie  from "js-cookie";


const appApiClient = axios.create({
    baseURL : API_URL
})



appApiClient.interceptors.request.use(
    (config) => {
      LoadCookie()
      const token = Cookie.get('accessToken');
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
                const refreshToken = Cookie.get('refreshToken')
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