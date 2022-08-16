import {
    Button,
    Card,
    Container,
    Header,
    Icon,
    Image,
    Input,
    Modal,
  } from "semantic-ui-react";

function CreateProposal(props) {
    return(
        <Modal open={props.open}>
          <Modal.Header>Create Proposal</Modal.Header>
          <Modal.Content>
            {/* <Image
              size="medium"
              src={selectedNFT.metadata.metadata.image}
              wrapped
            /> */}
            <Modal.Description>

            <Input
                fluid
                label="Title"
                placeholder="Search..."
                size="medium"
                error={() => {}}
                // onChange={(e, { value }) => setQuery(value)}
            />

            <br />

            <Input
                fluid
                label="Contract Address"
                placeholder="Search..."
                size="medium"
                error={() => {}}
                // onChange={(e, { value }) => setQuery(value)}
            />
            <br />

            <Input
                fluid
                label="Opensea Link"
                placeholder="Search..."
                size="medium"
                // loading={() => {}}
                error={() => {}}
                // onChange={(e, { value }) => setQuery(value)}
            />
              <br />
              <br />
              <br />
              {/* <p>Would you like to create proposal to buy this NFT?</p> */}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={props.close}>Cancel</Button>
            <Button onClick={() => {}} positive>
              Create
            </Button>
          </Modal.Actions>
        </Modal>
    )
}

export default CreateProposal;