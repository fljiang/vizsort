import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './components/navbar';
import GridCanvas from './components/gridCanvas';
import { Container } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      canvasSize: 12
    }
  }

  render() {
    return (
      <Wrapper>
        <Navigation defaultValue={this.state.canvasSize} store={this.store}></Navigation>
        <NewContainer>
          <Grid>
            <GridCanvas></GridCanvas>
          </Grid>
        </NewContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: lightskyblue;
`;

const NewContainer = styled(Container)`
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
`;

const Grid = styled.div`
  /* position: absolute;
  width: 89.55%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: .5rem 1rem; */
  background-color: white;
`;
