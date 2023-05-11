function expenses(lostFights, helmet, sword, shield, armor) {
    
    let brokenHelms = Math.floor(lostFights / 2);

    let brokenSwords = Math.floor(lostFights / 3);

    let brokenShields = Math.floor(lostFights/6);

    let brokenArmour = Math.floor(brokenShields/2);

    let totalPrice = (brokenHelms*helmet)+(brokenSwords*sword)
    +(brokenShields*shield)+(brokenArmour*armor);


    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
    
}

expenses(7,
    2,
    3,
    4,
    5);
expenses(23,
    12.50,
    21.50,
    40,
    200);

