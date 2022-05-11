const hydrate = (str) => {
	const num = str.match(/\d+/g);

	 let cupsOfWater = 0;

	for (let index in num) {
	  cupsOfWater += parseInt(num[index]);
	}
	if (cupsOfWater === 1) {
	  return `${num} copo de água`;
	} else {
	  return `${cupsOfWater} copos de água`;
	}
  }

  module.exports = hydrate;
