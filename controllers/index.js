var currentOrientation="PORTRAIT";
var menuOpen = false;
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
	var selectedCategoryId=e.row.categoryId;
	var selectedCategoryName=e.row.categoryName;
	
	loadData(selectedCategoryName); // this should send a JSON string to the function
}

// ################################################################
var loadData=function(args){
	var tableData=[];
	for (var i=0;i<=10;i++){
		var payload={
			itemId:i,
			itemName:args + ' - Item ' + i
		}
		var row=Alloy.createController('itemrow',payload).getView();
		tableData.push(row);
	}
	$.mainList.data=tableData;
}

// ################################################################
// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

// ################################################################
loadCategoriesMenu();
loadData('Todas/All');
$.index.open();
