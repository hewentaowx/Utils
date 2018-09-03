const should = require('should');
const {
	flatten,
	combine,
	unique,
} = require('../src/utils');

describe('test/utils.test.js flatten', () => {
	it('should be one-dimensional array', () => {
		flatten([ 1, 2, [ 3, 4, [ 5, 5, [ 6, [ 8 ]]]]]).should.be.Array();
	});
	it('should throw when parameter not be array', () => {
		(() => {
			flatten('arguments');
		}).should.throw('arr.reduce is not a function');
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
		}).should.throw('arr.filter is not a function');
	});
});

describe('test/utils.test.js uniqueAndSort', () => {
	it('should be array and length is 5', () => {
		unique([ 6, 2, 3, 1, 4, 4, 4, 4 ]).should.be.Array();
		unique([ 6, 2, 3, 1, 4, 4, 4, 4 ]).should.be.instanceof(Array).and.have.lengthOf(5);
	});
});
