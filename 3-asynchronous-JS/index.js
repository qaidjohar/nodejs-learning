const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file.😑');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Cannot Write to the file😒');
      resolve('success');
    });
  });
};

////Promise Read and Write Files
readFilePro(`${__dirname}/dog.txt2`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    return writeFilePro('dog-img.txt', res.body.message);
    // fs.writeFile('dog-img.txt', res.body.message, err => {
    //   console.log('Random Dog image saved to file😊');
    // });
  })
  .then(() => {
    console.log('Random Dog image saved');
  })
  .catch(err => {
    console.log(err);
  });

////Callback write and promise read

// readFilePro(`${__dirname}/dog.txt`).then(data => {
//     console.log(`Breed: ${data}`)

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 console.log('Random Dog image saved to file😊')
//             })
//         })
//         .catch(err => {
//             console.log(err.message);
//         })

// }).catch(err => {
//     console.log(err.message);
// })

////>>Simple Callback

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`)

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 console.log('Random Dog image saved to file😊')
//             })
//         })
//         .catch(err => {
//             console.log(err.message);
//         })
// })
