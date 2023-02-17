let n = 9987
if (n > 1 && n < 10){
    console.log("Satuan")
}else if (n > 10 && n < 100){
    console.log("Puluhan")
}else if (n > 100 && n < 1000){
    console.log("Ratusan")
}else if (n > 1000 && n < 9999){
    console.log("Ribuan")
}else{
    console.log("input tidak Valid")
}