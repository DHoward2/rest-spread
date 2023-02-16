// Refactor 
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0)
}

function findMin(...nums) {
    return nums.reduce(function(min,next){
        return min > next ? min = next : min;
    },nums[0])
}

const mergeObjects = (obj1,obj2) => {
    const combineObj = {...obj1, ...obj2};
    return combineObj;
}

const doubleAndReturnArgs = (arr, ...nums) => {
    const doublenums = nums.map(num => num * 2);
    const finalArr = [...arr, ...doublenums];
    return finalArr;
}


// Slice and Dice
function removeRandom(...items) {
    const itemsCopy = [...items];
    return itemsCopy.filter(index => index !== itemsCopy[ Math.floor(Math.random() * items.length)]);
}

const extend = (arr1,arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key1, val) => {
    const newObj = {...obj}
    newObj[key1] = val;
    return{...newObj};
}

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1,obj2) => ({...obj1, ...obj2});

const update = (obj, key1, val) => {
    const newObj = {...obj}
    newObj[key1] = val;
    return{...newObj};
}