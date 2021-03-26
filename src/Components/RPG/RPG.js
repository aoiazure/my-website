import React from "react";
import Layout from "../Layout";

import "./RPG.css";

import { CreatureCards } from "./CreatureCard";
import { Container } from "react-bootstrap";

export default function RPG() {
    return(
        <Layout>
            <Container className="card-container">
                <CreatureCards />
            </Container>
        </Layout>
    );
}