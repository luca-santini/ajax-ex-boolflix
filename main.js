$(document).ready(function() {
    // recupero la struttura html del template di base
        var template_html = $('#card-template').html();
        // preparo la funzione da utilizzare per utilizzare il template
        var template_function = Handlebars.compile(template_html);
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
                        'titolo_originale': movie.original_title,
                        'lingua': movie.original_language,
                        // 'voto': movie.vote_average
                        'voto': stelline(normalizza_voto(movie.vote_average))
                    }

                    // tramite handlebars preparo l'html finale con i dati dello studente all'interno
                    var html_finale = template_function(dati_movies);

                    // appendo in pagina una card con i dati dello studente
                    $('#risultati').append(html_finale);
                } // ciclo for
            },
            'error': function() {
                alert('si è verificato un errore');
            }
        });
    });
    // funzione per trasformare il voto in numero intero da 1 a 5
    function normalizza_voto(voto) {
        var voto5 = voto / 2;
        return Math.ceil(voto5);
    }

    // funzione che restituisce le stelline piene e vuote in base al voto
    function stelline(numero_stelle) {
        // in totale ci devono essere 5 stelle:
        // (numero_stelle) piene e (5 - numero_stelle) vuote
        var tag_stelle = '';
        for (var i = 1; i <= 5; i++) {
            // devo aggiungere una stella piena o una stella vuota?
            if(i <= numero_stelle) {
                // stella piena
                tag_stelle += '<i class="fas fa-star"></i>';
            } else {
                // stella vuota
                tag_stelle += '<i class="far fa-star"></i>';
            }
        }
        return tag_stelle;
    }
});
