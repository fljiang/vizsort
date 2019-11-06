import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './components/navbar';
import SideBar from './components/sidebar';
import GridCanvas from './components/gridCanvas';
import { Container } from 'react-bootstrap';

import { changeGridSize, createNewGrid } from './redux/actions';

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
        {/* <SideBarWrapper>
          <SideBar></SideBar>
        </SideBarWrapper>  */}
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

const SideBarWrapper = styled.div`
  position: fixed;
  width: 15em;
`;

const Grid = styled.div`
  position: absolute;
  width: 81.25%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: .5rem 1rem;
  background-color: white;
`;
