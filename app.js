// Chapter # 31 to 34 date methods


// var a = new Date()
// document.write(a)

// var a = new Date()
// var c = ['Jan','feb','march','april','may','june','july','aug','sept,','nov','dec']
// var b = c[a.getMonth()]
// document.write("Current Month : "+b)


// var a = new Date()
// var c = ['Sunday','Monday','Tuesday','Wednwsday','Thusrday','Friday','Saturday']
// var b = c[a.getDay()]
// var d=''  
// for(var i = 0 ; i < 3 ; i++){
//     d += b[i]
// }
// document.write("Today is : "+ d)

// var a = new Date()
// var c = a.getDay()
// if(c===0 || c === 6){
//     alert("Its Funday!")
// }else{
//     alert("Kaam ker rry Baba!")
// }


// var a = new Date()
// var c = a.getDate()
// if(c <=15){
//     alert("First Fifteen day of the Month.")
// }else if(c>15){
//     alert("Last Fifteen day of the Month.")
// }


// var a = new Date(1970,01,01)
// document.write(a)

// var d = new Date();
// var b = d.getTime()
// document.write("Current Date : " + d +"<br>")
// document.write("Elasped Time since 1970 is : "+b+" MilliSeconds" + "<br>")
// document.write("Elasped Time since 1970 is :" + b/(1000*60) + "Minutes")


// var today = new Date();
// console.log(today)
// var hour = today.getHours()
// var min = today.getMinutes()
// var sec = today.getSeconds();

// if(hour < 12){
//     alert('it is AM')
// }
// else{
//     alert("it is pm")
// }


// var newMethod = new Date("Dec 31,2020");
// document.write("<h1>Later Date : " + " " + newMethod + "</h1>")



// var newRamdan = new Date("April 25,2020")
// var newWhole = new Date();
// var milliRamdan = newRamdan.getTime();
// var milliWhole = newWhole.getTime();
// var diff = milliWhole - milliRamdan;
// var convert =Math.floor(diff / (1000*60*60*24))
// document.write(convert + " days have passed since 1st Ramdan 2020")


// var reference = new Date()
// var since = new Date("dec 5, 2015")
// var milliReference = reference.getTime();
// var milliSince = since.getTime();
// var diff = milliReference - milliSince
// var changer = Math.floor(diff / (1000))
// document.write("On reference date " + " " + reference + " ," + "<br />");
// document.write(changer + " seconds had passed since beginning of 2015")


// var newThing = new Date();
// var laterThing = new Date();
// laterThing.setHours(laterThing.getHours()-1)
// document.write("Current Date :" + " " + newThing + "<br />")
// document.write("1 Hour ago , it was " + " " + laterThing)


// var newdAte = new Date();
// var newForHour = new Date();
// newForHour.setFullYear(newForHour.getFullYear()-100);
// alert("Current Date " + " " + newdAte)
// alert("100 years back , it was " + " " + newForHour)


// var age = prompt("Enter your age");
// var daOfBir = new Date();
// var diff = daOfBir.getFullYear()-age;
// document.write("<h1> Your age is" + " " + age + "</h1>")
// document.write("<h1> Your birth year is" + " " + diff + "</h1>")


// var getmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var myName = "Anas Khan Tanoli"
// var forMonth = new Date();
// var pickMonth =getmonth[forMonth.getMonth()];
// var noOfUnits = 379;
// var chargesPerUnit = 13
// var netAmount = noOfUnits*chargesPerUnit;
// var latePayCharges = 245
// var afterDue = netAmount+latePayCharges
// document.write("<h1>K-Electric Bill</h1>" + "<br / >")
// document.write("Customer's Name :" + " <b>" + myName + "</b>" + "<br / >")
// document.write("Month :" + " <b>" + pickMonth + "</b>" + "<br / >")
// document.write("Number of units:" + " <b>" + noOfUnits + "</b>" + "<br / >")
// document.write("Charges per unit :" + " <b>" + chargesPerUnit + "</b>" + "<br / >" + "<br / >")
// document.write("Net Amount Payable (within Due Date):" + " <b>" + netAmount + "</b>" + "<br / >")
// document.write("Late payment surcharges:" + " <b>" + latePayCharges + "</b>" + "<br / >")
// document.write("Gross Amount Payable (after Due Date) :" + " <b>" + afterDue + "</b>" + "<br / >")




// Chapter # 35 to 38 functions



// function DateTime(){ 
//         document.write(new Date())
// }
// DateTime()


// function greet(a,b){
//        a = prompt("Enter First Name");
//        b = prompt("Enter Last Name");
//       return  a + " " +  b
      
// }
// alert("Hello" + " " + greet())




// function sum(c,d){
//         c = +prompt("Enter first value")
//         d = +prompt("Enter Last value")
//         return c+d
// }
// alert(sum())




// function calculator(val1,ope,val2){
//       val1 = +prompt("Enter first value")
//       ope = prompt("Enter operator")
//       val2 = +prompt("Enter Second value")
//     if(ope === "+"){
//             return val1 + val2
//     }
//     else if(ope === "-"){
//             return val1 - val2
//     }
//     else if(ope === "*"){
//             return val1 * val2
//     }
//     else if(ope === "/"){
//             return val1 / val2
//     }
//     else if(ope === "%"){
//             return val1 % val2
//     }
//     else{
//             return "Enter correct operator"
//     } 

// }

// alert(calculator())






// function square(a){
//       alert(a*a)
// }
// square(2)






// function factorial(n){
//         var h = 1
//         for(var i = 1; i <= n; i++){
//              h = h*i
//         }
//         return h
// }
// alert(factorial(5))





// function count(start,end){
//         start = prompt("Enter start number")
//         end = prompt("Enter end number")
//         for(var i = start; i <= end; i++){
//                 document.write(i + "<br />")
//         }
// }
// count()



// function area(width,height){
//         var A  = width * height
//         return A
// }
// var hei = 20
// var s = area(2,hei)
// alert("Area =" + " " + s)






// function pan(){
//         var inp = prompt("Enter word") 
//         var b = ""
//         for(var i = inp.length-1; i >= 0; i--){
//                 b += inp[i]
//         }
//         if(inp === b){
//                 alert("yes")
//         }
//         else{
//                 alert("no")
//         }
// }
// pan()



// var str = "anas khan tanoli";
// var arrstr = str.split(" ");
// var find = arrstr.sort((strA,strB) =>{ return strB.length - strA.length});

// alert(find[0])




// const toCapital = str => {
// const grape = str.split(" ")
//  return  grape.map(grape => grape[0].toUpperCase() + grape.slice(1).toLowerCase()).join(" ");
// }
// alert(toCapital("anas khan tanoi"));







// function identifier(string,letter){
//         var c = 0
//            for(var i = 0; i < string.length; i++){
//                    if(string[i] === letter){
//                         c = c + 1
//                    }
//            }
//            return c
// }
// var s = prompt("Enter string");
// var p = prompt("Enter word which is to be count")
// console.log(identifier(s,p))





// function calcCircumference(radius){
//         var circum = 2*3.142*radius;
//         return alert("The Circumference is :" + " " + circum)
// }
// calcCircumference(2);



// function calcArea(radius){
//         var area = 3.142 * ( radius*radius);
//         return alert("The calcArea is :" + " " + area)
// }
// calcArea(3)







// Chapter # 39 to 42




// function power(a,b){
//      var contain = 1;
//      for(var i=1; i <= b;i++){
//          contain = contain*a
//      }
  
//      alert("The answer is " + " " + contain)
// }
// var inp1 = prompt("Enter First value");
// var inp2 = prompt("Enter Second value");
// power(inp1,inp2)






// function leapYear(year){
//       if(year % 4 === 0){
//               alert("This is Leap Year")
//       }
//       else{
//               alert("This is not Leap Year")
//       }
// }
// var leap = +prompt("Enter yer to cheak the leap year");
// leapYear(leap)





// var firstVal = +prompt("Enter First Value");
// var SecondVal = +prompt("Enter Second Value");
// var ThirdVal = +prompt("Enter Third Value");
// function side(a,b,c){
//         var sideA = ( a + b + c ) / 2;
//         return sideA
// }
// var S = side(firstVal,SecondVal,ThirdVal);
// function area(sum,a,b,c){
//         var areaA = sum*(sum - a)*(sum - b)*(sum - c);
//         return areaA
// }
// alert(area(S,firstVal,SecondVal,ThirdVal));







// var a = +prompt("Enter the marks of first subject");
// var b = +prompt("Enter the marks of second subject");
// var c = +prompt("Enter the marks of third subject");
// var d = +prompt("Enter total marks in all subjects")
// function average(firstMarks,secondMarks,thirdMarks){
//        var avg = (firstMarks+secondMarks+thirdMarks)/3;
//        return avg
// }  
// function percentage(firstMarks,secondMarks,thirdMarks,totalMarks){
//        var per = (firstMarks+secondMarks+thirdMarks)*100/totalMarks;
//        return per
// }
// function mainFunc(){
//      alert("Average is" + " " + average(a,b,c));
//      alert("Percentage is" + " " + percentage(a,b,c,d))
// }
// mainFunc();






// var a = prompt("string")
// var b = prompt("Enter letter to check its index number")
// function checking(str,val){
//         for(var i = 0;i < str.length ; i++){
//                 if(str.slice(i,i+1) === val){
//                 alert("Index number : " + " " + i);
//                 }
//         }
// }
// checking(a,b)






// var sentence = prompt("Enter a sentence of less than 25 characters");
// function removeVow(a){
//         var c = ""
//         for(var i = 0; i < a.length; i++){
//                 if(a.slice(i,i+1) !== "a"  &&  a.slice(i,i+1) !== "e"  &&  a.slice(i,i+1) !== "i"  &&  a.slice(i,i+1) !== "o"  &&  a.slice(i,i+1) !== "u"  &&  a.slice(i,i+1) !== "A"  &&  a.slice(i,i+1) !== "E"  &&  a.slice(i,i+1) !== "I"  &&  a.slice(i,i+1) !== "O"  &&  a.slice(i,i+1) !== "U"){
//                         c += a[i]
//                 }
//         }

//  return c
// }
// alert(removeVow(sentence))






// function occurance(){
//         var para = prompt("enter para")
//         var count = 0
//         let haveSeenVowel = false

//         for(const letter of para.toLowerCase()){
//                 switch(letter){
//                         case "a":
//                         case "e":
//                         case "i": 
//                         case "o":
//                         case "u":
//                               {
//                                       if(haveSeenVowel){
//                                               count++
//                                               haveSeenVowel = false
//                                       }
//                                       else{
//                                            haveSeenVowel = true   
//                                       }
//                                       break;
//                               }  
//                         default:
//                                 haveSeenVowel = false      
//                 }
//         }
//         return count
// }
// document.write("The occurance of twice vowels is" + occurance())







// var distance = prompt("Enter distance in KiloMeters");
// function meters(inputM){
//        var m = inputM*1000 + " " + "Meters"
//        return m
// }
// function Feet(inputF){
//         var f = inputF*3281 + " " +  "Feet"
//         return f
//  }
//  function Inches(inputI){
//         var i = inputI*1000*39.3 + " " +  "Inches"
//         return i
//  }
//  function centiMeters(inputC){
//         var c = inputC*1000*100 + " " +  "CentiMeters"
//         return c
//  }
// alert(meters(distance))
// alert(Feet(distance))
// alert(Inches(distance))
// alert(centiMeters(distance))

