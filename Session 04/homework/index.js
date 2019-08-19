// Bai 1


const cautracnghiem = {
 question : "How many legs an octopus has",
 choice : {
     1 : "One leg",
     2 : " Two legs",
     3 : "Four legs",
     4: " Eight legs"
 },
 correct : "Eight legs"
 
}
console.log(`${cautracnghiem.question}`)

console.log(`1.${cautracnghiem.choice[1]}`)
console.log(`2.${cautracnghiem.choice[2]}`)
console.log(`3.${cautracnghiem.choice[3]}`)
console.log(`4.${cautracnghiem.choice[4]}`)
const cautraloi = prompt("How many legs an octopus has",)
if (cautraloi == 4) {

    console.log("hura")
}
else {
    console.log ("Not a correct answer :'")
}




// Bai 2

const footballquiz = [
    {
        question : " Who is the best player in the world now?",
        answer: {
            1 : "Messi",
            2 : " Ronaldo",
            3 : " Neymar",
            4 : " Cong Phuong"
        },
        correct : "Cong Phuong",
    },
{
question : " Who is the best football coach in the world?",
answer : {
    1: "Pep",
    2 :" Sir Alex Ferguson",
    3 : " Mourinho",
    4 : " Park Hang Seo"
},
correct : "Park Hang Seo",
},
{
question : " Which is the best national football team?",
answer : {
    1: "Vietnam",
    2: " Germany",
    3: "Spain",
    4: "Brazil"
},
correct : "Vietnam"


}
]
let numberCorrect = 0
for ( i=0; i < footballquiz.length; i++){
    console.log(`Cau so ${i +1}`)
    console.log(footballquiz[i].question)
    console.log(footballquiz[i].answer)
    let ans = footballquiz[i].answer
    let dapan = footballquiz[i].correct
    // for (l=0; l < ans.length;l++){
    //     console.log(`${l}.${ans[l]}`)
    // }
    
    let cautraloi =prompt(`${footballquiz[i].question}\n
   ${footballquiz[i].answer[1]}\n
   ${footballquiz[i].answer[2]}\n
   ${footballquiz[i].answer[3]}\n
   ${footballquiz[i].answer[4]}`)
   console.log ("Câu trả lời của bạn là",(cautraloi))
    
    

   if (cautraloi == dapan ){
       console.log(" Dung roi")
   }
   else {
       console.log("Sai roi")
   }
}
console.log(`>>Number of correct answers: ${numberCorrect}`);
let ratioCorect = numberCorrect / footballquiz.length * 100; 
console.log(`>>>correct answer rate: ${ratioCorect}%`)