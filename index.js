// function sayHello(){
//     console.log("hello world");
// }


// function sayHi(){
//     sayHello();
// }
// sayHi();

// function sayBye(goodBye){
//     goodBye();
// }
// sayBye(sayHi);

function receivesAFunction(h1){
    console.log(h1());
}

function returnsANamedFunction(){
    return function name(){
    };
}

function returnsAnAnonymousFunction(){
    return function(){}
};