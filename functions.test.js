import capitalize from './functions/capitalize';
import reverseString from './functions/reverse_string';

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
});
