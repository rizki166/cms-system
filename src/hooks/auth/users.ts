import { useState, useEffect } from "react";
import {
  getDelayedUsers,
} from "../../lib/api/call/user"; 
import { IUser, userform } from "../../types/app";

const userss = () => {
  const [users, setUsers] = useState<IUser[]>([]); 
  const [user, setUser] = useState<IUser | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [formInfo, setFormInfo] = useState<userform>({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  useEffect(() => {
   
        const fetchUsers = async () => {
          setLoading(true);
          try {
            const response = await getDelayedUsers();
            setUsers(response.data.data); 
            setError(null);
          } catch (err: any) {
            setError(err.message || "Failed to fetch users");
          } finally {
            setLoading(false);
          }
        };

    fetchUsers();
  }, []);

  return {
    users,
    user,
    loading,
    error,
    formInfo,
    setFormInfo,
    errors,
  };
};

export default userss;
