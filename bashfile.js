let pk = process.env.pk;
let v2 = process.env.add;
let v3 = process.env.sub;
let v4 = process.env.multiplication;
let v5 = process.env.root;
let a = 2;
let b = 3;
//console.log(pk, v2, v3, v4, v5);

if (pk === "main") {
    console.log("Private Key is working");
}
else {
    console.log("It's not working");
}

if (v2 === "plus") {
    let c = a + b;
    console.log("Addition is", c);
}
else {
    console.log("Addition is not imported");
}

if (v3 === "minus") {
    let c = a - b;
    console.log("Sub. is", c);
}
else {
    console.log("Sub. is not imported");
}
if (v4 === "multi") {
    let c = a * b;
    console.log("Multiplication is", c);
}
else {
    console.log("Multilication is not imported");
}
if (v5 === "root1") {
    let c = a % b;
    console.log("Modulus is", c);
}
else {
    console.log("Modulus is not imported");
}