function radar(speed, zone) {
    let limit = 0;
    switch (zone) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else if (speed> limit && speed <= limit + 20) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`)
    } else if(speed > limit+20 && speed <= limit + 40) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`)
    } else{
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`)
    }

}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');