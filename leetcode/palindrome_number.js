let palindromeNumber = (x) => {
    let reverse = x.toString().split('').reverse().join('');
    return x == reverse
}

console.log(palindromeNumber(-121))
console.log(palindromeNumber(121))