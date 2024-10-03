import axios from "axios"
import { API_URL } from "./constants"
import { cleanToken, getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "./localstorage"
import toast from "react-hot-toast";

const appApiClient = axios.create({
    baseURL : API_URL
})

appApiClient.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
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
                const refreshToken = getRefreshToken()
                if(refreshToken){
                    const response = await appApiClient.post("/refresh-token",{refreshToken})
                    setRefreshToken(response.data.refreshToken);
            setAccessToken(response.data.accessToken);
                }
                
            } catch (error) {
                cleanToken()
                toast.error('Session expired !!! Login Again')
                return Promise.reject(error)
                
            }

        }
        return Promise.reject(error)
    }
)

export default appApiClient