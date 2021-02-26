// INPUT PLAQUE d'IMMATRICULATION

$('#numero').on('input', () => {
    $.ajax({
        url: "answer.php",
        data: {
            numero: $('#numero').val()
        },
        type: "POST",
        dataType: "Text"
    })

        .done(function (texte) {
            if ($('#numero').val().length != 0) {
                $('.label1').text(texte);
                if (texte == 'Format non valide') {
                    $('#numero').css('background-color', 'salmon')
                    $('.label1').css('color', 'salmon')
                } else {
                    $('#numero').css('background-color', 'aquamarine')
                    $('.label1').css('color', 'aquamarine')
                }
            } else {
                $('.label1').text('');
                $('#numero').css('background-color', 'white')
            }
        })
})

// INPUT EMAIL

$('#email').on('input', () => {
    $.ajax({
        url: "answer.php",
        data: {
            email: $('#email').val()
        },
        type: "POST",
        dataType: "Text"
    })

        .done(function (texte) {
            if ($('#email').val().length != 0) {
                $('.label2').text(texte);
                if (texte == 'Format non valide') {
                    $('#email').css('background-color', 'salmon')
                    $('.label2').css('color', 'salmon')
                } else {
                    $('#email').css('background-color', 'aquamarine')
                    $('.label2').css('color', 'aquamarine')
                }
            } else {
                $('.label2').text('');
                $('#email').css('background-color', 'white')
            }
        })
})