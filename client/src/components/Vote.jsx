import { useWeb3React } from "@web3-react/core";
import {
    Button,
    Card,
    Container,
    Header,
    Icon,
    Image,
    Input,
    Modal,
    Label
  } from "semantic-ui-react";

import {ethers} from "ethers";
import Governence from "../abi/Governence.json";

// const { active,activate,library: provider } = useWeb3React();

function Vote(props) {

    function castVote() {
        console.log("clicked")
        const signer = props.provider;
        console.log(props.provider)
        const ca = "0xe442f72b802bbcf7b3ec7b90278becc2fc46985c"
        const contract = new ethers.Contract(ca,Governence,signer);
        contract.castVote(
          [0],
          12
        )
    }

    return(
        <Modal open={props.open}>

        <Modal.Header>Vote</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Input
                    fluid
                    placeholder="0.00" 
                    label="MATIC"
                    size="medium"
                />
                <Label pointing>Voting {props.vote}</Label>
            </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
            <Button onClick={props.close}>Cancel</Button>
            <Button positive onClick={castVote}>Vote</Button>
        </Modal.Actions>

        </Modal>
    )
}

export default Vote