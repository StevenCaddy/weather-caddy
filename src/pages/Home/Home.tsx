import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import Temperature from '../../components/temperature/Temperature';
import Adjective from '../../components/adjective/adjective';
import TimeStamp from '../../components/time stamp/TimeStamp';
import Gradient from '../../components/gradient/gradient';
import InfoList from '../../components/info list/InfoList';
import Sunset from '../../components/sunrise/sunset';
import DailyTable from '../../components/daily/DailyTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { WeatherResponse, WeatherOneCallResponse } from '../../interfaces/weather';

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
            <div className="mt-28">
              <div>
                <Adjective weatherID={weatherID} />
              </div>
              <div className="flex flex-row justify-left">
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
          <div className="flex flex-row space-x-10">
            <div className="pl-2 flex flex-col">
              <InfoList
                feelsLike={weatherData?.main.feels_like}
                humidity={weatherData?.main.humidity}
                pressure={weatherData?.main.pressure}
                windSpeed={weatherData?.wind.speed}
                windDeg={weatherData?.wind.deg}
              />
            </div>
            <div className="flex flex-col justify-center mr-7">
              <div className="flex flex-row space-x-16">
                <div>
                  <FontAwesomeIcon icon={faCloudSun} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faCloudMoon} />
                </div>
              </div>
              <div className="flex flex-row text-xs pr-6 space-x-10">
                <div className="flex flex-col">
                  Rise: <Sunset value={weatherData?.sys.sunrise} timeZone={weatherData?.timezone} />
                </div>
                <div className="flex flex-col">
                  Set: <Sunset value={weatherData?.sys.sunset} timeZone={weatherData?.timezone} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <table className="table-auto text-s border-collapse">
              <thead>
                <tr className="border">
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[0].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[1].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[2].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[3].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[4].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[5].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[6].dt} />
                  </th>
                  <th className="w-1/8 border">
                    <DailyTable value={weatherOneCallData?.daily[7].dt} />
                  </th>
                </tr>
              </thead>
              <tbody className="border">
                <tr>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[0].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[1].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[2].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[3].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[4].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[5].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[6].temp.max} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[7].temp.max} />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[0].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[1].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[2].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[3].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[4].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[5].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[6].temp.min} />
                  </td>
                  <td className="w-1/8 border">
                    <Temperature label="" value={weatherOneCallData?.daily[7].temp.min} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Gradient>
      </IonContent>
    </IonPage>
  );
};

export default Home;
