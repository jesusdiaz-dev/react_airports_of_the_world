export interface Flight {
    id:             string;
    origin:         string;
    destination:    string;
    departure:      Date;
    arrival:        Date;
    price:          number;
    seats:          number;
    availableSeats: number;
    airline:        string;
    status:         string;
}
