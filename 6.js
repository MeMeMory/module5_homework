const arr = [1, 2, 1, 1]
console.log(arr)
let a = arr[0];
let no = true;
for (i = 0; i < arr.length; i++) {
	// console.log(arr[i])
	if (a != arr[i]) {
		no = false;
		break;
	} 
}
console.log(no)