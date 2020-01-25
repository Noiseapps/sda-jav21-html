$(document).ready(function () {
    // $('#btn').click(function () {
    //     let inputString = $('#anInput').val();
    //     $('#div-1').html(inputString);
    // });
    // $('#btn').on('click', function () {});

    $("#anInput").keyup(function () {
        $('#div-1').html($(this).val());
    });

    $('#btn').click(function () {
        $('#div-1').fadeToggle(1000);
    });

    // $('#btn').click();

    $('#rotate').click(function() {
        $("#rotate").toggleClass('active');
    })

});