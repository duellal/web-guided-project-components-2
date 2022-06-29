//Imports 
//Never nest imports inside blocks of code!

import axios from 'axios';

//Understanding Axios:
// console.log('Check out Axios:\n \n', axios)
// const result = axios.get('https://lambda-times-api.herokuapp.com/friends')
// // console.log(result)

// console.log('1) About to fetch data with axios')

// result.then(futureData => {
//   //Future code for when data arrives
//   //Freedom to assume the data is here
//   console.log('2) The future data:', futureData);
// })

// console.log('3) Requested data with axios')

//Getting axios in a better way:
axios
  .get('https://lambda-times-api.herokuapp.com/friends')
  .then(futureData => {
    // console.log(futureData);
  })
  .catch(error => {
    //handling future errors
    // console.log(error);
  });

// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//      - https://httpie.io/cli/run
//  * With Postman (HTTP Client with GUI)
//      - have to download to use
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry')


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div');
  const image = document.createElement('img');
  const heading = document.createElement('h3');

  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3>
    </div>
  */

  // set class names, attributes and text
  heading.textContent = `Breed: ${breed}`;
  image.src = imageURL;
  image.classList.add('dog-image');
  dogCard.classList.add('dog-card');

  // create the hierarchy
  dogCard.appendChild(image);
  dogCard.appendChild(heading);

  // add some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected');
  });

  // never forget to return!
  return dogCard;
}

// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file

//Done above with import

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

// axios
//   .get('https://dog.ceo/api/breed/collie/images/random/9')
//   .then((response) => {
//     // Ways to see the response and what is nested inside of it:
//     // debugger;
//     // // The Whole Response:
//     // console.log('This is the response:', response);
//     // // Inside the data:
//     // console.log('Message:', response.data);
//     // //Inside the message within the data - an array of image strings
//     // console.log('Images:', response.data.message);

//     const images = response.data.message;

//     images.forEach(image => {
//       const doggyCard = dogCardMaker({ imageURL: image, breed: 'Collie' });
//       console.log(doggyCard)

//       entryPoint.appendChild(doggyCard)
//     })

//     console.log('Done')
//   })
//   .catch(error => {
//     console.log(error);
//     console.log('Done')
//   })

// axios
//   .get('https://dog.ceo/api/breed/collie/images/random/9')
//   .then(res => {
//     const images = res.data.message;

//     images.forEach(image => {
//       const doggyCard = dogCardMaker({ imageURL: image, breed: 'Collie' })

//       entryPoint.appendChild(doggyCard);
//     })

//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)

function getDogs(breed, num) {
  axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
    .then(res => {
      const images = res.data.message;

      images.forEach(image => {
        const doggyCard = dogCardMaker({ imageURL: image, breed: `${breed}` })

        entryPoint.appendChild(doggyCard);
      })

    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("Done");
    });
}

// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`



// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration

