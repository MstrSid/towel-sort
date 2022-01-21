// You should implement your task here.

module.exports = function towelSort(matrix) {
    const one = [];
	if(matrix === undefined){
		return [];
	}
    matrix.forEach((item, i) => {
        if (i % 2 !== 0) {
            item.reverse();
        }
        item.forEach(n => {
            one.push(n);
        });
    });
    return one;
};
