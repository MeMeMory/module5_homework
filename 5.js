const Array = [undefined, 1, true, '3', null, {
	name: "Вася"
}, Symbol(), {}, ]
console.log(Array.length)

for (let i = 0; i < Array.length; i++) {
	console.log(Array[i])
}