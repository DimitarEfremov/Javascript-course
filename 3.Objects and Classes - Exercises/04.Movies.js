function solve(input) {
    let movieList = [];

    input.forEach(element => {
        if (element.includes("addMovie")) {
            let nameArray = element.split(' ');
            let name = nameArray.slice(1, nameArray.length + 1).join(" ");
            
            movieData = {name, 
                director: '',
                date: '' }
    
                movieList.push(movieData);

        } else if(element.includes("directedBy")) {
            let directorArray = element.split(' directedBy ');
            movieList.forEach(element => {
                if (directorArray[0] === element.name) {
                    element.director = directorArray[1]
                }
            });

            
            
        } else if(element.includes("onDate")){
            let dateArray = element.split(' onDate ');
            movieList.forEach(element => {
                if (dateArray[0] === element.name) {
                    element.date = dateArray[1]
                }
            });
        }
    });

    movieList.forEach(element => {
        if (element.director != '' && element.releaseDate != '') {
            console.log(JSON.stringify(element));
        }
        
    });

}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )