/** Write a function that takes a string, parses it, and returns the integer value */

const atoi = (str: string): number => {
    // return parseInt(str); without using this
    //convert each decimal digit from string to number value
    //.charCodeAt(0) returns integer repesenting the UTF-16 code unit @ given index
    const zeroCode = '0'.charCodeAt(0);

    //parse out sign
    let sign = 1;
    if (str[0] === '-') {
        //.substring() returns part of the string between start & end indexes or to end of string
        str = str.substring(1);
        sign = -1;
    }

    //create acc for integer result of parsing the digits
    let acc = 0;
    //go left to right
    for (const char of str) {
        //update acc as sum of current acc * 10, & # value of current
        acc = acc * 10 - (char.charCodeAt(0) - zeroCode);
    }
    return sign * acc;
};

//things that can go wrong with this implements
//assuming string only has valid digits
//to fix: line 15 make sure it's in a range from #'s 0-9
