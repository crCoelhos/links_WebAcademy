// Cria uma lista nova
function novoLink() {
    var a = document.createElement("a");
    var li = document.createElement("li");
    var inputValue = document.getElementById("entrada").value;
    var t = document.createTextNode(inputValue);
    a.appendChild(t) //a gerado com o link
    li.appendChild(a); //link linkado no item da lista
    a.href = 'https://' + inputValue //mudar o href do elemento
    a.target= "_blank" //propriedade para abrir o link em uma nova aba


    if (inputValue === '') { //validar se ta vazio ou não de forma porca
        document.getElementById('entrada').style['background'] = 'red'; //tem que fazer isso resetar assim que o elemento for inserido/ação for corrigida
        // alert("entrada invalida ou em branco");
    } else {
        a.value = 'https://' + li.value
        document.getElementById("novaUL").appendChild(li);
    }
    document.querySelector('a').style['text-decoration'] = 'none';
    document.getElementById("entrada").value = "";

    var span = document.createElement("span");
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