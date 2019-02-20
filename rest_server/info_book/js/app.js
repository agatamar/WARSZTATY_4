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
        var doc=$('body');

        //console.log(result);
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
                //console.log('click');
                var description=$(this).next();
                var id=this.id;
                callAjax("GET",url+id,{},"text", function(result) {

                    description.text(result);
                    //console.log(result);
                    description.toggle();
                });

            });
            
            deleteLink.on('click',function (event) {
                event.preventDefault();
                var id=$(this).prev().prev().attr("id")

                callAjax("DELETE",url+id,{},"text", function(result) {

                    //console.log(result);
                    description.remove();
                });

                 location.reload(true);
            })


        }
    });

    var btn=$("button");
    var form=$("form");

    btn.on('click',function(event){
        event.preventDefault();
        //console.log("click")
        var formdata={
            title:form.find("#title").val(),
            isbn:form.find("#isbn").val(),
            genre:form.find("#genre").val(),
            author:form.find("#author").val(),
            publisher:form.find("#publisher").val(),
        };


        callAjax("POST",url,formdata,"json", function(result) {

                    console.log("Udało się:",result);
                });

        location.reload(true);
    });


});

