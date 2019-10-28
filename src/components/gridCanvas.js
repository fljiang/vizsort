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

import { getGridData } from '../redux/selectors';

class GridCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: 12,
            clientWidth: 200,
            clientHeight: 200,
            gridData: []
        }
        this.gridWrap = React.createRef();
    }

    componentDidMount() {
        const {
            clientWidth,
            clientHeight
        } = this.gridWrap.current;
        const { gridData } = this.props;
        this.setState({
            clientWidth,
            clientHeight,
            gridData
        })
    }

    shouldComponentUpdate(newProps, state) {
        const oldGridData = this.state.gridData;
        const { gridData } = newProps;
        // console.log(`OLD GRID: ${JSON.stringify(oldGridData)}`);
        if (oldGridData !== gridData) {
            this.setState({
                gridData
            });
            return true;
        }
        return false;
    }

    render() {
        const {
            clientWidth,
            clientHeight,
            gridData
        } = this.state;
        return (
            <Wrapper ref={this.gridWrap}>
                <XYPlot
                    height={clientHeight}
                    width={clientWidth}
                >
                <VerticalBarSeries data={gridData} />
                </XYPlot>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const mapStateToProps = state => {
    const gridData = getGridData(state);
    return { gridData };
}

export default connect(mapStateToProps)(GridCanvas);