import React from "react";
import { Navbar, Container } from 'react-bootstrap';


const Navibar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home">Banking App</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Navibar;
