import React, { useState, useEffect, Link } from "react";
import { Nav, Navbar } from "react-bootstrap";

function Layout(props) {
    const [children, setChildren] = useState();
    useEffect(() => setChildren(props.children));

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/my-website">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/my-website/#/rpg">RPG</Nav.Link>
                </Nav>
            </Navbar>
            {children}
        </div>
    );
}

export default Layout;