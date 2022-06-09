import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
//import { isMobile } from "react-device-detect";
//import WalletConnectProvider from "@walletconnect/web3-provider";

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

let verifiedG = false;
let staffG = false;
let deleG = false;

async function ethersConnect(this: any) {
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
      const balanceVer = await verifiedContract.balanceOf(addr);
      if (BigNumber.from(balanceVer).toString() !== "0") {
        verifiedG = true;
        }
      const balanceStaff = await staffContract.balanceOf(addr);
      if (BigNumber.from(balanceStaff).toString() !== "0") {
        staffG = true;
        }
        const balanceDel = await delegatorContract.balanceOf(addr);
        if (BigNumber.from(balanceDel).toString() !== "0") {
        deleG = true;
          }  
      return addr;
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function getTokenBalance() {
  try {
    const balance = await tokenContract.balanceOf(addr);
    return BigNumber.from(balance).toString();
  }
  catch (error) {
    console.log("Error getting token balance");
    console.log(error);
    return "Error"
  }
}


const Tab1: React.FC = () => {

const [address, setAddress] = useState<String>("Connect Wallet");
const [balance, setBalance] = useState<String>("0");

const [verified, setVerified] = useState<Boolean>(false);
const [staff, setStaff] = useState<Boolean>(false);
const [delegator, setDelegator] = useState<Boolean>(false);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABDAO Dashboard | Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABDAO Dashboard | Overview</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={async () => {setAddress(await ethersConnect());setBalance(await getTokenBalance());setVerified(verifiedG);setStaff(staffG);setDelegator(deleG)}}>{address}</IonButton>
        <IonGrid>
        <IonRow><IonCol> <IonTitle>ABD Token Balance:</IonTitle></IonCol><IonCol><IonTitle>{balance}</IonTitle></IonCol></IonRow>
        <IonRow><IonCol> <IonTitle>Verified:</IonTitle></IonCol><IonCol><IonTitle>{verified ? "Yes" : "No" }</IonTitle></IonCol></IonRow> 
        <IonRow><IonCol> <IonTitle>Staff Member:</IonTitle></IonCol><IonCol><IonTitle>{staff ? "Yes" : "No" }</IonTitle></IonCol></IonRow> 
        <IonRow><IonCol> <IonTitle>Delegator:</IonTitle></IonCol><IonCol><IonTitle>{delegator ? "Yes" : "No" }</IonTitle></IonCol></IonRow> 

        <IonButton hidden={!!verified} routerLink="/tab4">Verify Now</IonButton>
        </IonGrid>
      </IonContent> 
    </IonPage>
  );
};

export default Tab1;
