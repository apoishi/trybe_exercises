const a = 1;
const b = 2;
const c = 3;

if ( (a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
	console.log ('true');
} else {
	console.log ('false');

}

// Alternative way of solving it.
const d = 1;
const e = 3;
const f = 5;

let isEven = false;

if ((d % 2 === 0 || e % 2 === 0 || f % 2 === 0)) {
  isEven = true;
};
console.log(isEven);
