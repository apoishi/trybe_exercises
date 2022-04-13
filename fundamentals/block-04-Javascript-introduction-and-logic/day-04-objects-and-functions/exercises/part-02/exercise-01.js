// method - 01
function checkPalindrome(string){
	for(index in string){
	  if(string[index] != string[(string.length - 1) - index]){
		return false;
	  }
	}
	return true;
  }
console.log(checkPalindrome('banana'));

// method - 02

function checkPalindrome(string) {
	let reverse = string.split('').reverse().join('');
	if (reverse === string) {
	  return true;
	} else {
	  return false;
	}
  }
  console.log(checkPalindrome('banana'));
