/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newList: number[] = [];
    if (numbers.length < 1) {
        return newList;
    } else if (numbers.length === 1) {
        newList.splice(0, 1, numbers[0]);
        newList.splice(1, 0, numbers[0]);
        return newList;
    }
    newList.splice(0, 1, numbers[0]);
    newList.splice(1, 0, numbers[numbers.length - 1]);
    return newList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNumbers = numbers.map(
        (tripledNumber: number): number => tripledNumber * 3
    );
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newList: number[] = numbers.map((value: string): number =>
        Number(value) ? Number(value) : 0
    );
    return newList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((value: string): string =>
        value.charAt(0) === "$" ? value.replace("$", "") : value
    );

    const newList: number[] = amounts.map((value: string): number =>
        Number(value) ? Number(value) : 0
    );
    return newList;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    const newList = messages.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((word: string): boolean => word.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newList = colors.filter(
        (color: string): boolean =>
            color.toLowerCase() !== "red" &&
            color.toLowerCase() !== "blue" &&
            color.toLowerCase() !== "green"
    );
    if (newList.length < 1) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
