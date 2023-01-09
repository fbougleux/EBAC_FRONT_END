$(document).ready(function(){
    //conteudo js
    $("form").on("submit", function(e){
        e.preventDefault();
        const novaTarefa = $("#inputTarefa").val()

        $("ul").append(`<li>${novaTarefa}</li>`)
        $("#inputTarefa").val("")

        //$("li").css("text-decoration", "line-through")
    })
})