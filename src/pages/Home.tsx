import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import { useGetWeatherData } from '../queries/weather';
import Temperature from '../components/temperature/Temperature';
import Adjective from '../components/adjective/adjective';
import TimeStamp from '../components/time stamp/TimeStamp';
import Gradient from '../components/gradient/gradient';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string | undefined>();
  const { data: weatherData, refetch } = useGetWeatherData(searchText);
  const weatherID = weatherData?.weather[0].id;

  if (!weatherID) {
    return <div></div>;
  }
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <Gradient weatherID={weatherID}>
          <IonHeader>
            <IonToolbar>
              <IonSearchbar
                value={searchText}
                onIonBlur={() => refetch()}
                onIonChange={(e) => setSearchText(e.detail.value!)}
              ></IonSearchbar>
            </IonToolbar>
          </IonHeader>
          <div>
            <div>
              <TimeStamp value={weatherData?.dt} timeZone={weatherData?.timezone} />
            </div>
            <div className="mt-40">
              <div>
                <Adjective weatherID={weatherID} />
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-6xl">
                  <Temperature label="" value={weatherData?.main.temp} />
                </div>
                <div className="flex flex-col justify-center px-8">
                  <div>
                    <Temperature label="" value={weatherData?.main.temp_max} />
                  </div>
                  <div className="bg-gray-300 w-full h-px"></div>
                  <div>
                    <Temperature label="" value={weatherData?.main.temp_min} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Gradient>
      </IonContent>
    </IonPage>
  );
};

export default Home;
