import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Airport } from "@core/airports/airport.model"
import { Building2, Calendar, MapPin, Pencil, Trash2 } from "lucide-react"
import type { ReactNode } from "react"

interface AirportCardProps {
    airport: Airport;
    footer?: ReactNode; // '?' hace que el footer sea opcional
}

const AirportCard = ( { airport, footer } : AirportCardProps ) => {
    return (
        <Card className="p-0">
            <div className="relative h-40 w-full overflow-hidden bg-muted">
                <img
                    src={airport.image}
                    alt={`${airport.name} airport`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
                <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                    {airport.key}
                </Badge>
            </div>
            <div className="space-y-3 p-5">
                <div>
                    <h3 className="text-lg font-semibold leading-tight">{airport.name}</h3>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {airport.city}, {airport.country}
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {airport.owner}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {airport.build}
                    </span>
                </div>
                {footer && (
                    <>{footer}</>
                )}
                
            </div>
        </Card>
    )
}

export default AirportCard