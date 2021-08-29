var one = $(".text");
for (var j = 0; j < one.length ; j++){
    var current = one[j].innerText;
    var element = $(one[j]);
    if(current=="Personal"){
        element.css(
            "background-color","plum"
        )
    }
    if(current=="Work"){
        element.css(
            "background-color","red"
        )
    }
    if(current=="School"){
        element.css(
            "background-color","green"
        )
    }
    if(current=="Cleaning"){
        element.css(
            "background-color","gold"
        )
    }
    if(current=="Other"){
        element.css(
            "background-color","indigo"
        )
    }
}
