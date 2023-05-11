function solve(params) {

    towns = [];

    params.forEach(element => {

        let [town, lat, long] = element.split(' | ');
            
            data = {town, 
            latitude: Number(lat).toFixed(2),
            longitude: Number(long).toFixed(2) }

            towns.push(data);
        
    });

    towns.forEach(element => {
        console.log(element);
    });
    
}


solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
