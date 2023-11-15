import axios from "axios";
import { API } from "../constants";

interface ISignupProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignup = async (payload: ISignupProps) => {
  try {
    const {
      data: { accessToken },
    } = await axios.post(API.SIGNUP, payload);

    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    if (error?.response?.data.message) return error.response.data.message;
    console.log(error);
  }
};
export default useSignup;
