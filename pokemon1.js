$(document).ready(function(){
        var pokemonpics = "";

        for (var i = 1; i < 100; i++) {
            $("#pokemons").append('<img id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">')
        }

        $("#pokemons img").click(function(){
            var img = $(this).attr("src")
            
            $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function(res){

                var pokedexinfo = "";

                pokedexinfo += "<h1>" + res.name + "</h1>"
                pokedexinfo += "<img src='" + img + "'>"
                pokedexinfo += "<h2>" + 'Types' + "</h2>"
                
                for (var i = 0; i < res.types.length; i++) {
                    pokedexinfo += "<li>" + res.types[i].type.name + "</li>"
                }
    
                pokedexinfo += "<h2>" + 'Height' + "</h2>" + "<p>" + res.height + "</p>"
                pokedexinfo += "<h2>" + 'Weight' + "</h2>" + "<p>" + res.weight + "</p>"
                
                console.log(res)
                
                
                $('#pokedex').empty().append(pokedexinfo) 

            }, "json")
            
        })
        
        
        

    
});