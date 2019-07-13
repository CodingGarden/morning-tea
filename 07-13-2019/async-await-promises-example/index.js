// const { promises: fs } = require('fs');

// async function outputFile(path) {
//   const fileContents = await fs.readFile(path, 'utf-8');
//   console.log(fileContents);
// }

// outputFile('/Users/cj/dev/coding.garden/morning-tea/07-13-2019/README.md')
//   .then(() => {
//     console.log('We are done! 🌈');
//   });

const fs = require('fs');

function outputFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, fileContents) => {
      if (error) {
        return reject(error);
      }
      console.log(fileContents);
      resolve();
    });
  });
}

outputFile('/Users/cj/dev/coding.garden/morning-tea/07-13-2019/README.md')
  .then(() => {
    console.log('We are done! 🌈');
  });
