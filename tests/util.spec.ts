import chai = require('chai');
const expect: Chai.ExpectStatic = chai.expect;

import U = require('../src/util');

process.env.NODE_ENV='test';

describe('util.ts - repeatStr', () => {

    it('should return a string repeated', () => {
        expect(U.repeatStr('ab', 5)).to.be.equal('ababababab');
    });

});
