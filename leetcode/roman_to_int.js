let romanToInt = (s) => {
    let nums = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (nums[s[i]] < nums[s[i + 1]]) {
            total -= nums[s[i]];
        } else {
            total += nums[s[i]];
        }
    }

    return total;
}