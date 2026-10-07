// if compilerOptions.allowUnreachableCode is false => report us if there were any unreachable code

const fun1 = ():never =>{
    throw new Error();
    console.log("1"); // So, we will get a warning here

}

try {
    fun1();
} catch (error) {
    // We don't want to do anything here.
}