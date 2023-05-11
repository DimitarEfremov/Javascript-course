function rotate (arrayOfNumbs, rotations){
    rotations = rotations % arrayOfNumbs.length;

    for (let i = 0; i < rotations; i++) {
       arrayOfNumbs.push(arrayOfNumbs.shift())
    }

    console.log(arrayOfNumbs.join(` `))
}

rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);