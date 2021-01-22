let map = new Map([
	["good", "bad"],
	["sweet", "salty"],
	["high", "Low"],
	["beautiful", "ugly"]
]);

for (let name of map.keys()) {
	let x = map.get(name);
	console.log(`Ключ - ${name}, значение - ${x}`);
}