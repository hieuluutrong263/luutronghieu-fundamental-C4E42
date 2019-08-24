// const laptop = {
//     HP : 20,
//     DELL : 50,
//     MACBOOK : 12,
//     ASUS : 30
// }

// // console.log(laptop.MacBook)

// // let maytinh =prompt("Bạn muốn mua  máy tính hãng nào?")

// // console.log(laptop[maytinh])


// // laptop.Toshiba = 10
// // console.log(laptop)
// // let maytinhmoi = prompt("Thêm máy tính hãng mới")
// // let soluongmaytinhmoi = Number(prompt("Thêm số lượng máy tính hãng mới"))
// // laptop[maytinhmoi] = soluongmaytinhmoi
// // console.log(laptop)



// // laptop.MacBook = 2
// // laptop.Dell = 60
// // console.log(laptop)


// // laptop.Fujitsu =15
// // laptop.Alienware = 5
// // console.log(laptop)

// // total=0
// // for(let key in laptop){
// //     console.log(key)
// //     total +=laptop[key]
// // }
// // console.log(total)

// const Banggia = {
//     HP :   600,
//     DELL : 650,
//     MACBOOK: 12000,
//     ASUS : 400,
//     ACER : 350,
//     TOSHIBA : 600,
//     FUJITSU : 900,
//     AILENWARE: 1000,
// }
// // console.log(Banggia)
// // console.log(Banggia.ASUS)
// // let giaMayTinh = prompt("Giá máy tính hãng ")
// // console.log(Banggia[giaMayTinh])
// // let donHangAsus = (Banggia.ASUS*5)
// // console.log(donHangAsus)
// // let hangMayTinh =prompt("Bạn muốn mua máy tính hãng nào và số lượng bao nhiêu")
// // console.log(Banggia[hangMayTinh])
// // let nameNNumber =hangMayTinh.split(":")
// // console.log(nameNNumber)

// // let donHang =(Banggia[nameNNumber[0]]*Number(nameNNumber[1]))
// // console.log(donHang)
// // // let hangTon = (laptop[maytinh]-Number(nameNNumber[1]))
// // console.log(hangTon)
// total=0
// for (let i in laptop){

//     let tongGiatri = Banggia[i]*laptop[i]
//     console.log(tongGiatri)
//     total += tongGiatri
// }
// console.log(total)


//Bài 2
let game = {
    Name: "Light",
    Age: 17,
    Strength: 8,
    Defense: 10,
    HP: 100,
    Backpack: ["Shield", "Bread Loaf"],
    Gold: 100,
    Level: 2
}
console.log(game)
game.Gold += 50
game.Backpack.push("FlintStone")
game.Pocket = ["MonsterDex", "Flashlight"]


let nhanVat = [
    {
            Name: "Tackle",
            MinimumLevel: 1,
            Damage: 5,
            HitRate: 0.3

        
    },
    {
            Name: "Quick Attack",
            MinimumLevel: 2,
            Damage: 3,
            HitRate: 0.5

        
    },
    {
       
            Name: "Strong Kick",
            MinimumLevel: 4,
            Damage: 9,
            HitRate: 0.2
    }



]
console.log(nhanVat)
for ( let i=0;i<nhanVat.length;i++){
let a= nhanVat[i]
console.log(a)
console.log(`Skill [${i+1}] ${a.Name}`) // string formating
}

let cautraloi = prompt("Chon Skill")
console.log(cautraloi);

if (game.Level < nhanVat[cautraloi-1].MinimumLevel){
console.log("k du Level")
}
else {
    console.log(nhanVat[cautraloi-1].Damage)
}

let a = Math.random()   
console.log(a)
console.log(nhanVat[cautraloi-1].HitRate)
if (a<nhanVat[cautraloi-1].HitRate){
    console.log(nhanVat[cautraloi-1].Damage)
}
else {
    console.log("Skill khong trung muc tieu")
}




