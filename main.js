$(document).ready(function(){
    //conteudo js
    $("form").on("submit", function(e){
        e.preventDefault();
        const novaTarefa = $("#inputTarefa").val()
        console.log(`${novaTarefa}`)
    })
})