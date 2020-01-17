// вторая строка tr вторая ячейка td 
let x = document.querySelector('body table tbody tr:nth-child(2) td:nth-child(2)').innerHTML; 
// console.log(x);


function getObjectFromTable () {
    let count = [...document.querySelectorAll(`body table tbody tr`)].length - 2; 
    let keys = [...document.querySelectorAll('table thead th')].map(el => el.innerHTML.replace(/\s+/g, '').toLowerCase()); 
    // let row = [...document.querySelectorAll(`body table tbody tr:nth-child(${n}) td`)].map(el => el.innerHTML); 
    let res = [];
    
    for (i = 0; i < count; i++) {
        res[i] = {}
        let row = [...document.querySelectorAll(`body table tbody tr:nth-child(${i+1}) td`)].map(el => el.innerHTML); 
        for (let j = 0; j < keys.length; j++) {
            res[i][keys[j]] = row[j]
        }
    }
    console.log(res);
    return res;
}

getObjectFromTable()





























// let str = '123354646546546';
// let summ = [].map.call(str, (acc, el) => acc + +el, 0);
// console.log(summ);
