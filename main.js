$(document).ready(function() {
// al click sul pulsante far partire una chiamata ajax a tmdb per recuperare i film che corrispondo alla query di ricerca inserita dall'utente.


    $.ajax({
        'url': 'https://api.themoviedb.org/3/search/movie',
        'method': 'GET',
        'data': {
            'api_key': '6807f8ca279b3a72a7b18a38904c3e42',
            'query': "ritorno al futuro",
            'language': 'it'
        },
        'success': function(data) {
            console.log(data);
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });
    });

    // https://api.themoviedb.org/3/search/movie?api_key=6807f8ca279b3a72a7b18a38904c3e42&query=ritorno+al+futuro
