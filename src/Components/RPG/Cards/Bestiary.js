/*
const template = {
    creatureName:"",
    challengeRating:0,
    exp:0,
    alignment:"", 
    creatureSize:"",
    type:"",
    initative:0,
    senses:[],
    perception:0, 
    //Defenses
    armorClasses:[ 10, 10, 10, "notes"],
    hd:"Xd10+Y",
    saves:[ 0, 0, 0 ], // Fortitude, Reflex, Will
    defensiveAbilities:[],
    //Offenses
    speeds:[],
    meleeAttacks:[ [atkName, atkMod, damage, damageNotes] ],
    rangedAttacks:[ [atkName, atkMod, range, damage, damageNotes ] ],
    specialAttacks:[ [atkName, atkMod, ] ],
    spells:[],
    space:0,
    reach:0,
    //Stats
    stats:[ 10, 10, 10, 10, 10, 10 ],
    bab:0,
    cmd:[ 10, "notes" ],
    feats:[],
    skills:{}, // JSON structure to hold skills in easy to read fashion
    racialMods:{},
    languages:[],
    //Abilities
    specialQualities:[],
    specialAbilities:{}, // JSON Structure
    //Lore
    environment:"",
    organization:"",
    treasure:"",
    desc:""
}
*/

export const Bestiary = [
    {   /* Alloy Vulture */
        creatureName:"Alloy Vulture",
        challengeRating:2,
        exp:600,
        alignment:"LN", 
        creatureSize:"medium",
        creatureType:"construct (automaton)",
        initative:4,
        senses:["low-light vision", "darkvision 120 ft."],
        perception:6,
        //Defenses
        armorClasses:[14, 12, 14, "+2 Dex, +2 natural armor"],
        hd:"3d10+1",
        saves:[1, 5, 5],
        defensiveAbilities:["SR 13"],
        //Offenses
        speeds:[ ["Land", 30], ["Fly", 40]],
        meleeAttacks:[ ["2 Claws", 2, "1d4-1", "slashing"] ],
        rangedAttacks:[ ["Crescent Air Wave", 4, 20, "1d6+3", "slashing, bludgeoning"] ],
        specialAttacks:[],
        spells:[],
        space:5,
        reach:5,
        //Stats
        stats:[ 8, 14, 10, 16, 10, 7 ],
        bab:2,
        cmd:[ 14 ],
        feats:[ "Flyby Attack", "Hover" ],
        skills:{
            "Craft":9,
            "Diplomacy":4,
            "Fly":8,
            "Knowledge (all)":9,
            "Perception":6,
            "Sense Motive":5,
            "Spellcraft":9,
            "Stealth":8
        },
        racialMods:{},
        languages:[],
        //Abilities
        specialQualities:[ "Automaton Core", "Intelligent Construct", "Vulnerable Mind" ],
        specialAbilities:{},
        //Lore
        environment:"",
        organization:"",
        treasure:"",
        desc:""
    }
];