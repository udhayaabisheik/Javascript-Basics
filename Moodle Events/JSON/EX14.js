function gen(){
    var n = document.getElementById("name").value;
    var date = document.getElementById("dob").value;
    var first = n.slice(0,4);
    var d = new Date(date);
    var last = d.getDate();
    var comb = first + last;
    document.getElementById("pass").value = comb;
    const obj = [{
        "name" : n,
        "date" : date,
        "password" : comb
    }]
    for(var list in obj){
        console.log(obj)
    }
}