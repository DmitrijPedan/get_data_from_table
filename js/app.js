// вторая строка tr вторая ячейка td 
let x = document.querySelector('body table tbody tr:nth-child(2) td:nth-child(2)').innerHTML; 
// console.log(x);


// массив значений шапки таблицы (ключи для обьектов) возвращает массив
function getKeysFromTable () {
    let res = [...document.querySelectorAll('table thead th')].map(el => el.innerHTML.replace(/\s+/g, '').toLowerCase()); 
    // console.log(res);
    return res;
}



function getRowFromTable (n) {
    let res = [...document.querySelectorAll(`body table tbody tr:nth-child(${n}) td`)].map(el => el.innerHTML); 
    // console.log(res);
    return res;
}

function getObjectFromTable () {
let tkeys = getKeysFromTable();
let tvalues = getRowFromTable(1);

let res = {};
for (let i = 0; i < tkeys.length; i++) {
    res[tkeys[i]] = tvalues[i]

}
 console.log(res);

}

getObjectFromTable ();


























// let str = '123354646546546';
// let summ = [].map.call(str, (acc, el) => acc + +el, 0);
// console.log(summ);
