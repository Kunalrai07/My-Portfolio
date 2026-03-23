import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('public/Kunal CV.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('cv.txt', data.text);
    console.log("Extracted successfully to cv.txt");
}).catch(console.error);
