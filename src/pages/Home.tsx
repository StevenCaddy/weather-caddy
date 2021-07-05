import React, { useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useGetWeatherData } from '../queries/weather';
import Temperature from '../components/temperature/Temperature';
import { menuOutline, addOutline } from 'ionicons/icons';
import Adjective from '../components/adjective/adjective';
import TimeStamp from '../components/time stamp/TimeStamp';
import Gradient from '../components/gradient/gradient';

const Home: React.FC = () => {
  const { data: weatherData } = useGetWeatherData();
  const weatherID = weatherData?.weather[0].id;
  const [searchText, setSearchText] = useState('');
  if (!weatherID) {
    return <div></div>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={menuOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" translucent={true}>
          <IonToolbar>
            <IonTitle size="large">{weatherData?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Gradient weatherID={weatherID}>
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
