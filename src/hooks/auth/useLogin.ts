import { useState } from "react";
import { ILogin } from "../../types/app";
import { loginApi } from "../../lib/api/call/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState<ILogin>({ email: "", password: "" });
  const [errors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginApi(formInfo);
      if (response.status === 200 && response.data?.token) {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
        localStorage.setItem("token", JSON.stringify(response.data));
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: "Email or password is incorrect.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return { formInfo, errors, handleChange, handleSubmit };
};
export default useLogin;
