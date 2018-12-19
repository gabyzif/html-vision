var jsonWoman;
var allOn=false;
function onloadHermosa(){
    $.getJSON("assets/js/jason/hermosa.json", function(json) {

        //  console.log(result);
        jsonHermosa = json;
        jsonString=JSON.stringify(jsonHermosa);
        longitud=jsonHermosa.length;
        console.log(jsonHermosa);


        $("#cant-img-hermosa").append(jsonHermosa.length);


        checker(jsonHermosa,"hermosa");






    });
}

function onloadMujerbonita(){
    $.getJSON("assets/js/jason/mujerbonita.json", function(json) {

        //  console.log(result);
        jsonMbonita = json;
        jsonString=JSON.stringify(jsonMbonita);
        console.log(jsonMbonita);

        $("#cant-img-mujerbonita").append(jsonMbonita.length);


        checker(jsonMbonita,"mujerbonita");




    });
}

function onLoadWoman(){

    console.log(allOn);


        $.getJSON("assets/js/jason/woman.json", function (json) {

            // console.log(json);
            jsonWoman = json;
            jsonString = JSON.stringify(jsonWoman);
            //console.log(jsonWoman);

            $("#cant-img-woman").append(jsonWoman.length);


            checker(jsonWoman, "woman");

            return jsonWoman;


        });


}


function checker(array,type){

    $.each(array, function(i, field) {
        if(allOn === true){
            console.log(allOn)
            return ;
        }



        var tag;

        tag = "beauty";


        // $("#hermosa").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");




            if (field.tag_01 === tag || field.tag_02 === tag || field.tag_03 === tag || field.tag_04 === tag || field.tag_05 === tag || field.tag_06 === tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00 === tag) {
                $('#js-beauty-' + type).append("<div class='images beauty'><img width='100px' src='assets/img/" + type + field.imageurl + "'><div class='tags'><p>Tag 0:" + field.tag_01 + "</p><p>Tag 1:" + field.tag_02 + "</p><p>Tag 0:" + field.tag_03 + "</p><p>Tag 1:" + field.tag_04 + "</p><p>Tag 0:" + field.tag_05 + "</p><p>Tag 1:" + field.tag_06 + "</p><p>Tag 0:" + field.tag_07 + "</p><p>Tag 1:" + field.tag_08 + "</p><p>Tag 0:" + field.tag_09 + "</p><p>Tag 1:" + field.tag_00 + "</p></div></div>");

                $('#js-beauty-general').append("<img width='100px' src='assets/img/" + type + field.imageurl + "'>");

            }






        /*
        tag = "fashion model"
        var tag_2="model"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag || field.tag_01 === tag_2||field.tag_02 === tag_2||field.tag_03 === tag_2||field.tag_04 === tag_2||field.tag_05 === tag_2||field.tag_06===tag_2 || field.tag_07 === tag_2 || field.tag_08 === tag_2 || field.tag_09 === tag_2 || field.tag_00  === tag_2){
            $('#beauty-' + type).append("<div style='float: left; margin: 10px; height: 700px;'><img width='100px' src='assets/img/"+type+field.imageurl+"'><p>Tag 0:"+field.tag_01+"</p><p>Tag 1:"+field.tag_02+"</p><p>Tag 0:"+field.tag_03+"</p><p>Tag 1:"+field.tag_04+"</p><p>Tag 0:"+field.tag_05+"</p><p>Tag 1:"+field.tag_06+"</p><p>Tag 0:"+field.tag_07+"</p><p>Tag 1:"+field.tag_08+"</p><p>Tag 0:"+field.tag_09+"</p><p>Tag 1:"+field.tag_00+"</p></div>");
            $('#model-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }


        tag= "girl"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#girl-' + type).append("<div><img width='100px' src='assets/img/"+type+field.imageurl+"'></div>");
            $('#girl-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }

        tag= "woman"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#woman-' + type).append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");
            $('#woman-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }


        tag= "lady"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#lady-' + type).append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");
            $('#lady-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }


*/

    });

    return;


}

function showhidetags(action){
    if(action==="hide"){
        $(".tags").hide();
       $(".images").addClass("images-all");

    }

    else {
        $(".tags").show();
        $(".images").removeClass("images-all");
    }
   //

}

function showAll(type, state){

    $('#js-beauty-' + type).empty();
    var jsonWoman = onLoadWoman();
    console.log(this.jsonWoman)

    if(state === "false"){
        allOn=false;

        checker(jsonWoman,type);

        return;
    }



    $.each(this.jsonWoman, function(i, field) {



        var tag;
        tag = "beauty";


        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#js-beauty-' + type).append("<div class='images beauty'><img width='100px' src='assets/img/"+type+field.imageurl+"'></div>");

        }

        else {
            $('#js-beauty-' + type).append("<div class='images'><img width='100px' src='assets/img/"+type+field.imageurl+"'></div>");


        }




    });

    allOn=true;


    $(".beauty").css('opacity', '0.2');;
    showhidetags('hide');

    return allOn;



}

