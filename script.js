function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.length === 0) {
        return null;
    }

  
    for (let i = 0; i < str.length; i++) {
        let nonRepeat = true;
        let currentChar = str.charAt(i);
 // Check if the current character is repeated in the string
        for (let j = 0; j < str.length; j++) {
            if (i !== j && currentChar === str.charAt(j)) {
                nonRepeat = false;
                break;
            }
        }

       
        if (nonRepeat) {
            return currentChar;
        }
    }

    
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
