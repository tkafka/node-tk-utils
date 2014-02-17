exports.randomElement = function (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};

exports.randomNumber = function (from, to) {
	return from + Math.floor(Math.random() * (to - from));
};
