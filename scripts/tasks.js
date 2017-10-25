// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
// ------------------------
function getFieldValues(array, key) {
    let result = [];
    array.forEach(function (item) {
        if (item[key] != undefined) result.push(item[key]);
    });
    return result.sort();
}

let usersData = [
    {'user': 'Alex', 'password': 'MyNameIsAlex'},
    {'user': 'Bob', 'password': 'MyNameIsBob'}
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// ------------------------
// 2) Написать функцию, фильтрующую массив с использованием предиката:
// ------------------------

let numbers = [1, 2, 3, 77, 76, 12312, 1211, 5, 8, 13, 21, 34, 55];
function isEven(numbers) {
    numbers = numbers.filter(function (number) {
        return number % 2 == 0
    });
    return numbers;
}
console.log(isEven(numbers)); // --> [2, 8, 34]

// ------------------------
// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках
// ------------------------

var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
function findSimilarWords(firstLongString, secondLongString) {
    let result = [];
    let arr1 = firstLongString.split(" ");
    // let arr2 = secondLongString.split(" ");
    arr1.forEach(function (item) {
        if (secondLongString.indexOf(item) !== -1)
            result.push(item);
    });

    result = result.filter(filter);

    return result;
}
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];

function filter(elem, index, self) {
    return index == self.indexOf(elem);
}
// ------------------------
// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
// ------------------------

var IpAddress = '10.223.98.2';
var subnetMask = 28;
function generateBroadcastAndNetworsAddresses(IpAddress, subnetMask) {
    let ip = IpAddress.split(".");

    if (!/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(IpAddress)) {
        console.log("You have entered an invalid IP address!")
        return null;
    }

    let mask = findMask(subnetMask);

    return "Broadcast - " + getBroadcastAddress(ip, mask) + ", Network - " + getNetworkAddress(ip, mask);
}

function findMask(subnetMask) {
    var mask = [];
    while (subnetMask > 0) {
        var temp = "";
        for (var i = 0; i < 8; i++)
            temp += --subnetMask >= 0 ? "1" : "0";
        mask.push(parseInt(temp, 2));
    }
    return mask;
}

function getNetworkAddress(ip, mask) {
    var temp = [];
    for (var i = 0; i < 4; i++)
        temp.push(ip[i] & mask[i]);

    return temp.join(".");
}

function getBroadcastAddress(ip, mask) {
    var tmp = [];
    for (var i = 0; i < 4; i++) {
        tmp.push(ip[i] | invert(mask[i]));
    }
    return tmp.join(".");
}

function invert(octet) {
    return 255 - octet;
}

console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// ------------------------
// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// ------------------------

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean(totalMessArray) {
    var result = [];

    for (var i = 0; i < totalMessArray.length; i++)
        result = result.concat(totalMessArray[i]);

    result = result.filter(filter);
    return result;
}

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];
// ------------------------