

// if ,else if, else
let uang = 78000
if (uang > 100000){
    console.log("Makan di McD")
}else if (uang > 10000)
    console.log("Makan di Warteg")
else {
    console.log("Masak Indomie dirumah")
}

//
let tahun = 1996
if (tahun %400 == 0 ){
    console.log("Kabisat")
}else if (tahun %100 == 0){
    console.log("Bukan Kabisat")
}else if (tahun %4 == 0 ){
    console.log("Kabisat")
}else{
    console.log("Bukan Kabisat")
}


// SWICTh
let namahewan = 'kambing'

switch(namahewan){
    case 'kucing' :
        console.log("meow")
        break
    case 'anjing' :
        console.log("woof!")
        break
    case 'sapi' :
        console.log("Moooo")
        break
    case 'kambing' :
        console.log("Mbeeek")
        break
    default:
        console.log("Hewan apa itu?")
}

