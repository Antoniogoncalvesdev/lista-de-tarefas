function adicionarTarefa() {
    let entradaTexto = document.getElementById('entradaTexto').value;
    let lista = document.getElementById('lista').innerHTML;

    lista += "<li>" +entradaTexto+ "</li>"

    document.getElementById('lista').innerHTML = lista;

    document.getElementById('entradaTexto').value = null;
}
function deletarTarefa(num) {
    let lista = document.getElementById('lista');
    lista.removeChild(lista.childNodes[num])
}