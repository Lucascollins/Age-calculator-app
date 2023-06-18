"use strict"

 
//INPUTS
var btn = document.querySelector("button")
var INPUTS = document.querySelectorAll('input')
var error = document.querySelectorAll('.error')


var inputDD = document.getElementById("DD")
var inputMM = document.getElementById("MM")
var inputYY = document.getElementById("YY")

var d1 = document.getElementById("inputDD").value
var m1 = document.getElementById("inputMM").value
var y1 = document.getElementById("inputYY").value



function age(){
    var d1 = document.getElementById("inputDD").value
    var m1 = document.getElementById("inputMM").value
    var y1 = document.getElementById("inputYY").value

    //LOGIC OPERATIONS TIME
    let todayDATE = new Date()
    let d2 = todayDATE.getDate()
    let m2 = todayDATE.getMonth() + 1;
    let y2 = todayDATE.getFullYear()

    var month = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(d1 > d2){
        d2 = d2 + month[m2-1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    
    var d = d2 - d1;
    var m = m2 - m1
    var y = y2 - y1

    inputDD.innerText = d
    inputMM.innerText = m
    inputYY.innerText = y


}

var head = document.querySelectorAll("#head")

btn.addEventListener('click',()=>{ 
        for (let i = 0; i < INPUTS.length; i++) {
             var inputs = INPUTS[i]
             var error_message = error[i]
            if(inputs.value ==""){
                error_message.innerHTML="This field is require"
                error_message.style.color = 'red'
                head[i].style.color="red"
            }
            else if (d1 >= 32 ||  m1>= 13){
                error_message.innerHTML ="Must be a invalid Date"
                error_message.style.color = 'red'
                head[i].style.color="red"
            }
            else{
                error_message.style.color = 'black'
                head[i].style.color="black"
                error_message.innerHTML = ""
                age() 
            }

            
        }
})            


