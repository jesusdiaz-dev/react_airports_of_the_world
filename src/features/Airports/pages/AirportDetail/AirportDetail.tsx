import { useParams } from "react-router-dom";
import useAirportDetail from "./useAirportDetail";
import Spinner from "../../../../shared/components/ui/spinner";
import AirportDetailCard from "./AirportDetailCard";
import TitlePage from "../../../../shared/components/ui/TitlePage";

const AirportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { error, isLoading, airport } = useAirportDetail(id);

  if (error) return <div>Error</div>

  if (isLoading) return <div><Spinner /></div>

  if (!airport) {
    return <div>Airport not found</div>;
  }

  return (
    <div className="mx-auto max-w-5xl p-4 flex flex-col justify-center items-center">
      <TitlePage text="Detail Page"></TitlePage>
      {/* <p>Airport ID: {airport.key} {airport.city}</p> */}
      <AirportDetailCard airport={airport} />

    </div>
  )
}

export default AirportDetail

