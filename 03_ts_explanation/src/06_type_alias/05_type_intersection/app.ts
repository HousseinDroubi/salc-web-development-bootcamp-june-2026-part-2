type A = {
  a: number;
  b: number;
};

type B = {
  c: boolean;
  d: boolean;
};

type C = A & B;  // A & B is intersection type, so C must be both A and B

const fun1 = (data:C)=>{
    console.log(data.a,data.b,data.c,data.d);
}

fun1({
    a:10,
    b:20,
    c:true,
    d:false
});