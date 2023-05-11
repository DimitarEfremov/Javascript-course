function solve(params) {
    let finalThickness = params.shift();
    
    params.forEach(element => {
        process(element, finalThickness);
    });


    function process(start, finalThickness) {

        console.log(`Processing chunk ${start} microns`);

        let cuts = 0;

        while ((start/4) >= finalThickness) {
            start = start / 4;
            cuts++;
        }

        if (cuts > 0) {
            console.log(`Cut x${cuts}`);
            start = Math.floor(start);
            console.log(`Transporting and washing`);
        }
    
        let laps = 0;

        while ((start*0.8) >= finalThickness) {
            start = start * 0.8;
            laps++;
        }

        if (laps > 0) {
            console.log(`Lap x${laps}`);
            start = Math.floor(start);
            console.log(`Transporting and washing`); 
        }

        let grinds = 0;

        while ((start-20) >= finalThickness) {
            start = start - 20;
            grinds++;
        }
        
        if (grinds> 0) {           
            console.log(`Grind x${grinds}`);
            start = Math.floor(start);
            console.log(`Transporting and washing`);
        }

        let etches = 0;

        while ((start-2) >= finalThickness-1) {
            start = start - 2;
            etches++;
        }

        if (etches> 0) {
            console.log(`Etch x${etches}`);
            start = Math.floor(start);
            console.log(`Transporting and washing`);
        }

        if (start < finalThickness) {
            start++
            console.log(`X-ray x1`);
        }
            console.log(`Finished crystal ${start} microns`);


    }
    
}

solve([1000, 4000, 8100] )