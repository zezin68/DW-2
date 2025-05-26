function buscarISBN(){
    const isbn = document.getElementById("isbn").value;
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`;
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.erro) {
                alert("ISBN não encontrado.");
                document.getElementById("isbn").value = "";
                document.getElementById("autor").value = "";
                document.getElementById("titulo").value = "";
                document.getElementById("ano").value = "";
                return;
            }
    
            document.getElementById("isbn").value = data.isbn;
            document.getElementById("autor").value = data.authors.join("\n");
            ajustarAltura(document.getElementById("autor"))
            document.getElementById("titulo").value = data.title;
            document.getElementById("ano").value = data.year;
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao buscar o ISBN. Tente novamente mais tarde.");
        });
}

function ajustarAltura(elemento) {
  elemento.style.height = 'auto'; // resetar altura
  elemento.style.height = (elemento.scrollHeight) + 'px'; // definir nova altura
}
document.getElementById("isbn").value = "";
document.getElementById("autor").value = "";
document.getElementById("titulo").value = "";
document.getElementById("ano").value = "";  