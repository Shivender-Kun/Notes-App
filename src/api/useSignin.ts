import axios from "axios";
import { API } from "../constants";

interface ISigninProps {
  email: string;
  password: string;
}

const useSignin = async (payload: ISigninProps) => {
  try {
    const {
      data: { accessToken },
    } = await axios.post(API.SIGNIN, payload);

    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    if (error?.response?.data.message)
      return console.log(error.response.data.message);
    console.log(error);
  }
};
export default useSignin;
