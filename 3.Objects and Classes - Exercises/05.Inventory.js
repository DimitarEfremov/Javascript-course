function solve(input) {

    let heroes = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');
        
        heroData = {name, 
            level,
            items }

            heroes.push(heroData);

    });

    heroes.sort((hero1, hero2) => hero1.level - hero2.level);

    heroes.forEach(element => {
        console.log(`Hero: ${element['name']}
level => ${element['level']}
items => ${element['items']}`);
    });
  
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )