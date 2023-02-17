let panjang = 'HELLO WORLD!'
let panjangs = panjang.toLowerCase()
let datapanjang = panjangs.split('')

let hitungjumlah = {};
datapanjang.forEach(function (i) { 
    hitungjumlah[i] = (hitungjumlah[i] || 0) + 1; 
});
console.log(hitungjumlah)
