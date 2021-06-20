import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IonApp, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addDecorator } from '@storybook/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../src/tailwind.output.css';

const IonWrapper = ({ children }) => {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <IonApp>
          <IonPage>
            <IonReactRouter>{children}</IonReactRouter>
          </IonPage>
        </IonApp>
      </QueryClientProvider>
  );
};

addDecorator((storyFn) => <IonWrapper>{storyFn()}</IonWrapper>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
