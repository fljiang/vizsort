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
        <Container>
          <Grid>
            <GridCanvas></GridCanvas>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightskyblue;
  position: absolute;
`;

const Grid = styled.div`
  position: absolute;
  width: 89.55%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: .5rem 1rem;
  background-color: white;
`;
