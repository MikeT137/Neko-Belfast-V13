module.exports = {
    calculator: function(num1, operator, num2){
        if(type == '*') return num1*num2;
        if(type == '+') return num1+num2;
        if(type == '-') return num1-num2;
        if(type == '/') return num2/num1;
        if(type == '^') return num1^num2;
    }
}