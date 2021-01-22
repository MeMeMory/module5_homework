let x = +prompt('Введите значение');
console.log(typeof x);

if (!x) {
	console.log('Упс, кажется, вы ошиблись')
} else if (x % 2 === 0) {
	console.log('Чётное число')
} else {
	console.log('Нечётное число')
}