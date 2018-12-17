var cantimgtot = -1;
var longitud;
$( document ).ready(function() {


    $.getJSON("assets/js/hermosa.json", function(hermosa) {

        //  console.log(result);
        jsonHermosa = hermosa;
        jsonString=JSON.stringify(jsonHermosa);
        longitud=jsonHermosa.length;
        console.log(jsonHermosa);


        $("#cantidad_img_hermosa").append(jsonHermosa.length);


        checker(jsonHermosa,"hermosa");






    });

    $.getJSON("assets/js/mujerbonita.json", function(hermosa) {

        //  console.log(result);
        jsonMbonita = hermosa;
        jsonString=JSON.stringify(jsonMbonita);
        console.log(jsonMbonita);

        $("#cantidad_img_mujerbonita").append(jsonMbonita.length);


        checker(jsonMbonita,"mujerbonita");




    });







});

function checker(array,type){

    $.each(array, function(i, field) {



        var tag;

        tag = "beauty";


        // $("#hermosa").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");


        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#beauty-' + type).append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");
            $('#beauty-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }

        tag = "fashion model"
        var tag_2="model"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag || field.tag_01 === tag_2||field.tag_02 === tag_2||field.tag_03 === tag_2||field.tag_04 === tag_2||field.tag_05 === tag_2||field.tag_06===tag_2 || field.tag_07 === tag_2 || field.tag_08 === tag_2 || field.tag_09 === tag_2 || field.tag_00  === tag_2){
            $('#model-' + type).append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");
            $('#model-general').append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");

        }


        tag= "girl"

        if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
            $('#girl-' + type).append("<img width='100px' src='assets/img/"+type+field.imageurl+"'>");
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



    });

    return;


}
