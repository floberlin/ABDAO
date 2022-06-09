import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { BigNumber, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from "axios";


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

async function etherscCreateProposal(data:string, ty:string, onBoardaddr:string) {
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
      const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRFRWMxNjFlOUVCMDFENzEyODhmMEY3ZkVCYzMyMzk2RjFCODhGMTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1Mjk2MzM1NDExMiwibmFtZSI6ImRzYWxhcnkifQ.JKspk1CYUK9UTc1dMrEDTfDV53kGouZDIALydzFNc_c` }
    };
      const bodyParameters = {
        "data": data
     };
     const cid:any =
         await axios.post(
         'https://api.nft.storage/upload',
         bodyParameters,
         config
     ).then(( response ) => {
       return(response as any).data.value.cid;
     } )
     .catch(( error ) => {
       return "error"
     })

      await abdaoContract.createProposal(cid,ty,(ty === "onboard" ? onBoardaddr : "0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078"));
      return addr;
    }
    catch (error:any) {
        alert(JSON.parse(error.toString().split("(error=")[1].split("}},")[0]+"}}").message);
        return "Error"
  }
}

async function voteFor(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      await abdaoContract.voteFor((cid.obj as string));
      return addr;
    }
    catch (error:any) {
    alert(JSON.parse(error.toString().split("(error=")[1].split("}},")[0]+"}}").message);
    return "Error"
  }
}

async function voteAgainst(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      await abdaoContract.voteAgainst((cid.obj as string));
      return addr;
    }
    catch (error:any) {
      alert(JSON.parse(error.toString().split("(error=")[1].split("}},")[0]+"}}").message);
      return "Error"
  }
}

async function voteAbstain(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      await abdaoContract.voteAbstain((cid.obj as string));
      return addr;
    }
    catch (error:any) {
      alert(JSON.parse(error.toString().split("(error=")[1].split("}},")[0]+"}}").message);
      return "Error"
  }
}

async function executeProposal(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      await abdaoContract.executeProposal((cid.obj as string), "0x2119bb142701E44c4db3Df29c2251d446b300f2f");
      return addr;
    }
    catch (error:any) {
      alert(JSON.parse(error.toString().split("(error=")[1].split("}},")[0]+"}}").message);
      return "Error"
  }
}

async function getForVotes(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      let votes = await abdaoContract.getForVotes(cid.ipfsCID);
      return BigNumber.from(votes).toString();
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function getAgainstVotes(cid:any) {
  try { 
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      let votes = await abdaoContract.getAgainstVotes(cid.ipfsCID);
      return BigNumber.from(votes).toString();
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function getAbstainVotes(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      let votes = await abdaoContract.getAbstainVotes(cid.ipfsCID);
      return BigNumber.from(votes).toString();
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function getStatus(cid:any) {
  try {
      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      let status = await abdaoContract.getProposalStatus(cid.ipfsCID);
      console.log(status);
      return status;
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function getProposals() {
  try {

      provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      addr = await signer.getAddress();
      abdaoContract = new ethers.Contract("0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078", abiABDAO, signer);
      let proposals = await abdaoContract.getProposals();
      return proposals;
    }
    catch (error) {
    alert("Please install a web3 wallet like Metamask");
    console.log(error);
    return "Error"
  }
}

async function _getIPFSContent(ipfsCID:string) {
  const resp =
  axios.get(
    'https://dweb.link/ipfs/'+ipfsCID
  ).then((result:any) => {return (result.data.data as string)})
  .catch(error => {return "Not found"})
 return resp;
}



const Tab2: React.FC = () => {

  const [input, setInput] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [inputAddr, setInputAddr] = useState<string>("");
  const [proposals, setProposals] = useState<any>([]);
  const [status, setStatus] = useState<any>("-");

  const [foor, setFoor] = useState<any>("");
  const [against, setAgainst] = useState<any>("");
  const [abstain, setAbstain] = useState<any>("");
  const [ipfsContent, setipfsContent] = useState<string>("");
  const [ipfsCID, setipfsCID] = useState<string>("");




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABDAO Dashboard | Proposals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABDAO Dashboard | Proposals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <IonButton onClick={async() => etherscCreateProposal(input,type,inputAddr) }>Create new proposal</IonButton>
        <IonInput value={input as any} placeholder="Input Proposal Description" onIonChange={e => setInput(e.detail.value!)} clearInput></IonInput>
        <IonItem>
            <IonLabel>Type</IonLabel>
            <IonSelect value={type} placeholder="Select One" onIonChange={(e) => setType(e.detail.value)}>
              <IonSelectOption value="operative">operative (off-chain)</IonSelectOption>
              <IonSelectOption value="strategic">strategic (off-chain)</IonSelectOption>
              <IonSelectOption value="onboard">onboard (on-chain)</IonSelectOption>
            </IonSelect>
          </IonItem>
        <IonInput hidden={type === "onboard" ? false : true} value={inputAddr as any} placeholder="Input User Address for Onboarding" onIonChange={e => setInputAddr(e.detail.value!)} clearInput></IonInput>
        </IonCard>
        <br/>
        <br/>
        <br/>
        <br/>
        <IonCard>
        <IonButton onClick={async() => setProposals(await getProposals())}>Refresh Proposal List</IonButton>

        <IonList>
        {Array.from((proposals as string[])).map((obj:any) => {
                return (
                  <IonItem key={obj}>
                  <IonLabel key={obj}>{obj}</IonLabel>
                  
                  <IonButton onClick={async() => voteFor({obj}) }>For</IonButton>
                   | 
                  <IonButton onClick={async() => voteAgainst({obj}) }>Against</IonButton>
                  | 
                  <IonButton onClick={async() => voteAbstain({obj}) }>Abstain</IonButton>
                   | | | 
                  <IonButton onClick={async() => executeProposal({obj}) }>Execute</IonButton>
                  </IonItem>
                )})}
        </IonList>
        </IonCard>
        <br/>
        <br/>
        <br/>
        <br/>
        <IonCard>
        <IonInput value={ipfsCID as any} placeholder="Enter Proposal ID" onIonChange={e => setipfsCID(e.detail.value!)} clearInput></IonInput><br/>
        <IonButton onClick={async () => {setipfsContent(await _getIPFSContent(ipfsCID));setFoor(await getForVotes({ipfsCID}));setAgainst( await getAgainstVotes({ipfsCID})) ;setAbstain( await getAbstainVotes({ipfsCID})); setStatus(await getStatus({ipfsCID})) }}>Get proposal details</IonButton>
        <IonInput value={ipfsContent as string} clearInput contentEditable="false" placeholder="Proposal Content"></IonInput>
        <br/>
        <IonText> For: {foor} | Against: {against} | Abstained: {abstain}{async (text:any) => await getForVotes({ipfsCID})} |</IonText>
        <br/>
        <br/>
        <IonText> Status: {status === "" ? "Ongoing Voting" : status}</IonText>
        <br/>
        <br/>
        </IonCard>
        <br/>
        <br/>
        <br/>
        <br/>
        </IonContent>
    </IonPage>
  );
};

export default Tab2;
