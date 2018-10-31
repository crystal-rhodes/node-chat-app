var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Man Vu';
        const text = 'I am the best';
        const res = generateMessage(from, text);

        expect(res).toInclude({from, text});
        expect(res.createdAt).toBeA('number');
    });
}); 

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Man Vu';
        const latitude = 0;
        const longitude = 0;
        const url = 'https://www.google.com/maps?q=0,0'
        
        const res = generateLocationMessage(from, latitude, longitude);

        expect(res).toInclude({from, url});
        expect(res.createdAt).toBeA('number');
    });
});