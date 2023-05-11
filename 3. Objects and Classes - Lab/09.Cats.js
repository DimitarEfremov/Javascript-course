function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];

    input.forEach(element => {
        let name = element.split(' ')[0];
        let age = element.split(' ')[1];

        cats.push(new Cat(name, age));
    });

    cats.forEach(element => {
        element.meow();
    });
}

solve(['Mellow 2', 'Tom 5']);