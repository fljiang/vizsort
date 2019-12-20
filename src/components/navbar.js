/* eslint-disable no-implied-eval */
/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'mathjs';
import { getGridData, getGridSize } from '../redux/selectors';
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

import Slider from './slider';

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
            gridDataLength: 0
        }
    }

    componentDidMount() {
        let windowWidth = window.innerWidth;
        let $dropdown = document.getElementById('basic-nav-dropdown');

        this.setState({
            gridDataLength: this.props.gridData.length,
            originalGridData: JSON.parse(JSON.stringify(this.props.gridData))
        });

        // fix mobile view
        if(windowWidth < 992) {
            $dropdown.style.paddingLeft = 0;
        }
    }

    handleGridSizeChange = () => {
        this.props.changeGridSize(this.state.gridSize);
    }

    handleCreateNewGrid = () => {
        const { gridSize } = this.props;
        let newGridData = [];
        
        for(let i = 0; i < gridSize; i++) {
            newGridData.push({
                x: i,
                y: Math.floor(Math.random() * 25) + 1,
                color: 0
            })
        }
        this.resetAllEvents();
        this.setState({
            gridDataLength: newGridData.length,
            originalGridData: JSON.parse(JSON.stringify(newGridData))
        });
        this.props.setGridData(newGridData);
    }

    handleResetGrid = () => {
        this.resetAllEvents();
        this.setState({
            gridDataLength: this.state.originalGridData.length
        })
        this.props.setGridData(JSON.parse(JSON.stringify(this.state.originalGridData)));
    }

    handleSelectionSort = () => {
        let { gridDataLength } = this.state;
        let currMin, currMinIndex, temp, j, gridData;
        this.resetAllEvents();
        for (let i = 0; i < gridDataLength - 1; ++i) {
            setTimeout(() => {
                gridData = this.props.gridData;
                for (j = i + 1; j < gridDataLength; j++) {
                    gridData = resetPlotColors(gridData);
                    gridData[i].color = 4;
                    currMin = gridData[i].y;
                    currMinIndex = i
                    if (gridData[j].y < currMin) {
                        currMin = gridData[j].y;
                        currMinIndex = j;
                        gridData[currMinIndex].color = 2;
                        this.props.setGridData(gridData);
                    }
                    temp = gridData[i].y;
                    gridData[i].y = currMin;
                    gridData[currMinIndex].y = temp;
                }
                this.props.setGridData(gridData);
                if (i === gridDataLength - 2) {
                    this.props.setGridData(resetPlotColors(gridData));
                    this.setState({
                        gridDataLength: gridData.length
                    });
                }
            }, 200 * i);
        }
    }

    handleStalinsort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let j = 0;
        this.resetAllEvents();
        for (let i = 0; i < gridDataLength - 1; i++) {
            setTimeout(() => {
                if (gridData[j].y > gridData[j + 1].y) {
                    gridData = resetPlotColors(gridData);
                    gridData[j].color = 4;
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
        this.resetAllEvents();
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
            }, 200 * i);
        }
    }

    handleGnomeSort = () => {
        let { gridData } = this.props;
        let tempGridData = JSON.parse(JSON.stringify(gridData));
        let { gridDataLength } = this.state;
        let i = 0, counter = 0;
        this.resetAllEvents();
        while (i < gridDataLength) {
            counter++;
            if (i === 0) { i++; }
            if (tempGridData[i].y >= tempGridData[i - 1].y) {
                i++;
            } else {
                let temp = tempGridData[i].y;
                tempGridData[i].y = tempGridData[i - 1].y;
                tempGridData[i - 1].y = temp;
                i--;
            }
        }
        i = 0;
        for (let j = 0; j < counter; j++) {
            setTimeout(() => {
                gridData = resetPlotColors(gridData);
                if (i > 0) {
                    gridData[i].color = 4;
                    gridData[i - 1].color = 2;
                    this.props.setGridData(gridData);
                    if (gridData[i].y < gridData[i - 1].y) {
                        let temp = gridData[i].y;
                        gridData[i].y = gridData[i - 1].y;
                        gridData[i - 1].y = temp;
                        i -= 2;
                    }
                    this.props.setGridData(gridData);
                }
                i++;
                if(j === counter - 1) {
                    gridData = resetPlotColors(gridData);
                    this.props.setGridData(gridData);
                }
            }, 50 * j);
            
        }
    }

    submitNewExpression = (ev) => {
        if (ev.key === 'Enter') {
            this.handleNewExpression();
        }
    }

    handleNewExpression = () => {
        let { gridData } = this.props;
        const expressionStr = this.refs.newGraphRef.value;
        const { newGraphRef } = this.refs;
        try {
            parse(expressionStr).evaluate({x: 1});
        } catch {
            console.log(`Invalid expression: ${expressionStr}`);
            newGraphRef.style.border = '2px solid red';
            return null;
        }
        const expression = parse(expressionStr);
        this.resetAllEvents();
        gridData = gridData.map((data) => {
            return {
                x: data.x,
                y: expression.evaluate({ x: data.x }),
                color: data.color
            }
        });
        this.props.setGridData(gridData);
    }

    resetAllEvents() {
        let highestTimeoutId = setTimeout(";");
        for (let i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
    }

    render() {
        return(
            <NewContainer id="navbar">
                <NewNavbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Viz-Sort</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link onClick={this.handleCreateNewGrid}>New</Nav.Link>
                        <Nav.Link onClick={this.handleResetGrid}>Reset</Nav.Link>
                        </Nav>
                        <Slider createNewGrid={this.handleCreateNewGrid} />
                        <NavDropdown title="Sorts" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleStalinsort}>Stalin Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleSelectionSort}>Selection Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleInsertionSort}>Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleGnomeSort}>Gnome Sort</NavDropdown.Item>
                        </NavDropdown>
                        <Form
                            action="javascript:void(-1)"
                            onKeyDown={this.submitNewExpression}
                            inline>
                        <NewFormControl type="text" placeholder="F(x)" ref="newGraphRef" className="size_ctrl" />
                        <SubmitButton variant="outline-success" onClick={this.handleNewExpression}>Generate Graph</SubmitButton>
                        </Form>
                    </Navbar.Collapse>
                </NewNavbar>
            </NewContainer>
        )
    }
}

const NewFormControl = styled(FormControl)`
    font-family: cursive;
    box-sizing: border-box;
    :active {
        outline: none;
    }
`;

const NewContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`;

const NewNavbar = styled(Navbar)`
    width: calc(15px + 100%);
    border-bottom: 2px solid #eee;
`;

const mapStateToProps = store => {
    const gridData = getGridData(store);
    const gridSize = getGridSize(store);
    return { gridData, gridSize };
}


const SubmitButton = styled(Button)`
    color: #007bff;
    margin-left: 5px;
    border: 1px solid #007bff;

    &:hover, &:active, &:focus {
        background-color: #007bff !important;
        border: 1px solid #007bff !important;
        box-shadow: none !important;
        outline: none;

    }
`;

export default connect(mapStateToProps, { changeGridSize, createNewGrid, setGridData })(Navigation);