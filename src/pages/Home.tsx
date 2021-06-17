import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useGetWeatherData } from '../queries/weather';
import './Home.css';
import Temperature from "../components/temperature/Temperature";

const Home: React.FC = () => {

  const { data: weatherData } = useGetWeatherData();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <Temperature label="Low" value={weatherData?.main.temp_min}/>
          <Temperature label="Current" value={weatherData?.main.temp}/>
          <Temperature label="High" value={weatherData?.main.temp_max}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
