const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];


// console.log(name, github);



// const printProfileData = profileDataArr => {
//     //This.. 
//     for (let i = 0; i < profileDataArr.length; i +=1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('=====================');

//     //Is the same as this..
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage()); 


// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));


// console.log(generatePage(name, github));

fs.writeFile('./index.html' , generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});