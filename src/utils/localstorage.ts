/* eslint-disable @typescript-eslint/no-explicit-any */
export function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  export function getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
  
  export function setAccessToken(data: any) {
    localStorage.setItem('accessToken', data);
  }
  
  export function setRefreshToken(data: any) {
    localStorage.setItem('refreshToken', data);
  }
  
  export function cleanToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  