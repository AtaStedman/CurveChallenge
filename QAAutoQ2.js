function isThisPalindrome(number) {
  if (number < 0) {
  	number = -number;
  }
	var numString = '' + number;
  for (var i = 0; i < numString.length / 2; i++) {
    var a = numString[i];
    var b = numString[numString.length - 1 - i];
  	if (a != b) {
    	return false;
    }
  }
  return true;
}
