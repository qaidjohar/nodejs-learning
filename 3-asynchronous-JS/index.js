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

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random Dog image saved to file😊');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2. READY 🐶';
};

(async () => {
  try {
    console.log('1. I will Get dog pic');
    const x = await getDogPic();
    console.log(x);
    console.log('3. I got the Link');
  } catch (err) {
    console.log('ERROR 🤯');
  }
})();

// console.log('1. I will Get dog pic');
// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('3. I got the Link');
//   })
//   .catch(err => {
//     console.log('ERROR 🤯');
//   });

////Promise Read and Write Files
/*readFilePro(`${__dirname}/dog.txt`)
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
*/
