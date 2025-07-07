
class StringCalculator {
    add(numbers) {
        // This will extract clean numbers mixed in commas, newline or any special char delimiters
        const _numbers = (numbers.length === 0) ? numbers : numbers.match(/\d+/g).join()

        if (_numbers === "") {
            return 0;
        }
        
        const numArray = _numbers.split(",");
        
        // Negative number check
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`)
        }

        // Process if no negative numbers
        // Handle single, comma, newline or any delimiter separated numbers using Regex
        if (_numbers.includes(",")) {
            const addAll = numArray.reduce((accumlator, currentValue) => accumlator = parseInt(accumlator) + parseInt(currentValue));
            return parseInt(addAll);
        }

        return parseInt(_numbers);
        // We'll add more logic later for other cases
    }
}

module.exports = StringCalculator;