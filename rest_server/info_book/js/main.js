var url = 'http://date.jsontest.com';
function onSuccess(date) {
    document.write('Aktualna data to...' + date);
}

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

// No jQuery example
// @see https://blog.garstasio.com/you-dont-need-jquery/ajax/#sending-and-receiving-json
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        onSuccess(result.date);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();