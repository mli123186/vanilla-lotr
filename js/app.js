console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const middeleEarth = document.createElement("section");
  middeleEarth.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:
  for (i = 0; i < lands.length; i++) {
      const article = document.createElement('article');
      article.id = lands[i];
      const h1 = document.createElement('h1');
      h1.innerText = lands[i];
      article.appendChild(h1);
      middeleEarth.appendChild(article);
  }
  document.body.appendChild(middeleEarth);

  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.

}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {

  const hobbitsList = document.createElement('ul') ;

  for (let i = 0; i < hobbits.length; i++) {
    const list = document.createElement('li');
    list.className = 'hobbit';
    list.innerText = hobbits[i];
    hobbitsList.appendChild(list);

  }


  // display an `unordered list` of hobbits in the shire
  

  // give each hobbit a class of `hobbit`
  document.querySelector('#The-Shire').appendChild(hobbitsList); 

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  const div = document.createElement('div');
  // create a div with an id of `'the-ring'`
  div.className = 'magic-imbued-jewelry';
  // give the div a class of `'magic-imbued-jewelry'`
  document.querySelector('.hobbit').appendChild(div);
  // add the ring as a child of `Frodo`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");
  const baddiesList = document.createElement('ul');
  // display an unordered list of baddies in Mordor
  for (let i = 0; i < baddies.length; i++) {
    const list = document.createElement('li');
    list.className = 'baddy';
    list.innerText = baddies[i];
    baddiesList.appendChild(list);
  }

  document.querySelector('#Mordor').appendChild(baddiesList);

  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");
  const asideBuddies = document.createElement('aside');
  const buddiesList = document.createElement('ul');
  
  for (let i = 0; i < buddies.length; i++) {
    const list = document.createElement('li');
    list.className = 'buddy';
    list.innerText = buddies[i];
    buddiesList.appendChild(list);
  }
  const aside = asideBuddies.appendChild(buddiesList);

  document.querySelector('#Rivendell').appendChild(aside);
  // create an `aside` tag
   
  // put an `unordered list` of the `'buddies'` in the aside
   
  // insert your aside as a child element of `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
  // const leaveTheShire = document.createElement('ul');
  // leaveTheShire.appendChild('#The-Shire');
  document.querySelector('#Rivendell').appendChild(document.querySelector('ul'));

  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");

  //const a = document.querySelector('aside').childNodes;
  // const changeName = 'Aragorn';
  // for(let i = 0; i < )
  const changeName = document.querySelector('#Rivendell li').nextSibling.nextSibling.nextSibling;
        changeName.innerText = 'Aragorn';
  //changeName.innerText = 'Aragorn';

  // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");
  const divNew = document.createElement('div');
  divNew.className = 'the-fellowship';
  //document.querySelector('#Rivendell').appendChild(divNew);

  for(let i = 0; i < 4; i++) {
     //alert(`${document.querySelector('.buddy').innerText} has joined you`);
     divNew.appendChild(document.querySelector('.buddy'));
     //alert(`${document.querySelector('.hobbit').innerText} has joined you`);
    divNew.appendChild(document.querySelector('.hobbit'));
  };
    //alert(`${document.querySelector('.buddy').innerText} has joined you`);

    divNew.appendChild(document.querySelector('.buddy'));
  //querySelector()
    document.querySelector('#Rivendell').appendChild(divNew);
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
  document.querySelector('.the-fellowship li').innerText = 'Gandalf the White';
  document.querySelector('.the-fellowship li').style.backgroundColor = "white";
  document.querySelector('.the-fellowship li').style.border = "4px solid grey"; 
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
    //alert("The horn of Gondor has been blown");
    document.querySelector('.the-fellowship').removeChild(document.querySelector('.the-fellowship').lastChild);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  document.querySelector('#Mordor').appendChild(document.querySelector('.the-fellowship .hobbit'))
  document.querySelector('#Mordor').appendChild(document.querySelector('.the-fellowship .hobbit'))
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const divDoom = document.createElement('div');
  divDoom.id = 'mount-doom';
  //div.appendChild(document.querySelector)
  document.querySelector('#Mordor').appendChild(divDoom);
  // add a div with an id of `'mount-doom'` to `Mordor`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");
  const divGollum = document.createElement('div');
  divGollum.id = 'gollum';
  document.querySelector('#Mordor').appendChild(divGollum);
  document.querySelector('#gollum').appendChild(document.querySelector('.magic-imbued-jewelry'));
  //Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  document.querySelector('#Mordor').removeChild(document.querySelector('#Mordor #gollum'));
  document.querySelector('#The-Shire').appendChild(document.querySelector('#Mordor .hobbit'));
  document.querySelector('#The-Shire').appendChild(document.querySelector('#Mordor .hobbit'));
  document.querySelector('#The-Shire').appendChild(document.querySelector('#Rivendell .hobbit'));
  document.querySelector('#The-Shire').appendChild(document.querySelector('#Rivendell .hobbit'));
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
