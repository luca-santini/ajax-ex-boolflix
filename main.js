$(document).ready(function() {
// al click sul pulsante far partire una chiamata ajax a tmdb per recuperare i film che corrispondo alla query di ricerca inserita dall'utente.

// https://api.themoviedb.org/3/search/movie?api_key=6807f8ca279b3a72a7b18a38904c3e42&query=ritorno+al+futuro
    $.ajax({
        'url': 'https://api.themoviedb.org/3/search/movie',
        'method': 'GET',
        'data': {
            'api_key': '6807f8ca279b3a72a7b18a38904c3e42',
            'query': "ritorno al futuro",
            'language': 'it'
        },
        'success': function(data) {
            var movies = data.results;
            for (var i = 0; i < movies.length; i++) {
            var movie = movie[i];
            console.log(movie);

            var dati_movies = {
                'titolo': movie.title,
                'titolo originale': movie.original_title,
                'lingua': movie.original_language,
                'voto': movie.vote_average
            }
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });
    });
