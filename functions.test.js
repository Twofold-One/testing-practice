import capitalize from './functions/capitalize';
import reverseString from './functions/reverse_string';
import calculator from './functions/calculator';
import caesarCipher from './functions/caesar_cipher';
import analyzeArray from './functions/array_analysis';

describe('capitalize', () => {
    test('works with all letters lowercase', () => {
        expect(capitalize('firstupper')).toBe('Firstupper');
    });
    test('works with not all letters lowercase', () => {
        expect(capitalize('fEnCe')).toBe('Fence');
    });
    test('works with few words', () => {
        expect(capitalize('few words in the sentence')).toBe(
            'Few words in the sentence'
        );
    });
});

describe('reverseString', () => {
    test('actually reversing', () => {
        expect(reverseString('olleh')).toBe('hello');
    });
    test('works with sentences', () => {
        expect(reverseString('!gninrom doog')).toBe('good morning!');
    });
});

describe('calculator', () => {
    test('add', () => {
        expect(calculator.add(5, 2)).toBe(7);
    });
    test('subtract', () => {
        expect(calculator.subtract(10, 3)).toBe(7);
    });
    test('divide', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    test('multiply', () => {
        expect(calculator.multiply(5, 5)).toBe(25);
    });
});

describe('caesarCipher', () => {
    test('actually works', () => {
        expect(caesarCipher('go', 15)).toBe('vd');
    });
    test('works with the same case', () => {
        expect(caesarCipher('Google', 5)).toBe('Lttlqj');
    });
    test('works with few words and punctuation', () => {
        expect(caesarCipher('Harsh Encryption: Takes Place Here!', 11)).toBe(
            'Slcds Pyncjaetzy: Elvpd Awlnp Spcp!'
        );
    });
});

describe('arrayAnalysis', () => {
    test('actually works', () => {
        expect(analyzeArray([1, 3, 4, 7, 8, 11])).toStrictEqual({
            average: 6,
            min: 1,
            max: 11,
            length: 6,
        });
    });
    test('works with negative numbers', () => {
        expect(analyzeArray([5, 22, 48, -10, -24, 55])).toStrictEqual({
            average: 16,
            min: -24,
            max: 55,
            length: 6,
        });
    });
});
