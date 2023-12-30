
var height = document.querySelector('.input-box .height')
var weight = document.querySelector('.input-box .weight')
var submitBtn = document.querySelector('.btns .submit')
var cleartBtn = document.querySelector('.btns .clear')
var result = document.querySelector('.result')
var level = document.querySelector('.level')
// console.log(level);

submitBtn.addEventListener('click', function () {
    var myHeight = height.value;
    var myWeight = weight.value;
    var calcHeight = myHeight / 100;
    var bmi = myWeight / (calcHeight * calcHeight);
    console.log(myHeight);

    result.innerHTML = Math.floor(bmi);
    result.value = Math.floor(bmi);

    if (myHeight > 210) {
        alert('身高不能大於210');
    } else if (myHeight <= 0) {
        alert('身高不能小於0或為負數');
    } else if (myWeight > 500) {
        alert('體重不能大於500，特殊疾病例外!');
    } else if (myWeight <= 0) {
        alert('體重不能小於0或為負數');
    } else {

        if (bmi <= 18.5) {
            level.innerHTML = '「體重過輕」';
        } else if (bmi < 24) {
            level.innerHTML = '「正常範圍」';
        } else if (bmi < 27) {
            level.innerHTML = '「過重」';
        } else if (bmi < 30) {
            level.innerHTML = '「輕度肥胖」';
        } else if (bmi < 35) {
            level.innerHTML = '「中度肥胖」';
        } else if (bmi >= 35) {
            level.innerHTML = '「重度肥胖」';
        }
        level.style.opacity = 1;
    }
});

cleartBtn.addEventListener('click', function () {
    height.value = '';
    weight.value = '';
    result.innerHTML = '';
    level.innerHTML = '';
});

