let arr = [0,0,0, null, NaN,3, 3, 4, "5x"];
let ch = 0;
let nch = 0;
let z = 0;
for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
		if (arr[i] === 0) {
			z += 1;
		} else if (arr[i] % 2 === 0) {
			nch += 1;
		} else {
			ch += 1;
		}
	}
}
console.log(`В массиве четных элементов: ${ch}`);
console.log(`В массиве нечетных элементов: ${nch}`);
console.log(`В массиве нулей: ${z}`);
