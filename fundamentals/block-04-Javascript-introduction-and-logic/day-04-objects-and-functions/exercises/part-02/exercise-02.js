function highestIndex(numbers){
let higherIndex = 0;
for (let index in numbers){
if(numbers[higherIndex] < numbers[index]){
	higherIndex = index;
}
}
return higherIndex;
};
console.log(highestIndex([2,10,50,13]));
