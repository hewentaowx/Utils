/**
 * 多维数组降成一维
 * @param {Array} arr [xx,[xx,[]]]
 * @return {Array} arr [xx,xx,xx]
 */
const flatten = arr =>
	arr.reduce(
		(flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
		[]
	);

exports.flatten = flatten;

/**
 * 去除重复并合并数组 因为有set和arguments所以不用es6的胖箭头
 * @param {Array} m arr [xx, xx]
 * @param {Array} n arr [xx, xx]
 * @return {Array} arr [xx, xx]
 */
const combine = function() {
	const arr = [].concat.apply([], arguments);
	return Array.from(new Set(arr));
};

exports.combine = combine;

/**
 * 去除数组中重复元素
 * @param {Array} arr [xx, xx, xxx, xxxx]
 * @return {Array} arr [xx, xxx, xxxx]
 */
const unique = arr =>
	arr.filter((item, index) => arr.indexOf(item) === index);

exports.unique = unique;

/**
 * 排序并去重
 * @param {Array} arr [xx,xxx,x,xxxx]
 * @return {Array} arr [x,xx,xxx,xxxx]
 */
const uniqueAndSort = arr => {
	return arr.concat().sort().filter((item, index, arr) => {
		return !index || item !== arr[index - 1];
	});
};

exports.uniqueAndSort = uniqueAndSort;
