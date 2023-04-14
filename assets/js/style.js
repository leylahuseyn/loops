// var num=prompt("Ədəd daxil edin!");
// if(num<2){
//     alert("Ədəd 1-dən böyük olmalıdır!")
// }
// else if(num==2) {
//     alert("Sadə ədəddir")
// }
// else{
//    a=num
//    i=2
//    m=true
//     while (i<=num) {
//         if(num%i==0){
//             alert("Mürəkkəb ədəddir")
//         }
        
//         m=false
//         break
//     }
// }





var num=Number(prompt("Ədəd daxil edin!")) 
var sum=0;
while (num>0){
    var teklik=num%10;
    num=num-teklik;
    num=num/10;
    sum=sum+teklik;
}
alert(sum)



