/**
 * 多维数组降成一维
 * @param {Array} arr [xx,[xx,[]]]
 * @return {Array} arr [xx,xx,xx]
 */
const flatten = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError('arr should be array');
	}
	return arr.reduce(
		(flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
		[]
	);
};
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
const unique = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError('arr should be array');
	}
	return arr.filter((item, index) => arr.indexOf(item) === index);
};
exports.unique = unique;

/**
 * 排序并去重
 * @param {Array} arr [xx,xxx,x,xxxx]
 * @return {Array} arr [x,xx,xxx,xxxx]
 */
const uniqueAndSort = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError('arr should be array');
	}
	return arr.concat().sort().filter((item, index, arr) => {
		return !index || item !== arr[index - 1];
	});
};
exports.uniqueAndSort = uniqueAndSort;

/**
 * 判断是否为电话号码
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isPhoneNo = elem => {
	return (/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(elem));
};
exports.isPhoneNo = isPhoneNo;

/**
 * 判断是否为邮箱
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isEmail = elem => {
	return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(elem));
};
exports.isEmail = isEmail;

/**
 * 判断是否为身份证号码
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isIDCard = elem => {
	return (/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(elem));
};
exports.isIDCard = isIDCard;

/**
 * 判断是否有危险字符
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isValidReg = elem => {
	const reg = /<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
	return reg.test(elem);
};
exports.isValidReg = isValidReg;

/**
 * 判断字符串是否大于规定的长度
 * @param {string} chars 字符串
 * @param {number} len 规定长度
 * @return {boolean} 布尔值
 */
const isValidLength = (chars, len) => {
	return !(chars.length < len);
};
exports.isValidLength = isValidLength;

/**
 * 判断字符串是网址不区分大小写
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isValidUrl = elem => {
	const reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(\S+\.\S+)$/;
	if (!(elem === null)) {
		elem = elem.replace(/\s+/g, '');
		if (elem.match(reg) === null) {
			return false;
		}
		return true;
	}
	return false;
};
exports.isValidUrl = isValidUrl;

/**
 * 判断字符串是否为A-Za-z的英文字母
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isLetters = elem => {
	return (/^[A-Za-z]+$/.test(elem));
};
exports.isLetters = isLetters;

/**
 * 判断字符串是否邮政编码
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isValidPost = elem => {
	return (/^\d{6}$/.test(elem));
};
exports.isValidPost = isValidPost;

/**
 * 验证是否为ip
 * @param {string} elem 控件值
 * @return {boolean} 布尔值
 */
const isValidIP = elem => {
	const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	return reg.test(elem);
};
exports.isValidIP = isValidIP;

/**
 * 判断两子字符串是否是同态 egg和foo为同态 eig和egg为不同态
 * @param {string} elem1 控件值1
 * @param {string} elem2 控件值2
 * @return {boolean} 布尔值
 */
const isIsomorphic = (elem1, elem2) => {
	if (elem1.length !== elem2.length) {
		return false;
	}

	const letterMap = {};
	for (let i = 0; i < elem1.length; i++) {
		const letterA = elem1[i];
		const letterB = elem2[i];
		if (letterMap[letterA] === undefined) {
			if (elem2.indexOf(letterB) < i) {
				return false;
			}
			letterMap[letterA] = letterB;
		}
		if (letterMap[letterA] !== letterB) {
			return false;
		}
	}
	return true;
};
exports.isIsomorphic = isIsomorphic;
