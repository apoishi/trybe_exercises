const encode = (string) => {
	let result = '';
	for (let index = 0; index < string.length; index += 1) {
	  switch (string[index]) {
	  case 'a':
		result += '1';
		break;
	  case 'e':
		result += '2';
		break;
	  case 'i':
		result += '3';
		break;
	  case 'o':
		result += '4';
		break;
	  case 'u':
		result += '5';
		break;
	  default:
		result += string[index];
	  }
	}
	return result;
  }

 const decode = (string) => {
	let result = '';
	for (let index = 0; index < string.length; index += 1) {
	  switch (string[index]) {
	  case '1':
		result += 'a';
		break;
	  case '2':
		result += 'e';
		break;
	  case '3':
		result += 'i';
		break;
	  case '4':
		result += 'o';
		break;
	  case '5':
		result += 'u';
		break;
	  default:
		result += string[index];
	  }
	}
	return result;
  }

  const functions = { encode, decode };
  
  module.exports = functions;
