import { useEffect, useState } from "react"
import { IResource } from "../../types/app";
import { useParams } from "react-router-dom";
import { getResource } from "../../lib/api/call/resource";



const useDetail = () => {
    const [resources, setResources] = useState<IResource | null>(null);
    const { resourceId } = useParams<{ resourceId?: string }>();
    const [loading, setLoading] = useState(true);
    const [error] = useState<any>(null);
    
    
    useEffect(() => {

        const fetchResource = async () => {
            try {
                const response = await getResource(Number(resourceId)); 
                setResources(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchResource();
    }, [resourceId])

   

    return { resources,  loading, error,};
}
export default useDetail