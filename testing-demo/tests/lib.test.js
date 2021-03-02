const lib = require('../lib')

//describe sluzi za grupisanje istih testova
describe('absolute', () => {
    it('should return a positive numbe if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    }) 
    
    it('should return a positive numbe if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    }) 
    
    it('shouldreturn  a 0 numbe if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    }) 
})


describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/); //mozemo da koristimo regularne izraze u radu sa stringovima
        expect(result).toContain('Mosh');
    });
})

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        //Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        //Proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        
        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
    
    });
})