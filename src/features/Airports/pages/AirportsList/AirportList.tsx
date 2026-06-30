import useAirportList from "./useAirportList";
import Spinner from "../../../../shared/components/ui/Spinner";
import type { AirportSummary } from "@core/airports/airport.model";
import AirportCardList from "./airport-card";
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/ui/Container";
import TitlePage from "@/shared/components/ui/TitlePage";


const AirportList = () => {
  const {isLoading, error, airports, refetch} = useAirportList();

  if(isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <Spinner size="lg" label="Loading airports…" />
      </div>
    );
  }
  if(error) {
    return <h1>Error: {error}</h1>
  }
  if(airports.length === 0) {
    return <div >
      <h1>No airports found</h1>
      <button onClick={refetch}>Reload Airports</button>
    </div>
  }else{
    return (
      <Container >
        <div >
          <TitlePage text="Airport List"/>
          <p className="text-white/60 text-sm mb-6">{airports.length} airports found</p>
          <hr className="border-white/20 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {airports.map((airport: AirportSummary) => (
              <Link to={`/airports/${airport.key}`} key={airport.key}>
                <AirportCardList airport={airport} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    )
  }

}

export default AirportList;