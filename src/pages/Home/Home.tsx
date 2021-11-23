import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import Temperature from '../../components/temperature/Temperature';
import Adjective from '../../components/adjective/adjective';
import TimeStamp from '../../components/time stamp/TimeStamp';
import Gradient from '../../components/gradient/gradient';
import InfoList from '../../components/info list/InfoList';
import Sunset from '../../components/sunrise/sunset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { WeatherResponse, WeatherOneCallResponse } from '../../interfaces/weather';
import DailyForecastTable from '../../components/daily/DailyForecastTable';

interface HomeProps {
  weatherID: number | null;
  weatherData?: WeatherResponse;
  weatherOneCallData?: WeatherOneCallResponse;
  setCity: (city: string | undefined) => void;
}

const Home: React.FC<HomeProps> = ({ weatherID, weatherData, weatherOneCallData, setCity }) => {
  const [searchText, setSearchText] = useState<string | undefined>();

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(searchText);
  };

  const clearCity = () => {
    setSearchText('');
    setCity('');
  };

  if (!weatherID) {
    return (
      <IonPage>
        <IonContent fullscreen={true}>
          <Gradient weatherID={weatherID}>
            <IonHeader className="ion-no-border bg-gray-300">
              <IonToolbar>
                <form onSubmit={searchSubmit}>
                  <IonSearchbar
                    debounce={50}
                    className="searchBar"
                    value={searchText}
                    onIonBlur={() => {
                      setCity(searchText);
                    }}
                    onIonChange={(e) => {
                      setSearchText(e.detail.value!);
                    }}
                  ></IonSearchbar>
                </form>
              </IonToolbar>
            </IonHeader>
            <div className="mt-20">
              <div className="text-red-400 text-2xl bg-gray text-center">
                <h1>City does not exist.</h1>
                <IonButton onClick={clearCity}>Clear</IonButton>
              </div>
            </div>
          </Gradient>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <Gradient weatherID={weatherID}>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <form onSubmit={searchSubmit}>
                <IonSearchbar
                  className="searchBar"
                  value={searchText}
                  onIonBlur={() => {
                    setCity(searchText);
                  }}
                  onIonChange={(e) => setSearchText(e.detail.value!)}
                ></IonSearchbar>
              </form>
            </IonToolbar>
          </IonHeader>
          <div>
            <div>
              <TimeStamp value={weatherData?.dt} timeZone={weatherData?.timezone} />
            </div>
            <div className="mt-5">
              <div className="mb-5 ml-2 text-3xl md:text-5xl md:text-center">{weatherData?.name}</div>
              <div>
                <Adjective weatherID={weatherID} />
              </div>
              <div className="flex flex-row justify-left md:justify-center">
                <div className="text-6xl pl-2">
                  <Temperature label="" value={weatherData?.main.temp} />
                </div>
                <div className="flex flex-col justify-center px-8 mr-7">
                  <div>
                    <Temperature label="" value={weatherOneCallData?.daily[0].temp.max} />
                  </div>
                  <div className="bg-gray-300 w-full h-px"></div>
                  <div>
                    <Temperature label="" value={weatherOneCallData?.daily[0].temp.min} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-10 md:justify-center">
            <div className="pl-2 flex flex-col mt-4">
              <InfoList
                feelsLike={weatherData?.main.feels_like}
                humidity={weatherData?.main.humidity}
                pressure={weatherData?.main.pressure}
                windSpeed={weatherData?.wind.speed}
                windDeg={weatherData?.wind.deg}
                pop={weatherOneCallData?.daily[0].pop}
              />
            </div>
            <div className="flex flex-col justify-center mt-8 mr-7 w-12 h-12">
              <div className="flex flex-row space-x-14 mt-4">
                <div className="text-xl">
                  <FontAwesomeIcon icon={faCloudSun} />
                </div>
                <div className="text-xl">
                  <FontAwesomeIcon icon={faCloudMoon} />
                </div>
              </div>
              <div className="flex flex-row text-sm md:text-lg pr-6 space-x-12">
                <div className="flex flex-col w-12">
                  <div>Rise:</div>
                  <div>
                    <Sunset value={weatherData?.sys.sunrise} timeZone={weatherData?.timezone} />
                  </div>
                </div>
                <div className="flex flex-col w-12">
                  <div>Set:</div>
                  <div>
                    <Sunset value={weatherData?.sys.sunset} timeZone={weatherData?.timezone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:justify-center">
            <div className="mt-8 ml-2 text-2xl md:text-center md:text-3xl">Daily Forecast</div>
            <DailyForecastTable weatherData={weatherOneCallData?.daily} />
          </div>
        </Gradient>
      </IonContent>
    </IonPage>
  );
};

export default Home;
