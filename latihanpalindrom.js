let kata = "Kasur nababan Rusak"
//normasilsasi
kata = kata.toLocaleLowerCase()
//split
let kataArray = kata.split('')
//reverse
kataArray.reverse()
// array to string
let kataDibalik = kataArray.toString()
//hapus koma
kataDibalik = kataDibalik.replaceAll(',','')

if (kata === kataDibalik) {
    console.log('Palindrom')
}else{
    console.log('Bukan Palindrom')
}