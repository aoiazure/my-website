import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Bestiary } from "./Cards/Bestiary"

const CreatureCard = ({
        //Basic    
        creatureName, challengeRating, exp, alignment, 
        creatureSize, creatureType, initative, senses, perception, 
        //Defenses
        armorClasses,
        hd, saves, defensiveAbilities,
        //Offenses
        speeds, meleeAttacks, rangedAttacks, specialAttacks,
        spells, space, reach,
        //Stats
        stats, bab, cmd,
        feats, skills, racialMods, languages,
        //Abilities
        specialQualities, specialAbilities,
        //Lore
        environment, organization, treasure, desc
    }) => {
    if(!creatureName) return <div />

    let hp=0;

    const parseMelee = (atks) => {
        if(atks.length == 0) return <div />
        return(
            <Row>
                <Col md="auto"><b>Melee attacks</b>:</Col> 
                { atks.map((data, key) => {
                    return(
                        <Col md="auto">
                            {data[0]} +{data[1]} ({data[2]} {data[3]})
                        </Col>
                    );
                })}
            </Row>
        );
    }
    const parseRanged = (atks) => {
        if(atks.length == 0) return <div />
        return(
            <Row>
                <Col md="auto"><b>Ranged attacks</b>:</Col> 
                { atks.map((data, key) => {
                    return(
                        <Col md="auto">
                            {data[0]} +{data[1]} {data[2]}ft. ({data[3]} {data[4]})
                        </Col>
                    );
                })}
            </Row>
        );
    }
    const parseSpecial = (atks) => {
        if(atks.length == 0) return <div />
        return(
            <Row>
                <Col md="auto"><b>Special Attacks</b>:</Col>
                { atks.map((data, key) => {
                    return(
                        <Col md="auto">{data}</Col>
                    );
                })}
            </Row>
        );
    }

    return (
        <Card className="creature-card">
            <Container>
                <Card.Title>{creatureName}</Card.Title>
                <Row>
                    <Col md="auto"><b>CR</b>: {challengeRating}</Col>
                    <Col md="auto"><b>XP</b>: {exp}</Col>
                </Row>
                <Row><Col md="auto">{alignment} {creatureSize} {creatureType}</Col></Row>
                <Row>
                    <Col md="auto"><b>Initiative</b>: {initative}</Col>
                    <Col md="auto"><b>Senses</b>: {senses.join(", ")}</Col>
                    <Col md="auto"><b>Perception</b>: +{perception}</Col>
                </Row>
            </Container>
            <hr></hr>
            <Container className="defenses"> 
                <Card.Subtitle>Defenses</Card.Subtitle>
                <Card.Body>
                    <Row>
                        <Col md="auto"><b>AC</b>: {armorClasses[0]}</Col>
                        <Col md="auto"><b>Touch</b>: {armorClasses[1]}</Col>
                        <Col md="auto"><b>Flat-footed</b>: {armorClasses[2]}</Col>
                        <Col md="auto">({armorClasses[3]})</Col>
                    </Row>
                    <Row>
                        <Col md="auto"><b>HP</b>: {hp} ({hd})</Col>
                    </Row>
                    <Row>
                        <Col md="auto"><b>Fort</b>: {saves[0]}</Col>
                        <Col md="auto"><b>Ref</b>: {saves[1]}</Col>
                        <Col md="auto"><b>Will</b>: {saves[2]}</Col>
                    </Row>
                    <Row>
                        <Col><b>Defensive Abilities</b>: {defensiveAbilities.join(", ")}</Col>
                    </Row>
                </Card.Body>
            </Container>
            <hr></hr>
            <Container className="offenses">
                <Card.Subtitle>Offenses</Card.Subtitle>
                <Card.Body>
                    <Row>
                        { speeds.map((data, key) => {
                            return(
                                <Col md="auto"><b>{data[0]}</b>: {data[1]}ft.</Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col md="auto"><b>Space</b>: {space}ft.</Col>
                        <Col md="auto"><b>Reach</b>: {reach}ft.</Col>
                    </Row>
                    {parseMelee(meleeAttacks)}
                    {parseRanged(rangedAttacks)}
                    {parseSpecial(specialAttacks)}
                </Card.Body>
            </Container>
            <hr></hr>
            <Container className="statistics">
                
            </Container>


        </Card>
    );
}

export const CreatureCards = () => {
    return (
        <div>
            { Bestiary.map((data, key) => {
                return (
                    <div className="creature-card">
                        <CreatureCard 
                        creatureName={data.creatureName}
                        challengeRating={data.challengeRating}
                        exp={data.exp}
                        alignment={data.alignment}
                        creatureSize={data.creatureSize}
                        creatureType={data.creatureType}
                        initative={data.initative}
                        senses={data.senses}
                        perception={data.perception}
                        //Defenses
                        armorClasses={data.armorClasses}
                        hd={data.hd}
                        saves={data.saves}
                        defensiveAbilities={data.defensiveAbilities}
                        //Offenses
                        speeds={data.speeds}
                        meleeAttacks={data.meleeAttacks}
                        rangedAttacks={data.rangedAttacks}
                        specialAttacks={data.specialAttacks}
                        spells={data.spells}
                        space={data.space}
                        reach={data.reach}
                        //Stats
                        stats={data.stats}
                        bab={data.bab}
                        cmd={data.cmd}
                        feats={data.feats}
                        skills={data.skills}
                        racialMods={data.racialMods}
                        languages={data.languages}
                        />
                    </div>
                );
            })}
        </div>
    );
}