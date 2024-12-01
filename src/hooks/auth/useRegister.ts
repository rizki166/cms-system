import { useState } from "react";
import { IRegister } from "../../types/app";
import { authSchema } from "../../helpers/schemas/registerSchema";
import { RegisterApi } from "../../lib/api/call/user";
import Swal from "sweetalert2";

const useRegister = () => {
  const [formInfo, setFormInfo] = useState<IRegister>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = authSchema.safeParse(formInfo);
    if (!result.success) {
      const errorMessages: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errorMessages[err.path[0]] = err.message;
        }
      });
      setErrors(errorMessages);
      return;
    }

    setErrors({});

    try {
      const response = await RegisterApi(formInfo);
      if (response.status === 200 && response.data?.token) {
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered.",
          icon: "success",
          confirmButtonText: "OK",
        });
        localStorage.setItem("userToken", response.data.token);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: "Oops Unable to Register You can try again later",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return { formInfo, errors, handleChange, handleSubmit };
};

export default useRegister;
