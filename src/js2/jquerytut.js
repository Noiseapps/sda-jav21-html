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

    $('#rotate').click(function () {
        $("#rotate").toggleClass('active');
    });

    let someObj = {
        param1: 'test',
        'param2': 'test',
        param3: function () {
            console.log('param3')
        }
    };
    console.log(someObj);

    someObj.param4 = 'someValue';
    console.log(someObj);

    someObj['param5'] = function (test) {
        console.log(test)
    };
    console.log(someObj);

    let jsonObj = {
        'key1': 'Value',
        'key2': true,
        'key3': 123
    };
    let jsonStr = JSON.stringify(jsonObj);
    console.log(jsonStr);

    let jsonObjFromString = JSON.parse(jsonStr);
    console.log(jsonObjFromString);

    console.log(jsonObj.key1);
    console.log(jsonObj['key1']);

    $.ajax({
        'url': 'https://postman-echo.com/get?foo1=bar1&foo2=bar2',
        'method': 'get',
        success: function(body) {
            console.log(body);
        }
    });

});