function rotate(array, k) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
  	newArray[(i + k) % array.length] = array[i];
  }
  return newArray;
}
