import { StatCard } from "@/shared/components/ui/StatCard"
import AirportCard from "./Components/AirportCard"
import type { Airport } from "@core/airports/airport.model"
import { Building2, Calendar, Pencil, Plane, Trash2 } from "lucide-react"
import useAirportList from "./useAirportList"
import { Button } from "@/components/ui/button"
import ConfirmDialog from "@/shared/components/ui/dialogs/ConfirmDialog"
import { Link } from "react-router-dom"
import useStats from "./useStats"

const AdminAiportList = () => {
    
    const {
        airports , 
        openDeleteConfirmation, 
        goToUpdate, 
        deleteAirport,
        setIsDeleteAlertOpen,
        isDeleteAlertOpen
    } = useAirportList();

    const {airportsQuantity, totalFlights, totalSoldOutFlights} = useStats();

    return (
        <section>
            <div className="flex flex-row flex-wrap mb-12 gap-4">
                <StatCard icon={Plane} smallText="Total Airports" bigText={airportsQuantity.toString()}></StatCard>
                <StatCard icon={Calendar} smallText="Total Flights" bigText={totalFlights.toString()}></StatCard>
                <StatCard icon={Building2} smallText="Sold-out Flights" bigText={totalSoldOutFlights.toString()}></StatCard>
            </div>

            <div className="flex justify-start mb-4">
                <Link to="/admin/dashboard/airport/new">
                    <Button className="text-xl px-8 py-4 rounded-lg" variant={"outline"} >Create</Button>
                </Link>
            </div>

            <div className="gap-8 grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
                {
                    airports && airports.map((airport,index)=>
                        <AirportCard 
                            key={airport.id}
                            airport={airport} 
                            footer={
                                <>
                                <div className="flex gap-2 pt-1">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() => goToUpdate(airport.key)}
                                    >
                                        <Pencil className="h-4 w-4" />
                                        Update
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() => openDeleteConfirmation(airport.key)}>
                                        <Trash2 className="h-4 w-4" />
                                        Delete
                                    </Button>
                                    
                                </div>
                            </>
                        }/>
                    )
                }

            </div>

            <ConfirmDialog 
                title = 'Delete Airport'
                text = 'Are you shure to delete the aiport?'
                open = {isDeleteAlertOpen}
                onOpenChange = {setIsDeleteAlertOpen}
                onConfirm = {deleteAirport}
            />
        </section>

    )
}

export default AdminAiportList