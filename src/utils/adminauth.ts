import axios from "axios"
import { API_URL } from "./constants"
import { cleanAdminTokens, getAdminAccessToken, getAdminRefreshToken,  setAdminAccessToken, setAdminRefreshToken } from "./localstorage"
import toast from "react-hot-toast";


const adminApiClient = axios.create({
    baseURL : API_URL
})



adminApiClient.interceptors.request.use(
    (config) => {
      const token = getAdminAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


adminApiClient.interceptors.response.use(
    (response)=>response,
    async(error) =>{
      
        if(error.response && error.response.status === 400){
            try {
                const refreshToken = getAdminRefreshToken()
                if(refreshToken){
                    const response = await adminApiClient.post("/refresh-token",{refreshToken})
                    setAdminRefreshToken(response.data.refreshToken);
            setAdminAccessToken(response.data.accessToken);
                }
                
            } catch (error) {
                cleanAdminTokens()
                toast.error('Session expired !!! Login Again')
            

                return Promise.reject(error)
                
            }

        }
        return Promise.reject(error)
    }
)

export default adminApiClient