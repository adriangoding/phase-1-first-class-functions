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
