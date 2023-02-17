function tambah(a,b){
    let hasiltambah = a + b
    return hasiltambah
}

function kurang(a,b){
    let hasilkurang = a - b 
    return hasilkurang
}

function tampilkan(callback,a,b){
    let hasil = callback(a,b)
    console.log(hasil)
}

tampilkan(tambah,10,20)
tampilkan(kurang,10,5)