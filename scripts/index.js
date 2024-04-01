function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

function main() {
    try {
        var age = parseInt(prompt("Please enter your age:"));
        if (isNaN(age) || age < 0) {
            console.log("Invalid input. Please enter a valid age.");
        } else {
            var ticketPrice = calculateTicketPrice(age);
            console.log("The price of your movie ticket is: $" + ticketPrice);
        }
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}

main();




function isPalindrome(s) {
    // Remove spaces, punctuation, and convert to lowercase
    s = s.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Base case: if the length of the string is 0 or 1, it's a palindrome
    if (s.length <= 1) {
        return true;
    }
    // Recursive case: compare the first and last characters,
    // and call the function recursively on the substring without them
    else {
        if (s[0] === s[s.length - 1]) {
            return isPalindrome(s.substring(1, s.length - 1));
        } else {
            return false;
        }
    }
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race car"));                      // Output: true
console.log(isPalindrome("hello"));                         // Output: false
