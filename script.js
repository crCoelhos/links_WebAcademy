// Cria uma lista nova
function novoLink() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("entrada").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') { //validar se ta vazio ou não de forma porca
        document.getElementById('entrada').style['background'] = 'red'; //tem que fazer isso resetar assim que o elemento for inserido/ação for corrigida
        // alert("entrada invalida ou em branco");
    } else {
        document.getElementById("novaUL").appendChild(li);
    }
    document.getElementById("entrada").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}



// linka o botão de excluir na lista
var btnLink = document.getElementsByTagName("LI");
var i;
for (i = 0; i < btnLink.length; i++) {
    var span = document.createElement("SPAN");
    var texto = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(texto);
    btnLink[i].appendChild(span);
}

// adiciona funcionalidade ao botão remove um item da lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}