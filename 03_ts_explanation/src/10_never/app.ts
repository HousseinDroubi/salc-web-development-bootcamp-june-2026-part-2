const fun1 = ():never =>{
    throw new Error();

}

try {
    fun1();
} catch (error) {
    // We don't want to do anything here.
}