export const palindrome = (str) => {
    return str
    .split('')
    .reverse()
    .join('')
}

export const average = array => {
    let sum = 0
    array.forEach(element => {
        sum += element
    });
    return sum / array.length
}