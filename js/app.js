

const getSalaryTotal = () => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(7)`)].map(el => +el.innerHTML).reduce((acc, current) => acc + current); 
console.log(getSalaryTotal());


const getSalaryAVG = () => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(7)`)].map(el => +el.innerHTML).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
console.log(getSalaryAVG());


const getGenderAVG = (gender) => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(n+6)`)].map(el => el.innerHTML).filter((el, ind, arr) => el = +el && arr[ind-1] == gender).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);;
console.log(getGenderAVG('Famale'));

















function getObjectFromTable () {
    let obj = [];
    let objLength = [...document.querySelectorAll(`body table tbody tr`)].length - 2; 
    let keys = [...document.querySelectorAll('table thead th')].map(el => el.innerHTML.replace(/\s+/g, '').toLowerCase()); 
    for (i = 0; i < objLength; i++) {
        obj[i] = {}
        let row = [...document.querySelectorAll(`body table tbody tr:nth-child(${i+1}) td`)].map(el => el.innerHTML); 
        for (let j = 0; j < keys.length; j++) {
            obj[i][keys[j]] = row[j]
        }
    }
    return obj;
}
let stuff = getObjectFromTable()

























