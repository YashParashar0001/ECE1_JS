
// Get Element By ID

let container = document.getElementById('container');
console.log(container);


// Get Element By Class Name

let box = document.getElementsByClassName('box');
console.log(box);


// Get Element By Tag Name

let div = document.getElementsByTagName('div');
console.log(div);


// Query Selector 
let queryBox = document.querySelector('.box');
console.log(queryBox);


// Query Selector 
let queryBoxAll = document.querySelectorAll('.box');
console.log(queryBoxAll);


// ===========================================================================================
// ===========================================================================================


// get Attribute

let result = document.getElementById('container').getAttribute('data-attribute');
console.log(result);

// set Attribute

document.getElementById('container').setAttribute('data-attribute-added', 'WeAddedAttribute');


// ===========================================================================================
// ===========================================================================================


// Create an Element

let element = document.createElement('h1');
let body = document.querySelector('body');

body[0].append(element);


// ============ 1. Before ============
// <body>
// ============ 2. Prepend ============

// <childs>
// </childs>

// ============ 3. Append ============
// </body>
// ============ 4. After ============



// ===========================================================================================
// ===========================================================================================


// Changing Style

document.querySelectorAll('.box').forEach(element => {
    element.style.backgroundColor = 'red';
    element.style.border = '2px solid black';
});


// ===========================================================================================
// ===========================================================================================



let btns = document.getElementsByClassName('btn');

function onclick(){
    console.log('Single Click');
}
function ondblclick(){
    console.log('Double Click');
}
function onmousedown(){
    console.log('Mouse Down');
}
function onmouseup(){
    console.log('Mouse Up');
}
function onmouseover(){
    console.log('Mouse Over');
}
function onmouseout(){
    console.log('Mouse Out');
}
