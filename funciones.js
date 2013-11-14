
//Description: Funcion que controla que SOLO se ingrese numeros enteros, o decimales, o negativos enteros, o negativos decimales
//Author: Andres Aizaga

function validaNumeroDecimalNegativo(e, objetoActual, numerosDecimalesPermitidos) {
    var codigo;
    var caracter;

    if (window.event)
        codigo = e.keyCode;
    else if (e.which)
        codigo = e.which;

    if (codigo == 8 || codigo == 9 || codigo == undefined)
        return true;
    else {

        var seleccionInicial = 0, seleccionFinal = 0, textoAuxiliar = '';
        if (document.selection) {
            var textArea = objetoActual;
            var bm = document.selection.createRange().getBookmark();
            var sel = textArea.createTextRange();
            sel.moveToBookmark(bm);
            var sleft = textArea.createTextRange();
            sleft.collapse(true);
            sleft.setEndPoint("EndToStart", sel);
            seleccionInicial = sleft.text.length;
            seleccionFinal = sleft.text.length + sel.text.length;
            textoAuxiliar = objetoActual.value.substring(0, seleccionFinal);
        }
        else {
            seleccionInicial = objetoActual.selectionStart;
            seleccionFinal = objetoActual.selectionEnd;
            textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
        }

        if (codigo == 45 && textoAuxiliar == "") //aceptar el - solo si esta en la primera posicion
            return true;
        else {
            // aceptar el . solo si antes existe un numero y solo si ya no ha sido ingresado
            if (codigo == 46 && textoAuxiliar != "" && !isNaN(Number(objetoActual.value.substring(seleccionFinal - 1, seleccionFinal))) && textoAuxiliar.toString().indexOf(".") == -1)
                return true;
            else {
                caracter = String.fromCharCode(codigo);
                rx = /[^0-9]/;
                if (rx.test(caracter))
                    return false;
                else {
                    //si ya existe el . validar que solo acepte la cantidad de numeros decimales permitidos
                    if (textoAuxiliar.toString().indexOf(".") != -1) {
                        var decimalesIngresados = objetoActual.value.substring(textoAuxiliar.toString().indexOf("."), seleccionFinal);
                        if (decimalesIngresados.length > numerosDecimalesPermitidos)
                            return false;
                        else
                            return true;
                    }
                    return true;
                }
            }
        }
    }
}


//Descripcion: Funcion javascript para validar un numero decimal
//Autor:       epanchi
function validarDecimal(e, objetoActual) {
    var codigo;
    var caracter;
    var cantidadDecimales = 2;
    if (window.event)
        codigo = e.keyCode;
    else if (e.which)
        codigo = e.which;

    if (codigo == 8 || codigo == 9 || codigo == undefined)
        return true;

    caracter = String.fromCharCode(codigo);
    rx = /[^0-9.]/;
    if (rx.test(caracter))
        return false;

    var seleccionInicial = 0, seleccionFinal = 0, textoAuxiliar = '';
    if (document.selection) {
        var textArea = objetoActual;
        var bm = document.selection.createRange().getBookmark();
        var sel = textArea.createTextRange();
        sel.moveToBookmark(bm);
        var sleft = textArea.createTextRange();
        sleft.collapse(true);
        sleft.setEndPoint("EndToStart", sel);
        seleccionInicial = sleft.text.length;
        seleccionFinal = sleft.text.length + sel.text.length;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }
    else {
        seleccionInicial = objetoActual.selectionStart;
        seleccionFinal = objetoActual.selectionEnd;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }

    if (textoAuxiliar != "") {
        if (caracter == "." && textoAuxiliar.indexOf(".") == -1 && objetoActual.value.indexOf(".") != -1) {
            return false;
        }
        return true;
    }
    var posSeparadorDecimal = objetoActual.value.indexOf(".");
    var auxDecimales = objetoActual.value.substring(posSeparadorDecimal + 1, objetoActual.value.length);

    if (seleccionInicial != objetoActual.value.length) {
        if (posSeparadorDecimal == -1)
            return true;
        else if (seleccionInicial <= posSeparadorDecimal && caracter == '.')
            return false;
        else if (seleccionInicial <= posSeparadorDecimal && caracter != '.')
            return true;
        else if (auxDecimales.length < cantidadDecimales)
            return true;
        else
            return false;
    }

    if (posSeparadorDecimal != -1 && caracter == ".")
        return false;

    if (posSeparadorDecimal != -1 && auxDecimales.length == cantidadDecimales) {
        return false;
    }
    return true;
}

function validarSoloEntero(objetoActual) {
    if (isNaN(Number(objetoActual.value))) {
        return false;
    }
    else {
        return true;
    }

}

function validarCaracter(objetoActual) {
    if (objetoActual.value == '.' || isNaN(Number(objetoActual.value) || objetoActual.value=='/')) {
        objetoActual.value = 0;
    }
}

function checkMaxLen(txt, maxLen) {
    try {
        if (txt.value.length > (maxLen - 1)) {
            var cont = txt.value;
            txt.value = cont.substring(0, (maxLen - 1));
            return false;
        }
    } catch (e) {
    }
}


function validarDecimal4(e, objetoActual) {
    var codigo;
    var caracter;
    var cantidadDecimales = 4;
    if (window.event)
        codigo = e.keyCode;
    else if (e.which)
        codigo = e.which;

    if (codigo == 8 || codigo == 9 || codigo == undefined)
        return true;

    caracter = String.fromCharCode(codigo);
    rx = /[^0-9.]/;
    if (rx.test(caracter))
        return false;

    var seleccionInicial = 0, seleccionFinal = 0, textoAuxiliar = '';
    if (document.selection) {
        var textArea = objetoActual;
        var bm = document.selection.createRange().getBookmark();
        var sel = textArea.createTextRange();
        sel.moveToBookmark(bm);
        var sleft = textArea.createTextRange();
        sleft.collapse(true);
        sleft.setEndPoint("EndToStart", sel);
        seleccionInicial = sleft.text.length;
        seleccionFinal = sleft.text.length + sel.text.length;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }
    else {
        seleccionInicial = objetoActual.selectionStart;
        seleccionFinal = objetoActual.selectionEnd;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }

    if (textoAuxiliar != "") {
        if (caracter == "." && textoAuxiliar.indexOf(".") == -1 && objetoActual.value.indexOf(".") != -1) {
            return false;
        }
        return true;
    }
    var posSeparadorDecimal = objetoActual.value.indexOf(".");
    var auxDecimales = objetoActual.value.substring(posSeparadorDecimal + 1, objetoActual.value.length);

    if (seleccionInicial != objetoActual.value.length) {
        if (posSeparadorDecimal == -1)
            return true;
        else if (seleccionInicial <= posSeparadorDecimal && caracter == '.')
            return false;
        else if (seleccionInicial <= posSeparadorDecimal && caracter != '.')
            return true;
        else if (auxDecimales.length < cantidadDecimales)
            return true;
        else
            return false;
    }

    if (posSeparadorDecimal != -1 && caracter == ".")
        return false;

    if (posSeparadorDecimal != -1 && auxDecimales.length == cantidadDecimales) {
        return false;
    }
    return true;
}

function validarDecimal14(e, objetoActual) {
    var codigo;
    var caracter;
    var cantidadDecimales = 14;
    if (window.event)
        codigo = e.keyCode;
    else if (e.which)
        codigo = e.which;

    if (codigo == 8 || codigo == 9 || codigo == undefined)
        return true;

    caracter = String.fromCharCode(codigo);
    rx = /[^0-9.]/;
    if (rx.test(caracter))
        return false;

    var seleccionInicial = 0, seleccionFinal = 0, textoAuxiliar = '';
    if (document.selection) {
        var textArea = objetoActual;
        var bm = document.selection.createRange().getBookmark();
        var sel = textArea.createTextRange();
        sel.moveToBookmark(bm);
        var sleft = textArea.createTextRange();
        sleft.collapse(true);
        sleft.setEndPoint("EndToStart", sel);
        seleccionInicial = sleft.text.length;
        seleccionFinal = sleft.text.length + sel.text.length;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }
    else {
        seleccionInicial = objetoActual.selectionStart;
        seleccionFinal = objetoActual.selectionEnd;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }

    if (textoAuxiliar != "") {
        if (caracter == "." && textoAuxiliar.indexOf(".") == -1 && objetoActual.value.indexOf(".") != -1) {
            return false;
        }
        return true;
    }
    var posSeparadorDecimal = objetoActual.value.indexOf(".");
    var auxDecimales = objetoActual.value.substring(posSeparadorDecimal + 1, objetoActual.value.length);

    if (seleccionInicial != objetoActual.value.length) {
        if (posSeparadorDecimal == -1)
            return true;
        else if (seleccionInicial <= posSeparadorDecimal && caracter == '.')
            return false;
        else if (seleccionInicial <= posSeparadorDecimal && caracter != '.')
            return true;
        else if (auxDecimales.length < cantidadDecimales)
            return true;
        else
            return false;
    }

    if (posSeparadorDecimal != -1 && caracter == ".")
        return false;

    if (posSeparadorDecimal != -1 && auxDecimales.length == cantidadDecimales) {
        return false;
    }
    return true;
}

function clickOnce(btn, msg) {
    // Comprobamos si se está haciendo una validación
    if (typeof (Page_ClientValidate) == 'function') {
        // Si se está haciendo una validación, volver si ésta da resultado false
        if (Page_ClientValidate() == false) { return false; }
    }

    // Asegurarse de que el botón sea del tipo button, nunca del tipo submit
    if (btn.getAttribute('type') == 'button') {
        // El atributo msg es totalmente opcional. 
        // Será el texto que muestre el botón mientras esté deshabilitado
        if (!msg || (msg = 'undefined')) { msg = 'Loading...'; }

        btn.value = msg;

        // La magia verdadera :D
        btn.disabled = true;
    }

    return true;
}



//Descripcion: Funcion javascript para validar un numero decimal
//Autor:       epanchi
function validarDecimal12(e, objetoActual) {
    var codigo;
    var caracter;
    var cantidadDecimales = 12;
    if (window.event)
        codigo = e.keyCode;
    else if (e.which)
        codigo = e.which;

    if (codigo == 8 || codigo == 9 || codigo == undefined)
        return true;

    caracter = String.fromCharCode(codigo);
    rx = /[^0-9.]/;
    if (rx.test(caracter))
        return false;

    var seleccionInicial = 0, seleccionFinal = 0, textoAuxiliar = '';
    if (document.selection) {
        var textArea = objetoActual;
        var bm = document.selection.createRange().getBookmark();
        var sel = textArea.createTextRange();
        sel.moveToBookmark(bm);
        var sleft = textArea.createTextRange();
        sleft.collapse(true);
        sleft.setEndPoint("EndToStart", sel);
        seleccionInicial = sleft.text.length;
        seleccionFinal = sleft.text.length + sel.text.length;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }
    else {
        seleccionInicial = objetoActual.selectionStart;
        seleccionFinal = objetoActual.selectionEnd;
        textoAuxiliar = objetoActual.value.substring(seleccionInicial, seleccionFinal);
    }

    if (textoAuxiliar != "") {
        if (caracter == "." && textoAuxiliar.indexOf(".") == -1 && objetoActual.value.indexOf(".") != -1) {
            return false;
        }
        return true;
    }
    var posSeparadorDecimal = objetoActual.value.indexOf(".");
    var auxDecimales = objetoActual.value.substring(posSeparadorDecimal + 1, objetoActual.value.length);

    if (seleccionInicial != objetoActual.value.length) {
        if (posSeparadorDecimal == -1)
            return true;
        else if (seleccionInicial <= posSeparadorDecimal && caracter == '.')
            return false;
        else if (seleccionInicial <= posSeparadorDecimal && caracter != '.')
            return true;
        else if (auxDecimales.length < cantidadDecimales)
            return true;
        else
            return false;
    }

    if (posSeparadorDecimal != -1 && caracter == ".")
        return false;

    if (posSeparadorDecimal != -1 && auxDecimales.length == cantidadDecimales) {
        return false;
    }
    return true;
}

function validarCaracter(objetoActual) {
    if (objetoActual.value == '.' || isNaN(Number(objetoActual.value))) {
        objetoActual.value = 0;
    }
}

function ObtenerSubTotal(txtCtrlId, lblTotal, btnAceptar) {
    var texto = "_txtPesoGrilla";
    var strExpresionId = txtCtrlId.substring(0, txtCtrlId.length - texto.length - 2);
    var i = 2;
    var cantidad = 0;
    var total = 0;
    var txtAux = document.getElementById(strExpresionId + i.toString().padLeft(2, '0') + texto);
    while (txtAux != null) {
        cantidad = Number(txtAux.value);

        if (isNaN(cantidad) == false) {
            total += cantidad;
        }
        i = i + 1;
        var a = new String();

        txtAux = document.getElementById(strExpresionId + i.toString().padLeft(2, '0') + texto);
    }

    document.getElementById(lblTotal).innerText = Number(total).toFixed(4).toString(); ;
    //alert((i < 10 ? strExpresionId : strExpresionIdAux) + i + texto);
    var control = document.getElementById(btnAceptar);
    if (control.style.visibility == "visible" || control.style.visibility == "")
        control.style.visibility = "hidden";
    else {
        control.style.visibility = "visible";
    }



    if (Number(total).toFixed(4) != 1) {
        control.style.visibility = "hidden";
        document.getElementById(lblTotal).style.color = "red";
    }
    else {
        control.style.visibility = "visible";
        document.getElementById(lblTotal).style.color = "black";
    }
}

String.prototype.padLeft = function (n, pad) {
    t = '';
    if (n > this.length) {
        for (i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t + this;
}
String.prototype.padRight = function (n, pad) {
    t = this;
    if (n > this.length) {
        for (i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t;
}

function InactivarBoton(lblTotal, btnAceptar) {
    document.getElementById(lblTotal).innerText = Number(total).toFixed(4).toString(); ;
    //alert((i < 10 ? strExpresionId : strExpresionIdAux) + i + texto);
    var control = document.getElementById(btnAceptar);
    if (control.style.visibility == "visible" || control.style.visibility == "")
        control.style.visibility = "hidden";
    else {
        control.style.visibility = "visible";
    }



    if (Number(total).toFixed(4) != 1) {
        control.style.visibility = "hidden";
        document.getElementById(lblTotal).style.color = "red";
    }
    else {
        control.style.visibility = "visible";
        document.getElementById(lblTotal).style.color = "black";
    }
}
//Validar fechas
//function CompararFechas(strFechaInicial, strFechaFinal) {
//    var fechaInicial = CrearFecha(strFechaInicial);
//    var fechaFinal = CrearFecha(strFechaFinal);

//    if (fechaInicial == null) {
//        alert("Ingrese una fecha inicial valida");
//        return false;
//    }
//    else if (fechaFinal == null) {
//        alert("Ingrese una fecha final valida");
//        return false;
//    }

//    if (fechaFinal < fechaInicial) {
//        alert("La fecha inicial debe ser menor a la fecha final");
//        return false;
//    }

//    return true;
//}

var valorAnteriorFechaInicio = '';
var valorAnteriorFechaFin = '';

function CompararFechas(idFechaInicial, idFechaFinal, lblFechaInicial, lblFechaFinal) {
    var txtFechaInicial = document.getElementById(idFechaInicial);
    var txtFechaFinal = document.getElementById(idFechaFinal);

    if (txtFechaInicial.value == '' || txtFechaFinal.value == '') {
        //alert("Ingrese una " + lblFechaInicial + " valida");
        //txtFechaInicial.focus();
        return;
    }

    if (valorAnteriorFechaInicio == txtFechaInicial.value && valorAnteriorFechaFin == txtFechaFinal.value) {
        return;
    }

    valorAnteriorFechaInicio = txtFechaInicial.value;
    valorAnteriorFechaFin = txtFechaFinal.value;

    var fechaInicial = CrearFecha(txtFechaInicial.value);
    var fechaFinal = CrearFecha(txtFechaFinal.value);

    if (fechaInicial == null) {
        alert("Ingrese una " + lblFechaInicial + " valida");
        txtFechaInicial.focus();
        return;
    }
    else if (fechaFinal == null) {
        alert("Ingrese una " + lblFechaFinal + " valida");
        txtFechaFinal.focus();
        return;
    }

    if (fechaFinal <= fechaInicial) {
        txtFechaFinal.value = '';
        alert("La " + lblFechaInicial + " debe ser menor a la " + lblFechaFinal);
        //txtFechaInicial.focus();
    }
}

function CrearFecha(strFecha) {
    var fecha = new String(strFecha);
    var anio = fecha.substr(0, 4);
    var mes = fecha.substr(5, 2);
    var dia = fecha.substr(8, 2);
    if (isNaN(anio) || anio.length < 4 || parseFloat(anio) < 1900) {
        return null;
    }
    else if (mes == '' || isNaN(mes) || parseFloat(mes) < 1 || parseFloat(mes) > 12) {
        return null;
    }
    else if (dia == '' || isNaN(dia) || parseInt(dia, 10) < 1 || parseInt(dia, 10) > 31) {
        return null;
    }

    if (mes == 4 || mes == 6 || mes == 9 || mes == 11 || mes == 2) {
        if (mes == 2 && dia > 28 || dia > 30) {
            return null;
        }
    }

    return new Date(anio, mes, dia);
}

//Código para colocar 
//los indicadores de miles mientras se escribe
//Diego Núñez
function ColocarSeparadorDeMiles(donde, caracter) {
    pat = /[\*,\+,\(,\),\?,\,$,\[,\],\^]/
    valor = donde.value
    largo = valor.length
    crtr = true
    if (isNaN(caracter) || pat.test(caracter) == true) {
        if (pat.test(caracter) == true) {
            caracter = "\\" + caracter
        }
        carcter = new RegExp(caracter, "g")
        valor = valor.replace(carcter, "")
        donde.value = valor
        crtr = false
    }
    else {
        var nums = new Array()
        cont = 0
        for (m = 0; m < largo; m++) {
            if (valor.charAt(m) == "." || valor.charAt(m) == " ")
            { continue; }
            else {
                nums[cont] = valor.charAt(m)
                cont++
            }
        }
    }
    var cad1 = "", cad2 = "", tres = 0
    if (largo > 3 && crtr == true) {
        for (k = nums.length - 1; k >= 0; k--) {
            cad1 = nums[k]
            cad2 = cad1 + cad2
            tres++
            if ((tres % 3) == 0) {
                if (k != 0) {
                    cad2 = "," + cad2
                }
            }
        }
        donde.value = cad2
    }
}



function invFecha(nTipFormat, dFecIni) {
    var dFecIni = dFecIni.replace(/-/g, "/");                    // reemplaza el - por /   

    // primera division fecha  
    var nPosUno = ponCero(dFecIni.substr(0, dFecIni.indexOf("/")));
    // 2º divicion fecha  
    var nPosDos = ponCero(dFecIni.substr(parseInt(dFecIni.indexOf("/")) + 1, parseInt(dFecIni.lastIndexOf("/")) - parseInt(dFecIni.indexOf("/")) - 1));
    // 3º divicion fecha  
    var nPosTres = ponCero(dFecIni.substr(parseInt(dFecIni.lastIndexOf("/")) + 1));

    switch (nTipFormat) {
        case 1:    //  DD/MM/YYYY  
            dReturnFecha = nPosTres + "" + nPosDos + "" + nPosUno;
            break;

        case 2:    //  MM/DD/YYYY  
            dReturnFecha = nPosTres + "" + nPosUno + "" + nPosDos;
            break;

        case 3:    //  YYYY/MM/DD  
            dReturnFecha = nPosUno + "" + nPosDos + "" + nPosTres;
            break;

        case 4:    //  YYYY/DD/MM  
            dReturnFecha = nPosUno + "" + nPosTres + "" + nPosDos;
            break;
    }

    return dReturnFecha;    // retorna la fecha       
}

// Agrega un cero delante del strPon cuando tenga solo un caracter  
function ponCero(strPon) {
    if (parseInt(strPon.length) < 2)
        strPon = "0" + strPon;
    return strPon;
}

//*******************************************************************************  
// valida que la fecha dFecMenor es menor o igual a  dFecMayor  
// los parametros dFecMenor, dFecMayor son fecha con divisores validos "-" o "/"  
// el parametro dFormat es el tipo de formato en que viene la fecha   
//               1 = DD/MM/YYYY   
//               2 = MM/DD/YYYY   
//               3 = YYYY/MM/DD  
//               4 = YYYY/DD/MM  

function comparaFecha(dFormat, dFecMenor, dFecMayor) {
    dFecMenor = invFecha(dFormat, dFecMenor);
    dFecMayor = invFecha(dFormat, dFecMayor);

    if (dFecMenor > dFecMayor)
        return false;
    else
        return true;
}



function validateFechaActual(object) {

    if (object.value != '') {
        today = new Date();

        var dFechaMenor = object.value;

        var formato = 1;

        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();

        var dFechaMayor = day + "/" + month + "/" + year;

        //if (dFechaMenor == fechaAnterior) {
        //    return;
        //}
        //fechaAnterior = dFechaMenor;

        if (comparaFecha(formato, dFechaMenor, dFechaMayor) == false) {
            alert("Error. La fecha es mayor a la fecha Actual.");
            object.value = '';
        }

    }
}

function checkFileExtension(elem) {
    var filePath = elem.value;

    if (filePath.indexOf('.') == -1)
        return false;

    var validExtensions = new Array();
    var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();

    validExtensions[0] = 'jpg';
    validExtensions[1] = 'jpeg';

    for (var i = 0; i < validExtensions.length; i++) {
        if (ext == validExtensions[i])
            return true;
    }

    alert('No puede ingresar archivos de tipo ' + ext.toUpperCase() + '. Solo se permite JPG');
    return false;
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46, 32];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;

}
function limpia(object) {
    var val = object.value;
    var tam = val.length;
    for (i = 0; i < tam; i++) {
        if (!isNaN(val[i]) || val[i] == ".")
            if(val[i] != " ")
                object.value = '';
    }
}

