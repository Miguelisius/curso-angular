interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song:String;
    details: Details;
}

interface Details{
    author: String;
    year: number;
}

const audioplayer : AudioPlayer = {
    audioVolume : 90,
    songDuration : 36,
    song : 'Love like this',
    details:{
        author:'ZAYN',
        year:2023,
    }
}

const song = 'New Song';

const { 
    song:anothersong, 
    songDuration:duration,
    details
} = audioplayer;

const {author, year} = details;

console.log('Song: ', anothersong);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Year: ', year);

const [,,trunks = 'NOT FOUND']: string[] = ['Goku', 'Vegeta'];
console.log(trunks);


export{};