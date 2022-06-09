import { IonButton, IonCard, IonCol, IonContent, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { BigNumber, ethers } from 'ethers';

import './Tab4.css';

import abiABDAO from "./abiABDAO.json"
import abiVerified from "./abiVerified.json"
import abiDelegator   from "./abiDelegator.json"
import abiStaff from "./abiStaff.json"
import abiToken  from "./abiToken.json"

let provider: ethers.providers.Web3Provider; 
let signer: ethers.providers.JsonRpcSigner;
let addr: string;

let abdaoContract: ethers.Contract;
let verifiedContract: ethers.Contract;
let delegatorContract: ethers.Contract;
let staffContract: ethers.Contract;
let tokenContract: ethers.Contract;


async function ethersVerify() {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      verifiedContract = new ethers.Contract("0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7", abiVerified, signer);
      delegatorContract = new ethers.Contract("0x0239777D29829bb61D3964438385799c2Ce4873c", abiDelegator, signer);
      staffContract = new ethers.Contract("0x2119bb142701E44c4db3Df29c2251d446b300f2f", abiStaff, signer);
      tokenContract = new ethers.Contract("0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df", abiToken, signer);
      await verifiedContract.safeMint();
      return addr;
    }
    catch (error) {
    alert("Transaction rejected by user");
    console.log(error);
    return "Error"
  }
}

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABDAO Dashboard | Verifiy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABDAO Dashboard | Verify</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <br/>
        <br/>
        <IonRow><IonCol> <IonTitle>Verify that you an individual for participating in ABDAO governance</IonTitle></IonCol></IonRow>
        <br/>
        <br/>
        <br/>
        <br/>
        <IonButton onClick={async() => ethersVerify()}>Verify now!</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
