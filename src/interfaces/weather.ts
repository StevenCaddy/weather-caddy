export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherResponse {
  weather: Array<Weather>;
  coord: Coordinates;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  base: string;
  main: Temperature;
}

export interface CurrentWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
}

export interface HourlyDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyWeather {
  dt: number;
  temp: number;
  wind_speed: number;
  weather: HourlyDescription;
  pop: number;
}

export interface DailyTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface DailyDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  temp: DailyTemp;
  wind_speed: number;
  wind_deg: number;
  weather: Array<DailyDescription>;
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export interface WeatherOneCallResponse {
  lon: number;
  lat: number;
  current: CurrentWeather;
  hourly: Array<HourlyWeather>;
  daily: Array<DailyWeather>;
}
