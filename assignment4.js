
// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var clicked = 0;
var result=[];
var i =0;
var j;
var tracker = "";
var charr;
var first =1;
var wasBackspace = 1;
var checker="";
var once = 0;

$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://www.mattbowytz.com/simple_api.json?data=programming ',
        async:true,
        dataType: "json",
        //data: {get_param: 'all'},
        success: function(info)
        {
            result = info.data;
        }
    });
});


$('html').keyup(function(e){

    if(e.keyCode == 8) {
        tracker = tracker.substr(0, tracker.length - 1);
        //console.log(tracker);
    }

    if(e.keyCode != 16) {
        $('.results').html("");
        for (var k = 0; k < result.length; k++) {
            for (j = 0; j < result[k].length; j++) {
                checker += (result[k])[j];
                if ((checker == tracker)) {

                        //$('footer').append("Are you looking for: " + result[k] + "?<br/>");
                    $('.results').append(result[k]+"<br/>");



                }
            }
            checker = "";
        }
    }
})


$(document).keypress(function(e) {


        //console.log(String.fromCharCode(e.which));
        tracker += String.fromCharCode(e.which);
        //console.log(tracker);
});
