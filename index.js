/* let foo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

const foo = [{
    value: 1,
    colorCode: '#6f98a8'
}, {
    value: 2,
    colorCode: '#2b8ead'
}, {
    value: 3,
    colorCode: '#2f454e'
}, {
    value: 4,
    colorCode: '#2b8ead'
}, {
    value: 5,
    colorCode: '#2f454e'
}, {
    value: 6,
    colorCode: '#bfbfbf'
}, {
    value: 7,
    colorCode: '#bfbfbf'
}, {
    value: 8,
    colorCode: '#6f98a8'
}, {
    value: 9,
    colorCode: '#2f454e'
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
    foo.sort((a,b) =>  a.value - b.value)
  return commonFunction();
}
commonFunction()
