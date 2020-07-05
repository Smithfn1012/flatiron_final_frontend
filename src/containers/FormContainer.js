import React, { Component } from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AddPlantForm from "../components/AddPlantForm";
import { Divider, Grid, Segment, Responsive } from "semantic-ui-react";

class FormContainer extends Component {
  render() {
    return (
      <Segment className="forms">
        <Responsive as={Segment} minWidth={775}>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <AddAnimalForm />
            </Grid.Column>
            <Grid.Column>
              <AddPlantForm />
            </Grid.Column>
          </Grid>
          <Divider vertical>OR</Divider>
        </Responsive>

        <Responsive as={Segment} maxWidth={774}>
          <Grid relaxed="very" stackable>
            <Grid.Column>
              <AddAnimalForm />
            </Grid.Column>
            <Divider horizontal>OR</Divider>
            <Grid.Column>
              <AddPlantForm />
            </Grid.Column>
          </Grid>
        </Responsive>
      </Segment>
    );
  }
}
export default FormContainer;