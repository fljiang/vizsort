import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGridData } from '../redux/selectors';
import { changeGridSize, createNewGrid, setGridData } from '../redux/actions';

import {
    Container,
    Button,
    Navbar,
    Nav,
    Form,
    FormControl
} from 'react-bootstrap';
import styled from 'styled-components';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: 12,
            numEventClicks: 0
        }
        this.grid_change = this.grid_change.bind(this)
        this.handleGridSizeChange = this.handleGridSizeChange.bind(this)

    }

    pause(milliseconds) {
        var dt = new Date();
        while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
    }

    handleGridSizeChange = () => {
        this.props.changeGridSize(this.state.gridSize);
    }

    handleCreateNewGrid = () => {
        this.props.createNewGrid();
    }

    handleResetGrid = () => {
        const { gridData } = this.props;
        let numEventClicks = this.state.numEventClicks;
        let numOfClicks = 5;
        let newGridData = gridData.map((tup) => {
            return {
               x: tup.x,
               y: --tup.y
            }
        });
        this.props.setGridData(newGridData);
        if (numEventClicks < numOfClicks) {
            console.log('test');
            this.setState({ numEventClicks: numEventClicks++ });
            console.log(`numEventClicks: ${numEventClicks}, num: ${numOfClicks}`)
            this.pause(200);
            this.refs.resetGridBtn.click();
            this.handleResetGrid();
        } else {
            console.log('should not be in here');
            // this.setState({ numEventClicks: 0});
            return;
        }
    }

    grid_change(event) {
        this.setState({
            gridSize: event.target.value
        })
    }

    render() {
        const {
            gridSize
        } = this.state;
        return(
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Viz-Sort</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#New" onClick={this.handleCreateNewGrid}>New</Nav.Link>
                        <Nav.Link href="#Reset" ref="resetGridBtn" onClick={this.handleResetGrid}>Reset</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="12" className="size_ctrl" value={gridSize} onChange={this.grid_change}/>
                        <SubmitButton variant="outline-success" onClick={this.handleGridSizeChange}>Change Size</SubmitButton>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

const mapStateToProps = store => {
    const gridData = getGridData(store);
    return { gridData };
}

const SubmitButton = styled(Button)`
    color: lightskyblue;
    border: 1px solid lightskyblue;

    &:hover, &:active, &:focus {
        background-color: white !important;
        border: 1px solid lightskyblue !important;
        color: black !important;
        box-shadow: none !important;
        outline: none;

    }
`;

export default connect(mapStateToProps, { changeGridSize, createNewGrid, setGridData })(Navigation);