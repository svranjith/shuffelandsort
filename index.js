/* let foo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

const foo = [{
    value: 1,
    colorCode: '#6F98A8'
}, {
    value: 2,
    colorCode: '#72c3dc'
}, {
    value: 3,
    colorCode: '#333333'
}, {
    value: 4,
    colorCode: '#72c3dc'
}, {
    value: 5,
    colorCode: '#333333'
}, {
    value: 6,
    colorCode: '#BFBFBF'
}, {
    value: 7,
    colorCode: '#BFBFBF'
}, {
    value: 8,
    colorCode: '#72c3dc'
}, {
    value: 9,
    colorCode: '#333333'
}]

function commonFunction() {
    let element='';
    for (let i = 0; i < foo.length; i++) {
        element += '<div class="card" style="background-color : '+foo[i].colorCode+'">' + foo[i].value + '</div>';
    }
    document.getElementById('test').innerHTML = element;
}

function shuffel() {
    let shuffelLength = foo.length - 1;
    randomNumber = Math.floor(Math.random() * shuffelLength);
    let tmp = foo[shuffelLength];
    foo[shuffelLength] = foo[randomNumber];
    foo[randomNumber] = tmp;
    console.log('foo:', foo);
    document.getElementById('test').innerHTML = " ";
    return commonFunction();
}

function sorting() {
    for (let i = 0; i < foo.length; i++) {
        for (let j = 0; j < foo.length; j++) {
            if (foo[i].value < foo[j].value) {
                let tmp = foo[j].value;
                foo[j].value = foo[i].value;
                foo[i].value = tmp;
            }
        }
    }
    document.getElementById('test').innerHTML = " ";
    return commonFunction();

}
commonFunction()
