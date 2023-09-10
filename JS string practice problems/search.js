const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini. kala kala sada sada';

const searchString = 'pakhi';
// const doesExit = lyrics.includes('pakhi');
// const doesExit = lyrics.includes('Pakhi');
// const doesExit = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExit = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExit = lyricsLowerCase.includes(searchStringLower);

const doesExitOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExit);
// console.log(doesExitOneLine);


// ----------------------------------
// indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

// 

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string')
}
else {
    console.log('cannot find it');
}

// startsWith
console.log(lyrics.startsWith('Tumi'))

// endSwitch
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf')