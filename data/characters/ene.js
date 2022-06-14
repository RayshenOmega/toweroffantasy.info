const ene = {
    name: "Ene",
    rarity: "SR",
    wepName: "Pummeler",
    element: "ice",
    reso: "tank",
    shieldBreak: ["10.00", "a"],
    energyCharge: ["6.00", "b"],
    materials: [ene.element, "green", "black"],
    wepBaseStats: [attack, defense, health],

    awakening: [
            // 1 star
            "Taunt nearby targets after switching to this weapon, preventing **1** instance of damage in the next **8** seconds and granting hyperbody for the next **8** seconds. Cooldown: **15** seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by **10%**.",
            // 3 star
            "After taking damage, reduce all damage received by **50%** for the next **6** seconds. Cooldown: **20** seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by **20%**.",
            // 5 star
            "Normal attacks **stun** targets for **2.5** seconds. Cooldown: **20** seconds.",
            // 6 star
            "Discharge skills deal an additional **10%** damage to targets and increase frost damage by an additional **10%** for **25** seconds."
        ],

    chipEffect: "When dealing damage greater than **100%** of ATK, deal additional damage equal to **60%/75%/90%** of ATK. Cooldown: **3** seconds.",

    mimicEffect: [
            // 1200 affininty
            "When Ene swims, climbs, or glides, reduce endurance consumption by **12%**.",

            // 4000 affinity
            "When Ene swims, climbs, or glides, reduce endurance consumption by **20%**."
        ],
    
    traits: {
        gender: 'Female',
        height: '145 cm',
        birthplace: 'Crown',
        horoscope: 'Leo',
        birthday: '17 Aug'
    },
    
    gifts: [
            [80, princeTataFigure],
            [60, peppaFigure, ufo, foxFigure, catFigure, present, psp, pearl, snowglobe],
            [30, chessSet, diary, catPlush, tataPlush, spiderFigure, elfFigure, robotFigure, bunnyDoll]
            [15, photoAlbum, tradingCard, pinwheel, plant]
        ],
    giftPrefs: ['games', 'decorations', 'toys'],
    
    recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 2],
            ['cleanupagreement', 2],
        ],
    
    skills: [
        {
            name: "Normal Attack",
            type: "normal",
            desc: `While on the ground, swing the hammer to attack 4 times in a row.  
                    First Attack: Deal damage equal to **76.3%** of ATK + **4** and knock the target back a short distance.  
                    Second Attack: Deal damage equal to **62.1%** of ATK + **3** and knock the target back a short distance.  
                    Third Attack: Deal damage equal to **157.4%** of ATK + **8** and knock the target back a short distance.  
                    Fourth Attack: Deal damage equal to **263.8%** of ATK + **14** and launch the target.  
                    While Outburst is active, swing the hammer to attack 4 times in a row.  
                    First Attack: Deal damage equal to **75.5%** of ATK + **4** and knock the target back a short distance.  
                    Second Attack: Deal damage equal to **65%** of ATK + **3** and knock the ed target back a short distance.  
                    Third Attack: Deal damage equal to **171.3%** of ATK + **9** and knock the target back a short distance.  
                    Fourth Attack: Deal damage equal to **315.3%** of ATK + **17** and knock the target **into the air**.`,
        },
        {
            name: "Pummel",
            type: "normal",
            desc: `While airborne or after jumping once, tap normal attack to trigger Jumping Blast. Deal damage equal to **121.7%** of ATK + **6** and knock the target into the air.  
                    While Outburst is active, deal damage equal to **133.9%** of ATK + **7** and knock the target **into the air**. Deal greater damage depending on the user's altitude when the ability is triggered, up to **600%** of ATK.`,
        },
        {
            name: "Shockwave",
            type: "normal",
            desc: `Tapping and holding while airborne, Double-jumping, short tapping in the air when there are targets nearby, climbing, jumping backward, or attacking while using the Jetpack will trigger a Shockwave. Knock the target **into the air 4** times, dealing damage equal to **34.8%** of ATK + **2** each time. Cost **250** endurance.  While Outburst is active, Shockwave knocks the target **into the air 5** times, dealing damage equal to **38.3%** of ATK + **2** each time. Deal greater damage depending on the user's altitude when the ability is triggered, up to **600%** of ATK.`,
        },
        {
            name: "Sneak Attack",
            type: "normal",
            desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **427.5%** of ATK + **23**.`,
        },
        {
            name: "Focus Smash",
            type: "normal",
            desc: `Tap and hold normal attack to trigger Focus Smash (can be charged up to 3 stacks). Grant immunity to all control effects and hyperbody while charging.  
                    First Stack: Deal damage equal to **110%** of ATK + **6** and knock the target into the air.  
                    Second Stack: Deal damage equal to **276%** of ATK + **15** and knock the target **into the air**.  
                    Third Stack: Deal damage equal to **518%** of ATK + **27** and knock the target **into the air**.  
                    While Outburst is active, tap and hold normal attack to trigger Furious Strikes, dealing damage equal to **501.6%** of ATK + **26** and knocking the target **into the air**.`,
        },
        {
            name: "Jumping Smash",
            type: "dodge",
            desc: `Use the arrow buttons and the dodge button to trigger Jumping Smash, unleashing a Shockwave that knocks the enemy into the air **4** times, dealing damage equal to **161.6%** of ATK + **9**.`,
        },
        {
            name: "Worldsplitter",
            type: "dodge",
            desc: `Tap normal attack during the short period of time after a dodge to trigger Worldsplitter, unleashing **3** shockwaves forward, each dealing damage equal to **52.4%** of ATK + **3**, and knocking enemies into the air.  
                    While in Outburst mode, fire **5** shockwaves forward, each dealing damage equal to **52.4%** of ATK + **3** and knocking the target into the air.`,
        },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
        },
        {
            name: "Outburst",
            type: "skill",
            desc: `Switch to activate Outburst, increasing damage dealt for **25** seconds. While Outburst is active, skills trigger Windfury, dealing damage equal to **219%** of ATK + **12**, knock the target **into the air**, and create an air current on the ground. While standing in the current, dodging has no cost. Cooldown: **45** seconds (Windfury's cooldown: **10** seconds).`,
        },
        {
            name: "Overwhelming Maul",
            type: "discharge",
            desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and knock nearby targets **into the air** upon switching to this weapon, dealing damage equal to **153.3%** of ATK + **8**. Also summon a hammer to fall on nearby targets, dealing damage equal to **153.3%** of ATK + **8**.`,
        }
    ]
}

export default ene;