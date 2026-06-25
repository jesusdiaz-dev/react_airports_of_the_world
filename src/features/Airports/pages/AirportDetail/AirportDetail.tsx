import { useParams } from "react-router-dom";
import useAirportDetail from "./useAirportDetail";
import Spinner from "../../../../shared/components/ui/spinner";

const AirportDetail = () => {
  const { id } = useParams<{id : string}>();
  const {error,isLoading, airport } = useAirportDetail(id);

  if(error) return <div>Error</div>

  if(isLoading) return <div><Spinner/></div>

  // Like an Angular @if (!airport) guard clause
  if (!airport) {
    return <div>Airport not found</div>;
  }

  return (
    <div className="p-4 text-red-500">
      <h1>Airport Detail</h1>
      <p>Airport ID: {airport.key} {airport.city}</p>
    </div>
  )
}

export default AirportDetail

