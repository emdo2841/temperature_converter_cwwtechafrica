let celsius =  
document.getElementById('celsius'); 
let fahrenheit =  
document.getElementById('fahrenheit'); 
let kelvin =  
document.getElementById('kelvin'); 

celsius.oninput = function () {
    let f = parseFloat(celsius.value) * 1.8 + 32;
    fahrenheit.value = parseFloat (f.toFixed(2));
    let k = parseFloat(celsius.value) + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}
fahrenheit.oninput = function () {
    let c =  (parseFloat(fahrenheit.value) - 32) / 1.8;
    celsius.value = parseFloat(c.toFixed(2));
    let k = (parseFloat(fahrenheit.value) + 459.67) * 5 / 9;
    kelvin.value = parseFloat(k.toFixed(2));
}
kelvin.oninput = function () { 
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32; 
    fahrenheit.value = parseFloat(f.toFixed(2)); 
    let c = (parseFloat(kelvin.value) - 273.15); 
    celsius.value = parseFloat(c.toFixed(2)); 
} 
function validateForm(){
    let name = document.forms["form1"];
        if (name.name.value == ""){
            alert("please input your name");
            return false
        } else if(name.email.value == ""){
            alert("please input your Email");
            return false
        } else if (name.message.value == "") {
            alert("please write your message");
            return false
            
        } else {
            alert("thanks for your feedback and reaching out to us... we'll get back to you  soon");
            
        }
    }
 