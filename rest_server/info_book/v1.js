//zadanie testowe
// var url = 'http://date.jsontest.com';
// function onSuccess(date) {
//     document.write('Aktualna data to...' + date);
// }
//
// $(function() {
//     $.ajax({
//         url: url,
//         data: {},
//         type: "GET",
//         dataType: "json"
//     }).done(function(result) {
//         onSuccess(result.date);
//     });
// });



$(function() {
    var url='http://127.0.0.1:8000/book/'
    function callAjax(method,url,data,datatype,callback){
                $.ajax({
                url: url,
                data:data,
                type: method,
                 dataType : datatype,
            }).done(callback);
            }

    callAjax("GET",url,{},"json", function(result) {


    // $.ajax({
    //     url: 'http://127.0.0.1:8000/book/',
    //     data: {},
    //     type: "GET",
    //     dataType: "json"
    // }).done(function(result) {
        //onSuccess(result[0].author);
        var doc=$('body');

        console.log(result);
        for(var i=0; i<result.length; i++){
            var title=$('<p></p>');
            var description=$('<div class="desc"></div>');
            var deleteLink=$('<a href="#">Delete</a>')
            doc.append(title);

            doc.append(description);
            doc.append(deleteLink);

            title.text(result[i].title);
            var id=result[i].id;
            title.attr('id',id)

            //console.log(title.attr('id'))
            title.on('click',function () {
                console.log('click');
                var data={};
                var description=$(this).next();
                //  $.ajax({
                //     url: 'http://127.0.0.1:8000/book/'+this.id,
                //     data: {},
                //     type: "GET",
                //      dataType : "text"
                // }).done(function(result) {
                //     description.text(result);
                //     console.log(result);
                //      description.show();
                // });
                var id=this.id;
                callAjax("GET",url+id,data,"text", function(result) {

                    description.text(result);
                    //console.log(result);
                    description.toggle();
                });

            });

            deleteLink.on('click',function (event) {
                event.preventDefault();
                console.log("delete");
                var data={};

                var id=$(this).prev().prev().attr("id")
                //alert($(this).prev().prev().attr("id"))
                //  $.ajax({
                //     url: 'http://127.0.0.1:8000/book/'+id,
                //     data:{},
                //     type: "DELETE",
                //      dataType : "text",
                // }).done(function(result) {
                //
                //     console.log(result);
                //      description.remove();
                // });


                callAjax("DELETE",url+id,data,"text", function(result) {

                    console.log(result);
                     //description.remove();
                });



                 location.reload(true);
            })


        }
    });

    var btn=$("button");
    var form=$("form");
    console.log("btn",btn)

    btn.on('click',function(event){
        event.preventDefault();
        console.log("click")
        var formdata={
            title:form.find("#title").val(),
            isbn:form.find("#isbn").val(),
            genre:form.find("#genre").val(),
            author:form.find("#author").val(),
            publisher:form.find("#publisher").val(),
        };



        // $.ajax({
        // url: 'http://127.0.0.1:8000/book/',
        // type: "POST",
        // dataType: "json",
        // data:formdata,
        // }).done(function(result) {
        // //onSuccess(result[0].author);
        //
        //     console.log("Udało się:",result);
        //
        // });

        callAjax("POST",url,formdata,"json", function(result) {

                    console.log("Udało się:",result);
                });

        location.reload(true);
    });


});
