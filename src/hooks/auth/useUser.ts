import { useState, useEffect } from "react";
import {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
} from "../../lib/api/call/user";
import { IUser, userform } from "../../types/app";
import { useNavigate, useParams } from "react-router-dom";
import { addUserSchema } from "../../helpers/schemas/registerSchema";
import Swal from "sweetalert2";

const useUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const { userId } = useParams<{ userId?: string }>();
  const [formInfo, setFormInfo] = useState<userform>({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (userId) {
          const response = await getUser(Number(userId));
          setUser(response.data.data);
          setLoading(false);
        } else {
          const response = await getUsers();
          setUsers(response.data.data);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userId]);

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await deleteUser(id);
      if (response.status === 204) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        Swal.fire({
          title: "Success!",
          text: "User deleted successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire(
          "Unexpected Response",
          `API responded with status: ${response.status}`,
          "warning"
        );
      }
    } catch (err: any) {
      Swal.fire("Error Deleting User");
    }
  };

  const handleEditUser = async (id: number) => {
    try {
      const response = await updateUser(id, formInfo);
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "User updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, ...formInfo } : user
          )
        );
      }
    } catch (err) {
      Swal.fire("Error Updating User");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = addUserSchema.safeParse(formInfo);
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
      const response = await createUser(formInfo);
      console.log(response, "ini response");
      Swal.fire({
        title: "Success!",
        text: "You have successfully create user.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/Administrative/personnel");
    } catch (err) {
      setError(err);
    }
  };

  return {
    users,
    user,
    loading,
    error,
    handleDeleteUser,
    handleSubmit,
    formInfo,
    setFormInfo,
    errors,
    handleChange,
    handleEditUser,
  };
};

export default useUser;
