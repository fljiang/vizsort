import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { getGridData } from '../redux/selectors';
import { setGridData } from '../redux/actions';

class SideBar extends Component {
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
    }

    componentDidMount() {
        this.setState({
            gridDataLength: this.props.gridData.length
        });
    }

    handleStalinSort = () => {
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
                this.refs.stalinSortBtn.click();
            }, 400);
        }

        this.setState({
            gridData
        });
    }

    render() {
        return (
            <Wrapper>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" ref="stalinSortBtn" onClick={this.handleStalinSort}>
                        {' StalinSort '}
                    </Navbar.Brand>
                </Navbar>
                <br />
                <Navbar bg="dark" variant = "dark">
                    <Navbar.Brand>Insertion Sort</Navbar.Brand>
                </Navbar>
            </Wrapper>
        )
    }
}

const mapStateToProps = store => {
    const gridData = getGridData(store);
    return { gridData };
}

const Wrapper = styled.div`

`;

export default connect(mapStateToProps, { setGridData })(SideBar);