import type { Airport } from "@core/airports/airport.model";
import { deleteAirportById, getAllAirports } from "@core/airports/airport.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAirportList = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const [confirmDelete, setConfirmDelete] = useState<boolean>();
    const [idToDelete, setIdToDelete] = useState<string|null>(null);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState<boolean>(false);


    const { data : airports } = useQuery<Airport[]>({
        queryKey: ['airports'],
        queryFn: getAllAirports,
    });

    const mutation = useMutation({
        mutationFn: deleteAirportById,
        onSuccess: () => {  },
        onError: () => {  },
    });

    function deleteAirport(){
        if(!idToDelete) return 

        mutation.mutate(idToDelete, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['airports'] });
                setIdToDelete(null);
                setIsDeleteAlertOpen(false);
            },
            onError: (error) => {
                console.error('Error:', error);
            }
        });
    };

    function openDeleteConfirmation ( id:string ){
        setIsDeleteAlertOpen(true);
        setIdToDelete(id);
    }

    function goToUpdate ( key:string ){
        navigate('/admin/dashboard/airport/'+key)
    }


    
    return { 
        airports,
        deleteAirport,
        confirmDelete,
        openDeleteConfirmation,
        goToUpdate,
        isDeleteAlertOpen,
        setIsDeleteAlertOpen
    }


}

export default useAirportList