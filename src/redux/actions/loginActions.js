export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT = 'LOG_OUT';

export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const logOut = () => ({ type: LOG_OUT });
