let article_1: [number, string, boolean] = [11, "One", true];
article_1 = [12, "Two", false];

article_1.push(200); // * This is allowed since there's no restriction for that

console.log(article_1);
console.log("------------------------------");

let article_2: readonly [number, string, boolean] = [11, "One", true];
article_2 = [12, "Two", false];

// article_2.push(200); // ! This will throw an error since it's for read only

console.log(article_2);
console.log("------------------------------");