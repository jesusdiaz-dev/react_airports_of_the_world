import type { AirportSummary } from "@core/airports/airport.model"

type Props = {
  airport: AirportSummary;
}

const AirportCardList = ({ airport }: Props) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">#{airport.key}</span>
        <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-md tracking-wider">
          {airport.country}
        </span>
      </div>
      <h2 className="text-white font-semibold text-sm leading-snug mb-1">{airport.name}</h2>
      <p className="text-white/60 text-xs">{airport.city}</p>
    </div>
  );
}

export default AirportCardList;