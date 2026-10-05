const fun1 = (username:string = "Unkown") =>{
    // username is not required, but if not passed, it will be considered as "Unkown"
    console.log(username);
}

fun1();

const fun2 = (username?: string)=>{
    // username is not required, but if not passed, it be considered as undefined
    console.log(username);
}

fun2();

const fun3 = (username: string | undefined)=>{
    // username is required, it must be passed either as string or as undefined
    console.log(username);
}

fun3(undefined);