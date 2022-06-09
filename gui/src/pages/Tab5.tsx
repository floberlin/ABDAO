import { IonButton, IonCard, IonCol, IonContent, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab5.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABDAO Dashboard | Create Proposal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABDAO Dashboard | Verify</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard><IonInput value={"Title"}></IonInput></IonCard>
        <IonCard><IonInput value={"Text"}></IonInput><br/><br/></IonCard>
        <IonRow><IonCol><IonButton>Create</IonButton></IonCol><IonCol><IonButton routerLink="/tab2">Back</IonButton></IonCol></IonRow>


        </IonContent>
    </IonPage>
  );
};

export default Tab5;
