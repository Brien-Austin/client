import axios from "axios"
import { API_URL } from "./constants"
import {  cleanInstructorTokens,  getInstructorAccessToken,  getInstructorRefreshToken,   setInstructorAccessToken, setInstructorRefreshToken } from "./localstorage"
import toast from "react-hot-toast";


const instructorApiClient = axios.create({
    baseURL : API_URL
})



instructorApiClient.interceptors.request.use(
    (config) => {
      const token = getInstructorAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


instructorApiClient.interceptors.response.use(
    (response)=>response,
    async(error) =>{
      
        if(error.response && error.response.status === 400){
            try {
                const refreshToken = getInstructorRefreshToken()
                if(refreshToken){
                    const response = await instructorApiClient.post("/refresh-token",{refreshToken})
                    setInstructorRefreshToken(response.data.refreshToken);
            setInstructorAccessToken(response.data.accessToken);
                }
                
            } catch (error) {
                cleanInstructorTokens()
                toast.error('Session expired !!! Login Again')
            

                return Promise.reject(error)
                
            }

        }
        return Promise.reject(error)
    }
)

export default instructorApiClient