const  a =  - 150;
const  b = 70;
const  c = 10;
let triangle = a + b + c;
let positiveTriangle = a > 0 && b > 0 && c > 0;

if ( positiveTriangle){
if ( triangle === 180 ) {
	console.log("true");
} else  {
	console.log("false");
};
} else {
	console.log("invalid");
}



