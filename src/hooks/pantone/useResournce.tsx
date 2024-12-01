import { useEffect, useState } from "react"
import { createResource, deleteResource, getResources, updateResource } from "../../lib/api/call/resource";
import { IResource } from "../../types/app";
import Swal from "sweetalert2";



const useResournce = () => {
    const [resource, setResource] = useState<IResource[]>([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [formInfo, setFormInfo] = useState<IResource>({
        name: "",
        color: "",
        pantone_value: "",
        year: 0,
        id: 0

    });
    useEffect(() => {

        const fetchResource = async () => {
            try {
                const response = await getResources();
                setResource(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchResource();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };
    const handleDelete = async (id: number) => {
        try {

            const response = await deleteResource(id);
            if (response.status === 204) {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully deleted.",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }
            setResource((prevResources) =>
                prevResources.filter((item) => item.id !== id)
            );
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    const handleEditResource = async (id: number) => {
        try {
            const response = await updateResource(id, formInfo);
            if (response.status === 204) {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully deleted.",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }
            setResource((prevResources) =>
                prevResources.filter((item) => item.id !== id)
            );
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    const handleSubmitResource = async () => {
        try {
            const response = await createResource(formInfo);
            if (response.status === 204) {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully deleted.",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }
            setResource((prevResources) =>
                prevResources.filter((item) => item.id !== formInfo.id)
            );
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { resource, loading, error, handleDelete, setFormInfo, handleEditResource, handleSubmitResource, formInfo, handleChange };
}
export default useResournce