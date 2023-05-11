function wash(input) {

    let cleanliness = 0;

    let washingParser = {
        "soap": addSoap,
        "water": useWater,
        "vacuum cleaner": vacuuming ,
        "mud": addMud
    }

    input.forEach(element => {
        cleanliness = washingParser[element](cleanliness);
    });

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);


    function addSoap(cleanliness) {
        return cleanliness+10;
    }
    function useWater(cleanliness) {
        return cleanliness * 1.2;
    }
    function vacuuming(cleanliness) {
        return cleanliness* 1.25;
    }
    function addMud(cleanliness) {
        return cleanliness*0.9;
    }
}

wash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'] )
wash(["soap", "water", "mud", "mud", "water", "mud","vacuum cleaner"] )