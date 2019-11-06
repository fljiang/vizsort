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
            numEventClicks: 0,
            gridData: [],
            gridDataLength: 0,
            itemsRemoved: 0,
            i: 0,
            j: 0
        }
        this.grid_change = this.grid_change.bind(this)
        this.handleGridSizeChange = this.handleGridSizeChange.bind(this)

    }

    componentDidMount() {
        this.setState({
            gridDataLength: this.props.gridData.length
        })
    }

    handleGridSizeChange = () => {
        this.props.changeGridSize(this.state.gridSize);
    }

    handleCreateNewGrid = () => {
        this.props.createNewGrid();
    }

    handleResetGrid = () => {
        let { gridData } = this.props;
        let {
            i,
            j,
            gridDataLength,
            itemsRemoved
        } = this.state;
        if(gridData.length < 1) return;
        if (i < gridDataLength - 1) {
            setTimeout(() => {
                if (gridData[j].y > gridData[j+1].y) {
                    gridData.splice(j+1, 1);
                    itemsRemoved++;
                    for(let n = j + 1; n < gridDataLength - itemsRemoved; n++) {
                        gridData[n].x--;
                    }
                    j--;
                }
                this.props.setGridData(gridData);
                j++;
                this.setState({
                    i: ++i,
                    j,
                    itemsRemoved
                });
                this.refs.resetGridBtn.click();
            }, 400);
        }

        this.setState({
            gridData
        });
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