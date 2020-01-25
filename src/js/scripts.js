$(document).ready(function () {

    $('#btn-hide').click(function () {
        $('#div-hide').fadeToggle();
    });

    $('#someInput').keyup(function(event) {
        // console.log(event);
        // console.log(this);
        // console.log($(this));
        $('#div-hide').html($(this).val())
    });

    // let someData = {
    //     'test': 'test',
    //     key: 'value',
    //     otherKey: 'otherValue'
    // };
    // console.log(JSON.stringify(someData));
    //
    // someData.setProperty = 'value';
    // console.log(JSON.stringify(someData));
    //
    // someData['someOtherProperty'] = 'value';
    // console.log(JSON.stringify(someData));
    //
    // console.log(JSON.stringify(someData['test']));
    //
    //
    // let obj = {
    //     someVal: 'some str',
    //     test: function () {
    //         console.log(this.someVal);
    //     },
    //     toString: function () {
    //         return this.someVal;
    //     }
    // };
    // console.log(obj);
    // obj.test();
    //
    // let someVar;
    // console.log(someVar);
    //
    // console.log(Boolean(0));
    // console.log(Boolean(1));
    // console.log(Boolean(""));
    // console.log(Boolean("0"));
    // console.log(Boolean("1"));
    // console.log(Boolean([]));
    // console.log(Boolean({}));
    //
    //
    // function someFun(a, b, c) {
    //     console.log(`${a} ${b} ${c}`)
    // }
    //
    // someFun(1, 2, 3);
    // someFun('abc', 'cde', obj);
    // someFun('test', 'test');
    //
    //
    // let a1 = 1;
    // let a2 = '1';
    // console.log(a1 == a2);
    // console.log(a1 === a2);
});