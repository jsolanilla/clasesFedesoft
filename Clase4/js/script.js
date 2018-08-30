function suma() {
    var var1 = document.getElementById("nro1").value;
    var var2 = document.getElementById("nro2").value;
    var rst = parseInt(var1) + parseInt(var2);
    document.getElementById("resultado").value = rst;
}

function resta() {
    var var1 = document.getElementById("nro1").value;
    var var2 = document.getElementById("nro2").value;
    var rst = parseInt(var1) - parseInt(var2);
    document.getElementById("resultado").value = rst;
}

function mult() {
    var var1 = document.getElementById("nro1").value;
    var var2 = document.getElementById("nro2").value;
    var rst = parseInt(var1) * parseInt(var2);
    document.getElementById("resultado").value = rst;
}

function div() {
    var var1 = document.getElementById("nro1").value;
    var var2 = document.getElementById("nro2").value;
    if (parseInt(var2) > 0) {
        var rst = parseInt(var1) / parseInt(var2);
    } else {
        var rst = "no puede dividir por 0";
    }
    document.getElementById("resultado").value = rst;
}

function numero() {
    var nro = document.getElementsByClassName("numero").value;
    alert(nro);
    //document.getElementById("resultado").value = rst;
}