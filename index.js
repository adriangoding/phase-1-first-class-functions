function receivesAFunction(h1){
    return (h1());
}

function returnsANamedFunction(){
    return function name(){
    };
}

function returnsAnAnonymousFunction(){
    return function(){}
};
