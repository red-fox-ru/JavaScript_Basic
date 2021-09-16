var a = parseInt(prompt());
var b = parseInt(prompt());

if (a > 0 && b > 0){
    alert(a - b);
}
else if (a < 0 && b < 0){
    alert (a * b);
}
else if (a => 0 && b <= 0 || a <= 0 && b >= 0) {
    alert (a + b);
}