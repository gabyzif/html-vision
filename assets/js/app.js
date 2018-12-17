$( document ).ready(function() {

    $.getJSON("assets/js/hermosa.json", function(result) {

      //  console.log(result);
        json = result;
        jsonString=JSON.stringify(json);
        console.log(json);

        $("#cantidad_img").append(json.length);

        $.each(json, function(i, field) {



            var tag;

            tag = "beauty";


           // $("#hermosa").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");


            if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
                $("#beauty").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");
            }

            tag = "fashion model"
            var tag_2="model"

            if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag || field.tag_01 === tag_2||field.tag_02 === tag_2||field.tag_03 === tag_2||field.tag_04 === tag_2||field.tag_05 === tag_2||field.tag_06===tag_2 || field.tag_07 === tag_2 || field.tag_08 === tag_2 || field.tag_09 === tag_2 || field.tag_00  === tag_2){
                $("#model").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");
            }


            tag= "girl"

            if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
                $("#girl").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");
            }

            tag= "woman"

            if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
                $("#woman").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");
            }


            tag= "lady"

            if(field.tag_01 === tag||field.tag_02 === tag||field.tag_03 === tag||field.tag_04 === tag||field.tag_05 === tag||field.tag_06===tag || field.tag_07 === tag || field.tag_08 === tag || field.tag_09 === tag || field.tag_00  === tag){
                $("#lady").append("<img width='100px' src='assets/img/hermosa"+field.imageurl+"'>");
            }



        });

    });




});
