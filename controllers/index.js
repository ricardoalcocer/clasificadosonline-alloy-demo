function doClick(e) {  
    alert($.label.text);
}

var myColMOD=require('colMOD').colMOD;
myColMOD=new myColMOD();

var res=myColMOD.getCategories();

function showItems(e){
	var offset=0;
	var catId=e.rowData.categId;
	var catTitle=e.rowData.itemTitle;
	var w=Alloy.createController('itemlist',{"catId" : catId,"catTitle":catTitle}).getView();
  	w.open();
}

$.index.open();

/*function xshowItems(e){
	var offset=0;
	var category=e.rowData.categId;
	Ti.API.info('----------------------------------------------');
	Ti.API.info(e.rowData.itemTitle);
	Ti.API.info('----------------------------------------------');
	http.get(baseURL + 'q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fclasificadosonline.com%2Fm%2FMiscellaneosListingM.asp%3FMisCat%3D' + category + '%26Submit2%3DSearch%2B-%2BBusqueda%26keyword%3D%26Desc%3D%26offset%3D' + offset + '%22%20and%0A%20%20%20%20%20%20xpath%3D%27%2Fhtml%2Fbody%2Fdiv%2Fdiv%2Fdiv%2Fform%2Ftable%27&format=json&diagnostics=true&callback=',function(pageData){
		try {
			var data=JSON.parse(pageData.toString());	
		} catch(e){
			alert('Invalid response from server. Try again.');
			return;
		}
		
		var results=data.query.results.table.tr;
		var categoryData=[];

		for (var i=0;i<results.length;i++){
			var itemName=results[i].td[0].a.strong;
			var url=results[i].td[0].a.href;
			var location=results[i].td[0].a.span[0].content;
			var price=results[i].td[0].a.span[1].content;

			// create result object into categoryData array and give as payload to open window

			Ti.API.info(itemName + ' - ' + price + ' - ' + location + ' - ' + url);
  		}

  		//var w=Alloy.createController('itemlist',{}).getView();
  		//w.open();
	})
}*/
