const { VITE_SERVER } = import.meta.env;

const SERVER = `${VITE_SERVER}/api`;

export const API = {
  SIGNUP: `${SERVER}/signup`,
  SIGNIN: `${SERVER}/signin`,
};
