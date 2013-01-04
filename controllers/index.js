var currentOrientation="PORTRAIT";
var menuOpen = false;
var baseURL="http://query.yahooapis.com/v1/public/yql?";

var XHR = require("xhr");
var xhr = new XHR();
var COL = require("mod_col");
var col = new COL();

// ################################################################
// shows or hide the menu
var showhidemenu=function(e){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		moveTo="250dp";
		menuOpen=true;
	}
	
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:moveTo,
		duration:100
	});
}

// ################################################################
var loadCategoriesMenu=function(){
	var options=col.getCategories();
	var tableData=[];
	for (var i=0;i<options.length;i++){
		var payload={
			categoryId:options[i].value,
			categoryName:options[i].content
		}
		var row=Alloy.createController('categoryrow',payload).getView();
		tableData.push(row);	
	}
	$.categories.data=tableData;
}

// ################################################################
var onCategoryClick=function(e){
	// according to http://developer.appcelerator.com/question/133642/tableview---erowdatasomething-vs-erowsomething
	// row should be used to reach row info instead of rowData
	
	// we need to check the event source, in case the user clicked on the label and not the row
	if(e.source.id==='categoryEntry'){
		var selectedCategoryId=e.source.parent.categoryId;
		var selectedCategoryName=e.source.parent.categoryName;
	}else{
		var selectedCategoryId=e.row.categoryId;
		var selectedCategoryName=e.row.categoryName;
	}
	
	var data={
		id:selectedCategoryId,
		caption:selectedCategoryName
	}
	$.currentcategory.text=data.caption;
	loadData(data,0); // this should send a JSON string to the function
}

// ################################################################
var loadData=function(args,startAt){
	var httpOptions={
		async				:true,
		ttl					:false, 
		shouldAuthenticate	:false,
		contentType			: "application/json"
	}
	
	var onSuccessCallback=function(jsonData){
		var dataArray=col.getDataArray(jsonData,startAt);
		var contentLength=dataArray.length;
		var tableData=[];
		for (var i=0;i<contentLength;i++){
			var payload={
				itemId:dataArray[i].id,
				itemName:dataArray[i].name
			}
			
			var row=Alloy.createController('itemrow',payload).getView();
			tableData.push(row);
		}
		$.mainList.data=tableData;
		//$.mainList.scrollToTop();
	}
	
	var onErrorCallback=function(data){
		output="error";
	}
	
	xhr.get(baseURL + "q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fclasificadosonline.com%2Fm%2FMiscellaneosListingM.asp%3FMisCat%3D" + args.id + "%26Submit2%3DSearch%2B-%2BBusqueda%26keyword%3D%26Desc%3D%26offset%3D" + startAt + "%22%20and%0A%20%20%20%20%20%20xpath%3D'%2Fhtml%2Fbody%2Fdiv%2Fdiv%2Fdiv%2Fform%2Ftable'&format=json&diagnostics=true&callback=", onSuccessCallback, onErrorCallback,httpOptions);
}

// ################################################################
// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

// ################################################################
loadCategoriesMenu();
loadData({
		id:0,
		caption:'Todas/All'
	},100
);
$.index.open();
