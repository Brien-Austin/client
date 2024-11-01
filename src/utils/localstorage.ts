/* eslint-disable @typescript-eslint/no-explicit-any */

import Cookie  from "js-cookie";


// Admin Token Management
export function getAdminAccessToken() {
  return localStorage.getItem('adminAccessToken');
}

export function getAdminRefreshToken() {
  return localStorage.getItem('adminRefreshToken');
}

export function setAdminAccessToken(token: any) {
  localStorage.setItem('adminAccessToken', token);
}

export function setAdminRefreshToken(token: any) {
  localStorage.setItem('adminRefreshToken', token);
}

export async function LoadCookie() {
  const at = Cookie.get('accessToken');
  const rt = Cookie.get('refreshToken');
  if(at !== undefined) {
    localStorage.setItem('userAccessToken', at)
  }

  if(rt !== undefined) {
    localStorage.setItem('userRefreshToken', rt)
  }

  return {at,rt}
}



export function cleanAdminTokens() {
  localStorage.removeItem('adminAccessToken');
  localStorage.removeItem('adminRefreshToken');
}

// User Token Management
export function getUserAccessToken() {
  return localStorage.getItem('userAccessToken');
}

export function getUserRefreshToken() {
  return localStorage.getItem('userRefreshToken');
}

export function setUserAccessToken(token: any) {
  localStorage.setItem('userAccessToken', token);
}

export function setUserRefreshToken(token: any) {
  localStorage.setItem('userRefreshToken', token);
}

export function cleanUserTokens() {
  localStorage.removeItem('userAccessToken');
  localStorage.removeItem('userRefreshToken');
}

// Instructor Token Management
export function getInstructorAccessToken() {
  return localStorage.getItem('instructorAccessToken');
}

export function getInstructorRefreshToken() {
  return localStorage.getItem('instructorRefreshToken');
}

export function setInstructorAccessToken(token: any) {
  localStorage.setItem('instructorAccessToken', token);
}

export function setInstructorRefreshToken(token: any) {
  localStorage.setItem('instructorRefreshToken', token);
}

export function cleanInstructorTokens() {
  localStorage.removeItem('instructorAccessToken');
  localStorage.removeItem('instructorRefreshToken');
}
