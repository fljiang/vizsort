import React, { Component } from 'react';
import {
    Container,
    Button,
    Navbar,
    Nav,
    Form,
    FormControl
} from 'react-bootstrap';
import styled from 'styled-components';

export default class SideBar extends Component {
    render() {
        return (
            <Wrapper>
                <Navbar bg="dark" variant = "dark">
                <Navbar.Brand href="#home">Stalin Sort</Navbar.Brand>
                </Navbar>
                <br />
                <Navbar bg="dark" variant = "dark">
                    <Navbar.Brand>Insertion Sort</Navbar.Brand>
                </Navbar>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`

`