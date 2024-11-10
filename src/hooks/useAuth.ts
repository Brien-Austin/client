import { User } from '@/types/api-return';
import appApiClient from '@/utils/auth';
import { INSTRUCTOR_PROFILE_URL, PROFILE_URL } from '@/utils/constants';
import instructorApiClient from '@/utils/instructorauth';
import { useQuery } from 'react-query';


export function useAuth() {
  const { data: userData, status: queryStatus } = useQuery<User>({
    queryKey : ['fetch-user'],
    queryFn :     async()=>{
        const response = await appApiClient.get(PROFILE_URL);
        return response.data.user
    },
    
  }
 
  
    
  );
  console.log(userData)

  const {data:instructorData , isLoading : isInstructorLoading} = useQuery({
    queryKey : ['fetch-instructor'],
    queryFn :     async()=>{
        const response = await instructorApiClient.get(INSTRUCTOR_PROFILE_URL);
        return response.data
    },

  })


  const user = userData
  const instructor = instructorData?.instructor
  const isAuthenticated = !!user;
  const isLoading = queryStatus === 'loading';
  const isError = queryStatus === 'error';

  return { user, isAuthenticated,instructor, isLoading, isError ,isInstructorLoading};
}