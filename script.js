var x = "New stuff";


document.getElementById('something').onclick = function(){
    alert(x);
    document.getElementById('para').innerHTML = 'Other new stuff';
}

////////////////////////////////////////////////////////

document.getElementById('change').onclick = function(){
    var entered = '';
    entered = document.getElementById('textInput').value;

    document.getElementById('newStuff').innerHTML = entered;
}