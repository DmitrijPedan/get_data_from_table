/*=========== get Total and AVG salary from table =========== */

const getSalaryTotal = () => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(7)`)].map(el => +el.innerHTML).reduce((acc, current) => acc + current); 
const getSalaryAVG = () => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(7)`)].map(el => +el.innerHTML).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
const getGenderTotal = (gender) => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(n+6)`)].map(el => el.innerHTML).filter((el, ind, arr) => el = +el && arr[ind-1] == gender).reduce((acc, current) => +acc + +current);
const getGenderAVG = (gender) => [...document.querySelectorAll(`body table tbody tr:nth-last-child(n+3) td:nth-child(n+6)`)].map(el => el.innerHTML).filter((el, ind, arr) => el = +el && arr[ind-1] == gender).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);

total.innerHTML = getSalaryTotal()
avg.innerHTML = getSalaryAVG()
totalMale.innerHTML = getGenderTotal('Male')
avgMale.innerHTML = getGenderAVG('Male')
totalFemale.innerHTML = getGenderTotal('Famale')
avgFemale.innerHTML = getGenderAVG('Famale')


























