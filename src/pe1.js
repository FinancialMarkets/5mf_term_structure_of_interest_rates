function myJsFunction()
{
    var y1 = parseFloat(document.getElementById('input1').value);
    var y2 = parseFloat(document.getElementById('input2').value);
    var forward_rate = ((1 + y2) * (1 + y2)) / (1 + y1) - 1;
    document.getElementById("out1").innerHTML = forward_rate.toFixed(2);
}
