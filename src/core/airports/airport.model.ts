
export interface Airport {
  key:     string;
  name:    string;
  country: string;
  city:    string;
  owner:   string;
  build:   string;
  image:   string;
}

export type AirportSummary = Pick<Airport, 'key'|'name'|'city'|'country' >;