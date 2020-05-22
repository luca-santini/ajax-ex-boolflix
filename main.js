$(document).ready(function() {
// al click sul pulsante far partire una chiamata ajax a tmdb per recuperare i film che corrispondo alla query di ricerca inserita dall'utente.
$('#target').click(function() {
    alert("ok");
});
    $.ajax({
        'url': 'https://api.themoviedb.org/3/search/movie',
        'method': 'GET',
        'data': {
            'api': '6807f8ca279b3a72a7b18a38904c3e42',
            'query': 'ricerca',
            'language': 'it'
        },
        'success': function(riposta) {
            console.log(riposta);

        },
            'error': function() {
                alert('si è verificato un errore');
        }
    });

});
