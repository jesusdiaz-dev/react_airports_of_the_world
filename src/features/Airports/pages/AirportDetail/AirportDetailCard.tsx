import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Airport } from "@core/airports/airport.model";

interface CardProps {
    airport: Airport;
}

const AirportDetailCard: React.FC<CardProps> = ({ airport }) => {
    return (
        <Card className="max-w-3xl">
            <div className="grid md:grid-cols-2 gap-0">
                <div className=" h-64 md:h-auto ">
                    <img
                        src={airport.image}
                        alt={`airport ${airport.name}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col">
                    <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2 pt-4 md:pt-0">
                            <CardTitle className="text-xl ">{airport.name}</CardTitle>
                            <span className=" rounded-md bg-secondary px-3 py-1 text-sm font-mono font-semibold tracking-widest text-secondary-foreground">
                                {airport.key}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{airport.city}</p>
                    </CardHeader>

                    <Separator />

                    <CardContent className="pt-4 flex flex-col gap-3">
                        <DetailRow label="Country" value={airport.country} />
                        <DetailRow label="City" value={airport.city} />
                        <DetailRow label="Owner" value={airport.owner} />
                        <DetailRow label="Built" value={airport.build} />
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-wide w-16 shrink-0">{label}</span>
        <span className="text-sm font-medium">{value}</span>
    </div>
);

export default AirportDetailCard;