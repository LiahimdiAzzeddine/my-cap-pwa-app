import React, { useState } from "react";
import {
  IonTabs,
  IonTab,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonTitle,
  IonContent,
  IonIcon,
  IonPage,
  IonText,
} from "@ionic/react";

import { scanCircleOutline, informationCircleOutline } from "ionicons/icons";
import Home from "./pages/home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { setupIonicReact } from "@ionic/react";
import "./theme/variables.css";
setupIonicReact();

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonTabs>
      <IonTab tab="home">
       <Home/>
      </IonTab>
 
      <IonTab tab="search">
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText>
          <h2>Instructions pour le Scanner</h2>
          <p>
            Ce scanner est conçu pour l'application mobile Tico. Il ne prend pas en charge le scan vertical, donc le code-barres doit être placé à l'intérieur du rectangle et correspondre à l'image de fond.
          </p>
          <p>
            Le scanner est équipé d'un autofocus. Stabilisez votre téléphone, approchez ou éloignez-le lentement du code-barres pour améliorer la détection.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
      </IonTab>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={scanCircleOutline} />
          Scanner
        </IonTabButton>
        <IonTabButton tab="search">
          <IonIcon icon={informationCircleOutline} />
          Instructions
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default App;
