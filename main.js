$(document).ready(function() {
    $('button').click(function() {
        var search = $('#search').val();
        $.ajax({
            'url': 'https://api.themoviedb.org/3/search/movie',
            'method': 'GET',
            'data': {
                'api_key': '6807f8ca279b3a72a7b18a38904c3e42',
                'query': search,
                'language': 'it'
            },
            'success': function(data) {
                var movies = data.results;

                for (var i = 0; i < movies.length; i++) {
                    var movie = movies[i];
                    // Ciclare i risultati e per ogni film restituito, stampando in pagina titolo, titolo originale, lingua, voto
                    var dati_movies = {
                        'titolo': movie.title,
                        'titolo originale': movie.original_title,
                        'lingua': movie.original_language,
                        'voto': movie.vote_average
                    }
                    console.log(dati_movies);
                } // ciclo for
            },
            'error': function() {
                alert('si è verificato un errore');
            }
        });
    });
});
