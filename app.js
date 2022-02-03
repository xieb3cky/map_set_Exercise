//Quick Question #1

new Set([1, 1, 2, 2, 3, 4]) // {1,2,3,4}

//Quick Question #2

// [...new Set("referee")].join("") //['ref']

//Quick Questions #3

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/*
Map m

{
[1,2,3] => 'true',
[1,2,3] => 'false'

}

*/

//hasDuplicate

const hasDuplicate = (arr) => {
    const newArr = [...new Set(arr)]
    return !(newArr.length === arr.length);
}

//vowelCount

const vowelCount = (str) => {
    const newArr = [...str.toLowerCase()];
    const vowels = new Map();
    for (let i of newArr) {
        if ('aeiou'.includes(i)) {
            if (vowels.get(i)) {
                vowels.set(i, vowels.get(i) + 1);
            } else {
                vowels.set(i, 1)
            }
        }
    }
    return vowels;
}


