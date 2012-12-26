// get arguments from controller
var args = arguments[0] || {};
var catId=args.catId;
var catTitle=args.catTitle;

var h=require('http').HTTP;
var http=new h();
var baseURL=Alloy.CFG.apiBaseUrl

$.headerLabel.text=catTitle;

var offset=0;
http.get(baseURL + 'q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fclasificadosonline.com%2Fm%2FMiscellaneosListingM.asp%3FMisCat%3D' + catId + '%26Submit2%3DSearch%2B-%2BBusqueda%26keyword%3D%26Desc%3D%26offset%3D' + offset + '%22%20and%0A%20%20%20%20%20%20xpath%3D%27%2Fhtml%2Fbody%2Fdiv%2Fdiv%2Fdiv%2Fform%2Ftable%27&format=json&diagnostics=true&callback=',function(pageData){
	try {
		var data=JSON.parse(pageData.toString());	
	} catch(e){
		alert('Invalid response from server. Try again.');
		return;
	}
	
	var results=data.query.results.table.tr;
	var tvData=[];

	for (var i=0;i<results.length;i++){
		var itemName=results[i].td[0].a.strong;
		var url=results[i].td[0].a.href;
		var location=results[i].td[0].a.span[0].content;
		var price=results[i].td[0].a.span[1].content;
		var args = {
	        itemName: itemName,
	        location: location,
	        price: price,
	        url: url
	    };
	    var row = Alloy.createController('row2', args).getView();
    	tvData.push(row);
	}
	$.itemsTable.data=tvData;
})

function viewItem(e){

}