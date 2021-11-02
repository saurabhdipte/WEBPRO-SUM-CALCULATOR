function add(){
    event.preventDefault();
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    
    document.getElementById("ans").value=a+b;
    document.getElementById("answer").style.display="block";
}