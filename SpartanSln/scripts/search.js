
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


	var unitNumberTxt = document.getElementById("UnitNoSearch");
unitNumberTxt.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
			if(unitNumberTxt.value != ""){
		e.preventDefault();}
        $("#equipmentPanel").empty();		
        CallAPI(e, unitNumberTxt.value, true);
    }
});

var ItemNoSearchTxt = document.getElementById("ItemNoSearch");
ItemNoSearchTxt.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
		if(ItemNoSearchTxt.value != ""){
		e.preventDefault();}
        $("#equipmentPanel").empty();		 
        CallAPI(e, ItemNoSearchTxt.value, false);
    }
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







function CallAPI(e, searchValue, isUnitNoSearch) {
    var url = "";
    if (isUnitNoSearch) {
        url = 'http://localhost:57444/api/EquipmentSearch/GetByUnitNo?UnitNo=';
    }
    else {
        url = 'http://localhost:57444/api/EquipmentSearch/GetByItemNo?ItemNo=';
    }
    $.ajax({
        dataType: "json",
        url: url + searchValue,
        success: function (data) {
            if (data) {
                var html = "";
                var len = data.results.length;
                if (len == 0) {
                    $("#equipmentPanel").append("<p>Not Found</p>");

                }
                else {
                    if (len > 1) {
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
                    else {
                        if (data.results.ItemNo != null) {
                            html += "<div innerid=\"" + data.results.ItemNo + "\" id=\"" + data.results.UnitNo + "\" class=\"panel panel-primary\"> <div  class=\"panel-heading\"> <h3 class=\"panel-title\">" +
                                data.results.UnitNo
                                + "</h3> </div> <div class=\"panel-body\"> " +
                                data.results.ItemNo + "<br/>" +
                                data.results.Description
                                + " </div> </div>"
                            $("#equipmentPanel").append(html);
                        }
                        else {
                            $("#equipmentPanel").append("<p>Not Found</p>");
                        }

                    }
                }

            }
        }
    });

}
