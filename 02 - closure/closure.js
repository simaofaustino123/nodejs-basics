function sayHello(name) {
    setTimeout(function(){
        console.log('Hi ' + name);
    }, 100);
}

function sayGoodBye(name) {
    console.log('Good bye ' + name);
}

function executor(callback, name) {
    callback(name);
};

executor(sayHello, 'Jonatas');
executor(sayGoodBye, 'Jonatas');