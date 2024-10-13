import appApiClient from '@/utils/auth';
import { PROFILE_URL } from '@/utils/constants';
import { useQuery } from 'react-query';


export function useAuth() {
  const { data: userData, status: queryStatus } = useQuery({
    queryKey : ['fetch-user'],
    queryFn :     async()=>{
        const response = await appApiClient.get(PROFILE_URL);
        return response.data
    },
    
  }
  
    
  );

  const user = userData?.user
  const isAuthenticated = !!user;
  const isLoading = queryStatus === 'loading';
  const isError = queryStatus === 'error';

  return { user, isAuthenticated, isLoading, isError };
}