const should = require('should');
const {
	flatten,
	combine,
	unique,
	uniqueAndSort,
	isPhoneNo,
	isEmail,
	isValidReg,
	isValidLength,
	isValidUrl,
	isValidPost,
} = require('../src/utils');

describe('test/utils.test.js flatten', () => {
	it('should be one-dimensional array', () => {
		flatten([ 1, 2, [ 3, 4, [ 5, 5, [ 6, [ 8 ]]]]]).should.be.Array();
	});
	it('should throw when parameter not be array', () => {
		(() => {
			flatten('arguments');
		}).should.throw('arr should be array');
	});
});

describe('test/utils.test.js combine', () => {
	it('should be array', () => {
		combine([ 1, 2, 3, 4 ], [ 2, 3, 4, 5 ]).should.be.Array();
	});
});

describe('test/utils.test.js unique', () => {
	it('should be array', () => {
		unique([ 1, 2, 3, 4, 4, 4, 4 ]).should.be.Array();
	});
	it('arr should be array', () => {
		(() => {
			unique('a');
		}).should.throw('arr should be array');
	});
});

describe('test/utils.test.js uniqueAndSort', () => {
	it('should be array and length is 5', () => {
		uniqueAndSort([ 6, 2, 3, 1, 4, 4, 4, 4 ]).should.be.Array();
		uniqueAndSort([ 6, 2, 3, 1, 4, 4, 4, 4 ]).should.be.instanceof(Array).and.have.lengthOf(5);
	});
	it('arr should be array', () => {
		(() => {
			uniqueAndSort('a');
		}).should.throw('arr should be array');
	});
});

describe('test/utils.test.js isPhoneNo', () => {
	it('isPhoneNo should be true', () => {
		isPhoneNo(18671952691).should.be.exactly(true);
	});
	it('isPhoneNo should be false', () => {
		isPhoneNo(11111111111).should.be.exactly(false);
	});
});

describe('test/utils.test.js isEmail', () => {
	it('isEmail should be true', () => {
		isEmail('97791896@qq.com').should.be.exactly(true);
	});
	it('isEmail should be false', () => {
		isEmail('977111@191896@qq.com').should.be.exactly(false);
	});
});

describe('test/utils.test.js isValidReg', () => {
	it('isValidReg should be false', () => {
		isValidReg('97791896').should.be.exactly(false);
	});
	it('isValidReg should be true', () => {
		isValidReg('977111ㄏ@191896@qq.com').should.be.exactly(true);
	});
}); isValidLength;

describe('test/utils.test.js isValidLength', () => {
	it('isValidLength should be true', () => {
		isValidLength('97791896', 5).should.be.exactly(true);
	});
	it('isValidLength should be false', () => {
		isValidLength('977111', 10).should.be.exactly(false);
	});
});

describe('test/utils.test.js isValidUrl', () => {
	it('isValidUrl should be true', () => {
		isValidUrl('http://aaa.com').should.be.exactly(true);
	});
	it('isValidUrl should be false', () => {
		isValidUrl('977111').should.be.exactly(false);
	});
});

describe('test/utils.test.js isValidPost', () => {
	it('isValidPost should be true', () => {
		isValidPost('222222').should.be.exactly(true);
	});
	it('isValidPost should be false', () => {
		isValidPost('2221222').should.be.exactly(false);
	});
});
