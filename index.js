//Nomor1
let jabatan = "Programmer" ;
if (jabatan === "Programmer") {
    console.log("Jika saya menjadi programmer, maka tugas saya menulis kode untuk menciptakan perangkat lunak komputer") ;
} else if (jabatan === "CEO" ) {
    console.log("Jika saya menjadi CEO, maka tugas saya merancang dan mengkomunikasikan visi perusahaan") ;
} else if (jabatan === "CTO") {
    console.log ("Jika saya menjadi CTO, maka tugas saya mengelola infrastruktur dan operasional TI perusahaan");
} else if (jabatan === "HR") {
    console.log("Jika saya menjadi HR, maka tugas saya melakukan recruitmen karyawan baru");
} 

//Nomor 2
let nilaiA = 23 ;
let nilaiB = 32 ;
if (nilaiA > nilaiB) {
    console.log("Nilai A lebih besar daripada B") ;
} else if (nilaiA < nilaiB ) {
    console.log("Nilai A lebih kecil daripada B");
} else if (nilaiA = nilaiB) {
    console.log ("Nilai A sama dengan B");
}

//Nomor 3
Minggu = 1
Senin = 2
Selasa = 3
Rabu = 4
Kamis = 5
Jumat = 6
Sabtu = 7

let hari = 1;
switch (hari) {
    case 1 :
        console.log("Minggu") ;
        break;
    case 2 :
        console.log("Senin") ;
        break;
    case 3 :
        console.log("Selasa") ;
        break;
    case 4 :
        console.log("Rabu");
        break;
    case 5 :
        console.log("Kamis") ;
        break;
    case 6 :
        console.log("Jumat") ;
        break; 
    case 7 :
        console.log("Sabtu") ;
        break;
    default :
        console.log("Ini tahun 2021")
} 

// Nomor 4 
let arah = "UP";
switch (arah) {
    case "UP" :
        console.log("Naik ke atas") ;
        break;
    case "RIGHT" :
        console.log("Berjalan ke kanan") ;
        break;
    case "BOTTOM" :
        console.log("Turun ke bawah");
        break;
    case "LEFT" :
        console.log("Berjalan ke kiri") ;
        break;
    default :
        console.log("Game Selesai")
}