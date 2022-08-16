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

function Vote(props) {
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
            <Button positive>Vote</Button>
        </Modal.Actions>

        </Modal>
    )
}

export default Vote