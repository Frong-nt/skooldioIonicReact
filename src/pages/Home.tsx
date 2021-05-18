import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { Route } from "workbox-routing";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank 2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
        <IonList>
          <IonItem>
            <p>item1</p>
          </IonItem>
          <IonItem>
            <p>item2</p>
          </IonItem>
          <IonButton
            onClick={() => {
              props.history.push("/new");
            }}
          >
            <p>Go to route new item</p>
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
