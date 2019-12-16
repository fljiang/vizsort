import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    VerticalBarSeries
} from 'react-vis';

import { getGridData, getNumGridDataUpdated } from '../redux/selectors';
import verticalBarSeries from 'react-vis/dist/plot/series/vertical-bar-series';

class GridCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: 12,
            innerWidth: 200,
            innerHeight: 200,
            gridHeight: 0,
            gridData: [],
            dataSwapPoints: []
        }
        this.gridWrap = React.createRef();
    }

    componentDidMount() {
        const {
            innerWidth,
            innerHeight
        // } = this.gridWrap.current;
        } = window;
        const navbarHeight = document.getElementById('navbar').clientHeight;
        const { gridData, dataSwapPoints } = this.props;
        this.setState({
            innerWidth,
            innerHeight,
            gridData,
            gridHeight: window.innerHeight - navbarHeight,
            dataSwapPoints
        });
        this.forceUpdate();
    }

    shouldComponentUpdate(newProps, state) {
        const { gridData, dataSwapPoints } = newProps;
        const oldNumGridDataUpdated = this.props.numGridDataUpdated;
        const { numGridDataUpdated } = newProps;
        if (numGridDataUpdated !== oldNumGridDataUpdated ) {
            this.setState({
                gridData,
                dataSwapPoints
            });
            this.forceUpdate();
            return true;
        }
        return false;
    }

    render() {
        const {
            innerWidth,
            innerHeight,
            gridData,
            gridHeight
        } = this.state;

        return (
            <Wrapper ref={this.gridWrap}>
                <XYPlot stackBy="y" height={gridHeight} width={innerWidth} colorDomain={[0,1,2,3,4]}>
                    <VerticalBarSeries data={gridData} animation></VerticalBarSeries>
                </XYPlot>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
`;

const mapStateToProps = state => {
    const gridData = getGridData(state);
    const numGridDataUpdated = getNumGridDataUpdated(state);
    return { numGridDataUpdated, gridData };
}

export default connect(mapStateToProps)(GridCanvas);