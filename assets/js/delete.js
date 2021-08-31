$(document).ready(function(){
    var btn = $('#button2');
    btn.click(function(event){
        var item = new Array();
        var elements = $(".container");
        for (var j = 0; j < elements.length; j++) {
            var id = $(elements[j]).attr('id');
            var current = $(elements[j]).children();
            var requireddiv = current[0];
            var field = $(requireddiv).children();
            if ($(field).prop("checked") == true) {
                item.push(id);
            }
        }
        sendResponse(item);
    });
    function sendResponse(item){
        $.ajax({
            type: 'post',
            url: '/delete-contact',
            data: {item:item},
            success: function(data){
                location.reload();
            }
        });
    }
});