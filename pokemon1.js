$(document).ready(function(){
        var pokemonpics = "";

        for (var i = 1; i < 300; i++) {
            $("#pokemons").append('<img id="' + i + '" src="https://pokeapi.co/media/img/' + i + '.png">')
        }


        $(document).on('click', '#pokemons img', function (){

            var img = $(this).attr('src')
       
            $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr('id') + "/",function(res){
                
            var pokedexinfo = "";
            pokedexinfo += "<h1>" + res.name + "</h1>"
            pokedexinfo += "<img src='" + img + "'>"
            pokedexinfo += "<h2>" + 'Types' + "</h2>"
            
            for (var i = 0; i < res.types.length; i++) {
                pokedexinfo += "<ul><li>" + res.types[i].type.name + "</li></ul>"
            }
            pokedexinfo += "<h2>" + 'Height' + "</h2>" + "<p>" + res.height + "</p>"
            pokedexinfo += "<h2>" + 'Weight' + "</h2>" + "<p>" + res.weight + "</p>"
            
            console.log(res)
            
            $('#pokedex').empty().append(pokedexinfo)
            
            }, "json");
        })       
    
});