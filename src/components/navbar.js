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
    FormControl,
    NavDropdown
} from 'react-bootstrap';
import styled from 'styled-components';

const resetPlotColors = (gridData) => {
    return gridData.map(data => ({
        x: data.x,
        y: data.y,
        color: 0
    }));
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: 12,
            originalGridData: [],
            gridDataLength: 0,
        }
    }

    componentDidMount() {
        this.setState({
            gridDataLength: this.props.gridData.length,
            originalGridData: JSON.parse(JSON.stringify(this.props.gridData))
        });

        // fix mobile view
        let windowWidth = window.innerWidth;
        let $dropdown = document.getElementById('basic-nav-dropdown');
        if(windowWidth < 992) {
            $dropdown.style.paddingLeft = 0;
        }
    }

    handleGridSizeChange = () => {
        this.props.changeGridSize(this.state.gridSize);
    }

    handleCreateNewGrid = () => {
        let newGridData = [];
        for(let i = 0; i < 25; i++) {
            newGridData.push({
                x: i,
                y: Math.floor(Math.random()*25) + 1,
                color: 0
            })
        }
        this.setState({
            gridDataLength: newGridData.length,
            originalGridData: JSON.parse(JSON.stringify(newGridData))
        });
        this.props.setGridData(newGridData);
    }

    handleResetGrid = () => {
        this.setState({
            gridDataLength: this.state.originalGridData.length
        })
        this.props.setGridData(JSON.parse(JSON.stringify(this.state.originalGridData)));
    }

    handleSelectionSort = () => {
        let { gridDataLength } = this.state;
        let currMin, currMinIndex, temp, j, gridData;
        for (let i = 0; i < gridDataLength - 1; ++i) {
            setTimeout(() => {
                gridData = this.props.gridData;
                for (j = i + 1; j < gridDataLength; j++) {
                    currMin = gridData[i].y;
                    currMinIndex = i
                    if (gridData[j].y < currMin) {
                        currMin = gridData[j].y;
                        currMinIndex = j;
                    }
                    temp = gridData[i].y;
                    gridData[i].y = currMin;
                    gridData[currMinIndex].y = temp;
                }
                this.props.setGridData(gridData);
            }, 100 * i);
        }
    }

    handleStalinsort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let j = 0;
        for (let i = 0; i < gridDataLength - 1; i++) {
            setTimeout(() => {
                if (gridData[j].y > gridData[j + 1].y) {
                    gridData = resetPlotColors(gridData);
                    gridData[i - (i - j)].color = 4;
                    gridData.splice(j + 1, 1);
                    for(let n = j + 1; n < gridDataLength - (i - j) - 1; n++) {
                        gridData[n].x--;
                    }
                    j--;
                }
                this.props.setGridData(gridData);
                j++;
                if (i === gridDataLength - 2) {
                    this.props.setGridData(resetPlotColors(gridData));
                    this.setState({
                        gridDataLength: gridData.length
                    });
                }
            }, 200 * i);
        }
    }

    handleInsertionSort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let j, currValue;
        for (let i = 1; i < gridDataLength; i++) {
            setTimeout(() => {
                currValue = gridData[i].y;
                for (j = i - 1; j >= 0 && currValue < gridData[j].y; j--) {
                    gridData[j + 1].y = gridData[j].y;
                    if (j + 1 === i) {
                        gridData[i].color = 4;
                    } else {
                        gridData[j + 1].color = 2;
                    }
                    gridData[j].color = 2;
                    this.props.setGridData(gridData);
                }
                gridData[j + 1].y = currValue;
                this.props.setGridData(gridData);
                gridData = resetPlotColors(gridData);
                if(i === gridDataLength - 1) {
                    gridData = resetPlotColors(gridData);
                    this.props.setGridData(gridData);
                }
            }, 400 * i);
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
                        <Nav.Link onClick={this.handleCreateNewGrid}>New</Nav.Link>
                        <Nav.Link onClick={this.handleResetGrid}>Reset</Nav.Link>
                        </Nav>
                        <NavDropdown ref="dropdownRef" title="Sorts" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleStalinsort}>Stalin Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleSelectionSort}>Selection Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleInsertionSort}>Insertion Sort</NavDropdown.Item>
                        </NavDropdown>
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