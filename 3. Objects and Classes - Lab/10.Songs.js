function solve(inputArr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = Number(inputArr[0]);
    
    for (let i = 1; i <= numberOfSongs; i++) {
        let [type, songName, playTime] = inputArr[i].split('_');
        songs.push(new Song(type, songName, playTime));
    }
    
    let type = inputArr[inputArr.length - 1];

    if (type === 'all') {
        songs.forEach(element => {
            console.log(element.name);
        });
    } else {
        songs.forEach(element => {
            if (type === element.typeList) {
                console.log(element.name);
            }
        });
    }
}


solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )