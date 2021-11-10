function analyzeArray(arr) {
    const result = {};

    result.average = Math.round(arr.reduce((a, b) => a + b) / arr.length);
    result.max = Math.max(...arr);
    result.min = Math.min(...arr);
    result.length = arr.length;
    return result;
}
export default analyzeArray;
