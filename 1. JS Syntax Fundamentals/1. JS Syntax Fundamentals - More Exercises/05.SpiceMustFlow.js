function mine(source) {

    let totalSpice = 0;
    let days = 0;

    while (source >= 100) {
        days++;
        totalSpice += source;
        totalSpice -= 26;
    
        source -= 10; 
    }

    totalSpice -= 26;

    if (totalSpice < 0) {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);

    
}

mine(20);
mine(450);