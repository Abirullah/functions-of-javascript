function removedvawouls(str){
    let finalstring = console.log(str.replace(/[aeiouAEIOU]/g , ''));
    return finalstring;

}

removedvawouls("Abirullah");
removedvawouls("Hello Warld");
removedvawouls("AEIOUaeiou");
removedvawouls("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM");

