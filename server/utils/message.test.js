var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Man Vu';
        const text = 'I am the best';
        const res = generateMessage(from, text);

        expect(res).toInclude({from, text});
        expect(res.createdAt).toBeA('number');
    });
});