
// jewels & stones

let numJewelsInStones = function (jewels, stones) {
    let answer = 0;
    for ( stone of stones) {
        if (jewels.includes(stone)) {
            answer++;
        } else {
            console.log(jewels + stones)
        }
    }
    return answer;
};




// brackets
let isValid = function (s) {
    let brackets = [];

    for (let i = 0; i < s.length; i++) {
        let br = brackets[brackets.length - 1]

        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            brackets.push(s[i]);
        } else
            if ((br == '(' && s[i] == ')') ||
                (br == '{' && s[i] == '}') ||
                (br == '[' && s[i] == ']')
            ) {
                brackets.pop();
            } else {
                return false;
            }

    }


};





