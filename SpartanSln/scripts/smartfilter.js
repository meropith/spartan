
$(document).ready(function () {
    var url = 'http://localhost:57444/api/EquipmentSearch/GetAllEquipment';
    $.ajax({
        dataType: "json",
        url: url,
        success: function (data) {
            if (data) {
                var len = data.results.length;
                var html = "";
                if (len > 0) {
                    for (var i = 0; i < len; i++) {

                        html += "<div innerid=\"" + data.results[i].ItemNo + "\" id=\"" + data.results[i].UnitNo + "\" class=\"panel panel-primary\"> <div  class=\"panel-heading\"> <h3 class=\"panel-title\">" +

                            data.results[i].UnitNo
                            + "</h3> </div> <div class=\"panel-body\"> " +
                            data.results[i].ItemNo + "<br/>" +
                            data.results[i].Description
                            + " </div> </div>"


                    }
                    $("#equipmentPanel").append(html)
                }
            }
        }
    });


});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

$("#UnitNoSearch").keyup(function () {
    var val = $(this).val();
    if (val != "") {
        $('.panel').hide().filter('[id^="' + val + '"]').show();
    }
    else {
        $('.panel').show()
    }

});

$("#ItemNoSearch").keyup(function () {
    var val = $(this).val();
    if (val != "") {
        $('.panel').hide().filter('[innerid^="' + val + '"]').show();
    }
    else {
        $('.panel').show()
    }

});