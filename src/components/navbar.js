import React, { Component } from 'react';
import {
  Container,
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown
} from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { parse } from 'mathjs';
import { getGridData, getGridSize, getIsExpressionGraph } from '../redux/selectors';
import { changeGridSize, createNewGrid, setGridData, setExpressionGraph } from '../redux/actions';
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
        if(windowWidth < 992) {
            $dropdown.style.paddingLeft = 0;
        }
    }

    handleCreateNewGrid = () => {
        const { gridSize } = this.props;
        let newGridData = [];
        for(let i = 0; i < gridSize; i++) {
            newGridData.push({
                x: i,
                y: Math.floor(Math.random() * 25) + 1,
                color: 0
            });
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
        });
        this.props.setGridData(JSON.parse(JSON.stringify(this.state.originalGridData)));
    }

    handleGnomeSort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let tempGridData = JSON.parse(JSON.stringify(gridData));
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
                    gridData[i].color = 1;
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
                    this.props.setGridData(resetPlotColors(gridData));
                }
            }, 50 * j);
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
                        gridData[i].color = 1;
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
                    this.props.setGridData(resetPlotColors(gridData));
                }
            }, 200 * i);
        }
    }

    handleSelectionSort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let currMin, currMinIndex, temp, j;
        this.resetAllEvents();
        for (let i = 0; i < gridDataLength - 1; i++) {
            setTimeout(() => {
                gridData = resetPlotColors(gridData);
                gridData[i].color = 1;
                for (j = i + 1; j < gridDataLength; j++) {
                    currMin = gridData[i].y;
                    currMinIndex = i;
                    if (gridData[j].y < currMin) {
                        currMin = gridData[j].y;
                        currMinIndex = j;
                    }
                    temp = gridData[i].y;
                    gridData[i].y = currMin;
                    gridData[currMinIndex].y = temp;
                    if (currMinIndex != i) {
                        gridData[currMinIndex].color = 2;
                    }
                }
                this.props.setGridData(gridData);
                if (i === gridDataLength - 2) {
                    this.props.setGridData(resetPlotColors(gridData));
                }
            }, 200 * i);
        }
    }

    handleStalinSort = () => {
        let { gridData } = this.props;
        let { gridDataLength } = this.state;
        let j = 0;
        this.resetAllEvents();
        for (let i = 0; i < gridDataLength - 1; i++) {
            setTimeout(() => {
                if (gridData[j].y > gridData[j + 1].y) {
                    gridData = resetPlotColors(gridData);
                    gridData[j].color = 1;
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

    submitNewExpression = (ev) => {
        if (ev.key === 'Enter') {
            this.handleNewExpression();
        }
    }

    handleNewExpression = () => {
        let { gridSize } = this.props;
        const expressionStr = this.refs.newGraphRef.value;
        const { newGraphRef } = this.refs;
        const gridData = [];
        try {
            parse(expressionStr).evaluate({x: 1});
        } catch {
            console.log(`Invalid expression: ${expressionStr}`);
            newGraphRef.style.border = '2px solid red';
            return null;
        }
        const expression = parse(expressionStr);
        this.resetAllEvents();
        for (let i = 0; i < gridSize; i++) {
            gridData.push({
                x: i,
                y: expression.evaluate({x: i}),
                color: 0
            });
        }
        this.props.setExpressionGraph(gridData);
    }

    handleSliderNewGrid = () => {
        const {
            isExpressionGraph
         } = this.props;
         isExpressionGraph ? this.handleNewExpression() : this.handleCreateNewGrid();
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
                        <Slider createNewGrid={this.handleSliderNewGrid.bind(this)} />
                        <StyledNavDropdown title="Sorts">
                            <NavDropdown.Item onClick={this.handleGnomeSort}>Gnome Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleInsertionSort}>Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleSelectionSort}>Selection Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.handleStalinsort}>Stalin Sort</NavDropdown.Item>
                        </StyledNavDropdown>
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
        );
    }
}

const NewFormControl = styled(FormControl)`
    font-family: cursive;
    box-sizing: border-box;
    :focus {
        box-shadow: none;
        outline: none;
    }
`;

const StyledNavDropdown = styled(NavDropdown)`
    a {
        color: royalblue;
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

const SubmitButton = styled(Button)`
    color: royalblue;
    margin-left: 5px;
    border: 1px solid royalblue;

    &:hover, &:active, &:focus {
        background-color: royalblue !important;
        border: 1px solid royalblue !important;
        box-shadow: none !important;
        outline: none;

    }
`;

const mapStateToProps = state => {
    const gridData = getGridData(state);
    const gridSize = getGridSize(state);
    const isExpressionGraph = getIsExpressionGraph(state);
    return { gridData, gridSize, isExpressionGraph };
}

export default connect(mapStateToProps, { changeGridSize, createNewGrid, setGridData, setExpressionGraph })(Navigation);
