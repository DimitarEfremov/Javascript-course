function formatGrade (grade) {
    let gradeString ='';
    switch (true) {
        case (grade<3):
            return('Fail (2)')
            case (grade<3.5):
                gradeString ='Poor';
            break;
            case (grade<4.5):
                gradeString ='Good';
            break;
            case (grade<5.5):
                gradeString ='Very good';
            break;
            case (grade>=5.5 && grade <=6):
                gradeString ='Excellent';
            break;
    }

    return(`${gradeString} (${grade.toFixed(2)})`)
    
}

console.log(formatGrade(3.33))
    console.log(formatGrade(4))
        console.log(formatGrade(2.99))



