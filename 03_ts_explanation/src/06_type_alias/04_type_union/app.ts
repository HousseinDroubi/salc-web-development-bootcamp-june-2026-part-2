type A = {
  a: number;
  b: number;
};

type B = {
  c: boolean;
  d: boolean;
};

type C = A | B; // A | B is Union type, so C can be either A or B or both

const fun1 = (data:C)=>{
    if("a" in data && "b" in data){
        console.log(data.a, data.b);
    }else{
        console.log(data.c, data.d);
    }
}

fun1({
    a:10,
    b:20,
    c:true,
    d:false
});