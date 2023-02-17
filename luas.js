function luaspersegi(s){
    let hasilrumus1= s ** 2
    return hasilrumus1
}

function luaspersegipanjang(p,l){
    let hasilrumus2 = p * l
    return hasilrumus2
}

function luaslingkaran(r){
    const PI = 3.14
    let hasilrumus3 = PI * r ** 2
    return hasilrumus3
}

exports.luaspersegi = luaspersegi
exports.luaspersegipanjang = luaspersegipanjang
exports.luaslingkaran = luaslingkaran

module.export = {
luaspersegi,
luaspersegipanjang,
luaslingkaran
}

