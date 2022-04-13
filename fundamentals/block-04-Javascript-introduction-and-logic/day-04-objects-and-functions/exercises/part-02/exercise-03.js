function smallestIndex(numbers){
	let smallerIndex = 0;
	for (let index in numbers){
	if(numbers[smallerIndex] > numbers[index]){
		smallerIndex = index;
	}
	}
	return smallerIndex;
	};
	console.log(smallestIndex([2,10,50,13]));
