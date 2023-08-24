export interface PlanetModel {
  id: string;
  englishName: string;
  alternativeName: string;
  quote: string;
  quotee: string;
  moons: null | Array<any>;
  bodyType: string;
  isPlanet: boolean;
  discoveryDate: string;
  discoveredBy: string;
  gravity: number; // m/s^2.
  avgTemp: number; //  K
  density: number; // g/cm^3
  mass?: {
    massValue: string;
    massExponent: number;
  };
  vol?: {
    volValue: number; // 10n km3.
    volExponent: number;
  };
}

export interface PlanetState {
  planet: PlanetModel;
  errorMessage: string;
}

export const planetInitialState: PlanetState = {
  planet: {
    id: 'home',
    englishName: 'EARTH, THE FIRST FRONTIER',
    alternativeName: '',
    quote:
      "Modern science says: 'The sun is the past, the earth is the present, the moon is the future.' From an incandescent mass we have originated, and into a frozen mass we shall turn. Merciless is the law of nature, and rapidly and irresistibly we are drawn to our doom.",
    quotee: 'Nikola Tesla',
    moons: null,
    bodyType: 'Planet',
    isPlanet: true,
    discoveryDate: '',
    discoveredBy: '',
    gravity: 9.8,
    avgTemp: 288,
    density: 5.5136,
  },
  errorMessage: '',
};
