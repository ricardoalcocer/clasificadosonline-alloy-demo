var COL = function(){};

var getParameterByName=function(target,name){
	// helper function to extract data from the item URL
	//
	// modified to work with Titanium 
	// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values
	
  	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  	var regexS = "[\\?&]" + name + "=([^&#]*)";
  
  	var results=target.match(regexS);
  	if(results == null){
    	return "";
  	}else{
    	return Ti.Network.decodeURIComponent(results[1].replace(/\+/g, " "));
   }
}

COL.prototype.getDataArray=function(rawJsonData,startAt){
	var theData=JSON.parse(rawJsonData.data);
	var totalRecs=theData.query.results.table.tr.length;
	
	var dataArray=[];
	for(var i=0;i<totalRecs;i++){
		var itemName=theData.query.results.table.tr[i].td[0].a.strong;
		var itemId=getParameterByName(theData.query.results.table.tr[i].td[0].a.href,'ID');
		var obj={
			name:itemName,
			id:itemId
		}
		dataArray.push(obj);
		//Ti.API.info(itemName);
		Ti.API.info(itemId);
	}
	return dataArray;
}

COL.prototype.getCategories=function(){
	return [
               {
                  "value":"0",
                  "content":"Todos/All"
               },
               {
                  "value":"176",
                  "content":"Abanicos"
               },
               {
                  "value":"218",
                  "content":"Acampar Equipo"
               },
               {
                  "value":"215",
                  "content":"Accesorios WiFi"
               },
               {
                  "value":"21",
                  "content":"Acondicionadores Aire"
               },
               {
                  "value":"58",
                  "content":"Antenas de Satelite"
               },
               {
                  "value":"126",
                  "content":"Antenas de Satelite Cajas"
               },
               {
                  "value":"1",
                  "content":"Antiguedades"
               },
               {
                  "value":"37",
                  "content":"Arboles Plantas Flores"
               },
               {
                  "value":"2",
                  "content":"Arte"
               },
               {
                  "value":"203",
                  "content":"Artesanias"
               },
               {
                  "value":"187",
                  "content":"Articulos Decoración"
               },
               {
                  "value":"201",
                  "content":"Articulos Promocionales"
               },
               {
                  "value":"174",
                  "content":"Aspiradoras"
               },
               {
                  "value":"33",
                  "content":"Audio Players(iPods, otros)"
               },
               {
                  "value":"61",
                  "content":"Baños Accesorios Equipos"
               },
               {
                  "value":"197",
                  "content":"BBQ"
               },
               {
                  "value":"4",
                  "content":"Bebes (Articulos)"
               },
               {
                  "value":"254",
                  "content":"Belleza Produtos"
               },
               {
                  "value":"67",
                  "content":"Bicicletas"
               },
               {
                  "value":"247",
                  "content":"Bicicletas, Piezas y Accesorios"
               },
               {
                  "value":"246",
                  "content":"Bicicletas, Ropa"
               },
               {
                  "value":"60",
                  "content":"Billares"
               },
               {
                  "value":"5",
                  "content":"Boda (Articulos)"
               },
               {
                  "value":"48",
                  "content":"Boletos Taquillas"
               },
               {
                  "value":"205",
                  "content":"Bultos Escolares"
               },
               {
                  "value":"52",
                  "content":"Cajas Fuertes"
               },
               {
                  "value":"202",
                  "content":"Cajas Registradoras y POS"
               },
               {
                  "value":"120",
                  "content":"Calculadoras"
               },
               {
                  "value":"27",
                  "content":"Calentadores de Agua"
               },
               {
                  "value":"32",
                  "content":"Camaras y Accesorios"
               },
               {
                  "value":"225",
                  "content":"Carpas y Toldos"
               },
               {
                  "value":"42",
                  "content":"Carteras"
               },
               {
                  "value":"38",
                  "content":"Casas Prefabricadas"
               },
               {
                  "value":"63",
                  "content":"CD's"
               },
               {
                  "value":"35",
                  "content":"Celulares"
               },
               {
                  "value":"171",
                  "content":"Celulares PDA Blackberry Palm"
               },
               {
                  "value":"170",
                  "content":"Celulares Accesorios"
               },
               {
                  "value":"184",
                  "content":"Celulares Chips"
               },
               {
                  "value":"173",
                  "content":"Celulares Iphones"
               },
               {
                  "value":"185",
                  "content":"Celulares Piezas (no Chips)"
               },
               {
                  "value":"183",
                  "content":"Celulares Programas"
               },
               {
                  "value":"182",
                  "content":"Cerraduras Candados"
               },
               {
                  "value":"66",
                  "content":"Cocinas Muebles (No Enseres)"
               },
               {
                  "value":"6",
                  "content":"Coleccionables"
               },
               {
                  "value":"179",
                  "content":"Comida Alimentos"
               },
               {
                  "value":"181",
                  "content":"Comida Frutas Vegetales"
               },
               {
                  "value":"180",
                  "content":"Comida Postres Bizcochos"
               },
               {
                  "value":"7",
                  "content":"Computadoras"
               },
               {
                  "value":"85",
                  "content":"Computadoras Accesorios"
               },
               {
                  "value":"83",
                  "content":"Computadoras Bocinas"
               },
               {
                  "value":"84",
                  "content":"Computadoras Camaras"
               },
               {
                  "value":"238",
                  "content":"Computadoras Cargadores"
               },
               {
                  "value":"244",
                  "content":"Computadoras Ipads y Tablets"
               },
               {
                  "value":"87",
                  "content":"Computadoras Laptops"
               },
               {
                  "value":"252",
                  "content":"Computadoras Laptops Piezas"
               },
               {
                  "value":"86",
                  "content":"Computadoras Memorias"
               },
               {
                  "value":"46",
                  "content":"Computadoras Monitores"
               },
               {
                  "value":"251",
                  "content":"Computadoras Piezas"
               },
               {
                  "value":"45",
                  "content":"Computadoras Printers"
               },
               {
                  "value":"243",
                  "content":"Computadoras Printers Piezas"
               },
               {
                  "value":"98",
                  "content":"Computadoras Procesadores"
               },
               {
                  "value":"89",
                  "content":"Computadoras Software"
               },
               {
                  "value":"44",
                  "content":"Computadoras Tintas Toners"
               },
               {
                  "value":"226",
                  "content":"Comunicaciones - Accesorios"
               },
               {
                  "value":"212",
                  "content":"Copiadoras"
               },
               {
                  "value":"242",
                  "content":"Copiadoras Piezas"
               },
               {
                  "value":"207",
                  "content":"Cortinas Exteriores"
               },
               {
                  "value":"206",
                  "content":"Cortinas Interiores"
               },
               {
                  "value":"199",
                  "content":"Deportes Accesorios"
               },
               {
                  "value":"258",
                  "content":"Deportes Alimentos Nutricion"
               },
               {
                  "value":"219",
                  "content":"Deportes Escalar y Rescate"
               },
               {
                  "value":"55",
                  "content":"Deportes Pesca"
               },
               {
                  "value":"198",
                  "content":"Deportes Uniformes"
               },
               {
                  "value":"91",
                  "content":"Deportivo Gotcha"
               },
               {
                  "value":"94",
                  "content":"Deportivo Marino"
               },
               {
                  "value":"210",
                  "content":"Deportivos Baloncesto"
               },
               {
                  "value":"95",
                  "content":"Deportivos Beisbol (Baseball)"
               },
               {
                  "value":"93",
                  "content":"Deportivos Gimnasio"
               },
               {
                  "value":"172",
                  "content":"Deportivos Kayaks"
               },
               {
                  "value":"92",
                  "content":"Deportivos Otros"
               },
               {
                  "value":"96",
                  "content":"Deportivos Ruedas (Skates..)"
               },
               {
                  "value":"245",
                  "content":"Deportivos Softball"
               },
               {
                  "value":"114",
                  "content":"Disfraces"
               },
               {
                  "value":"62",
                  "content":"DVD's"
               },
               {
                  "value":"107",
                  "content":"Energia Renovable Solar"
               },
               {
                  "value":"127",
                  "content":"Energia Renovable Viento"
               },
               {
                  "value":"100",
                  "content":"Enseres Congeladores"
               },
               {
                  "value":"103",
                  "content":"Enseres Estufas"
               },
               {
                  "value":"110",
                  "content":"Enseres Extractores"
               },
               {
                  "value":"101",
                  "content":"Enseres Lavadoras"
               },
               {
                  "value":"104",
                  "content":"Enseres Lavaplatos"
               },
               {
                  "value":"108",
                  "content":"Enseres Microhondas"
               },
               {
                  "value":"99",
                  "content":"Enseres Neveras"
               },
               {
                  "value":"105",
                  "content":"Enseres Otros"
               },
               {
                  "value":"255",
                  "content":"Enseres Piezas"
               },
               {
                  "value":"102",
                  "content":"Enseres Secadoras"
               },
               {
                  "value":"227",
                  "content":"Equipo Agricola"
               },
               {
                  "value":"10",
                  "content":"Equipo Comercial"
               },
               {
                  "value":"59",
                  "content":"Equipo Construccion"
               },
               {
                  "value":"133",
                  "content":"Equipo de Arreglo Personal"
               },
               {
                  "value":"29",
                  "content":"Equipo Industrial"
               },
               {
                  "value":"43",
                  "content":"Equipo Medico"
               },
               {
                  "value":"71",
                  "content":"Equipo-Restaurantes-Hoteles"
               },
               {
                  "value":"200",
                  "content":"Escaleras"
               },
               {
                  "value":"177",
                  "content":"Espejos"
               },
               {
                  "value":"236",
                  "content":"Estructuras Prefabricadas"
               },
               {
                  "value":"216",
                  "content":"Extinguidores Extintores"
               },
               {
                  "value":"222",
                  "content":"Fiestas Articulos"
               },
               {
                  "value":"231",
                  "content":"Filtros de Agua"
               },
               {
                  "value":"232",
                  "content":"Filtros de Aire"
               },
               {
                  "value":"56",
                  "content":"Futones"
               },
               {
                  "value":"57",
                  "content":"Futones Accesorios"
               },
               {
                  "value":"112",
                  "content":"Gafas"
               },
               {
                  "value":"53",
                  "content":"Golf Accesorios"
               },
               {
                  "value":"54",
                  "content":"Golf Clubs"
               },
               {
                  "value":"121",
                  "content":"GPS"
               },
               {
                  "value":"70",
                  "content":"Herramientas"
               },
               {
                  "value":"131",
                  "content":"Hobbies, Control Remoto"
               },
               {
                  "value":"11",
                  "content":"Hogar (No Enseres)"
               },
               {
                  "value":"65",
                  "content":"Jardineria Equipo"
               },
               {
                  "value":"12",
                  "content":"Joyeria (Prendas)"
               },
               {
                  "value":"116",
                  "content":"Joyeria Plata"
               },
               {
                  "value":"115",
                  "content":"Joyeria Relojes"
               },
               {
                  "value":"249",
                  "content":"Juegos de Mesa"
               },
               {
                  "value":"13",
                  "content":"Juguetes"
               },
               {
                  "value":"51",
                  "content":"Lamparas Iluminación ect"
               },
               {
                  "value":"250",
                  "content":"Lentes y Espejuelos"
               },
               {
                  "value":"14",
                  "content":"Libros"
               },
               {
                  "value":"122",
                  "content":"Libros Universitarios"
               },
               {
                  "value":"72",
                  "content":"Libros-Escolares"
               },
               {
                  "value":"237",
                  "content":"Manteles"
               },
               {
                  "value":"178",
                  "content":"Manualidades"
               },
               {
                  "value":"175",
                  "content":"Maquinas de Coser"
               },
               {
                  "value":"220",
                  "content":"Maquinas Lavado a Presion Equipo"
               },
               {
                  "value":"221",
                  "content":"Maquinas Lavado a Presion Piezas"
               },
               {
                  "value":"30",
                  "content":"Maquinas Sheet Metal"
               },
               {
                  "value":"204",
                  "content":"Materiales Escolares"
               },
               {
                  "value":"117",
                  "content":"Mattreses"
               },
               {
                  "value":"234",
                  "content":"Mesas"
               },
               {
                  "value":"16",
                  "content":"Muebles"
               },
               {
                  "value":"259",
                  "content":"Muebles Bebes - Niños"
               },
               {
                  "value":"118",
                  "content":"Muebles Cuartos"
               },
               {
                  "value":"119",
                  "content":"Muebles de Patio"
               },
               {
                  "value":"186",
                  "content":"Muebles Escritorios"
               },
               {
                  "value":"109",
                  "content":"Muebles Mesas Comedor"
               },
               {
                  "value":"125",
                  "content":"Muebles Sala"
               },
               {
                  "value":"18",
                  "content":"Musicales (Equipo)"
               },
               {
                  "value":"36",
                  "content":"Musicales (Instrumentos)"
               },
               {
                  "value":"19",
                  "content":"Oficina"
               },
               {
                  "value":"97",
                  "content":"Otros"
               },
               {
                  "value":"68",
                  "content":"Panteones Lotes Cementerio"
               },
               {
                  "value":"194",
                  "content":"Pasamanos"
               },
               {
                  "value":"195",
                  "content":"Pasamanos Stainless Steel"
               },
               {
                  "value":"64",
                  "content":"Perfumes"
               },
               {
                  "value":"241",
                  "content":"Pinturas Casas"
               },
               {
                  "value":"123",
                  "content":"Piscinas"
               },
               {
                  "value":"191",
                  "content":"Pisos Limpieza Productos"
               },
               {
                  "value":"188",
                  "content":"Pisos Losas"
               },
               {
                  "value":"190",
                  "content":"Pisos Marmol"
               },
               {
                  "value":"189",
                  "content":"Pisos Mosaicos"
               },
               {
                  "value":"24",
                  "content":"Plantas Electricas"
               },
               {
                  "value":"214",
                  "content":"Plantillas Ortopedicas"
               },
               {
                  "value":"223",
                  "content":"Playgrounds Equipos Recreativos"
               },
               {
                  "value":"217",
                  "content":"Portones Electricos"
               },
               {
                  "value":"257",
                  "content":"Productos Medicinales"
               },
               {
                  "value":"213",
                  "content":"Productos para Cuidado Pies"
               },
               {
                  "value":"209",
                  "content":"Productos para Rebajar"
               },
               {
                  "value":"90",
                  "content":"Proyectores"
               },
               {
                  "value":"23",
                  "content":"Puertas Garage"
               },
               {
                  "value":"25",
                  "content":"Puertas y Ventanas"
               },
               {
                  "value":"256",
                  "content":"Refrigeración Piezas"
               },
               {
                  "value":"17",
                  "content":"Regalos (Articulos)"
               },
               {
                  "value":"26",
                  "content":"Rejas"
               },
               {
                  "value":"40",
                  "content":"Ropa"
               },
               {
                  "value":"111",
                  "content":"Ropa Mahones"
               },
               {
                  "value":"248",
                  "content":"Ropa Maternidad"
               },
               {
                  "value":"28",
                  "content":"Rotulacion"
               },
               {
                  "value":"253",
                  "content":"Salud Productos"
               },
               {
                  "value":"224",
                  "content":"Screens Ventanas y Puertas"
               },
               {
                  "value":"196",
                  "content":"Selladores Techo"
               },
               {
                  "value":"233",
                  "content":"Sillas"
               },
               {
                  "value":"31",
                  "content":"Sistemas Seguridad"
               },
               {
                  "value":"22",
                  "content":"Tanques de Agua"
               },
               {
                  "value":"239",
                  "content":"Techos Aluminio o Galvanizados"
               },
               {
                  "value":"69",
                  "content":"Televisores"
               },
               {
                  "value":"240",
                  "content":"Tormenteras"
               },
               {
                  "value":"208",
                  "content":"Trajes de Novia"
               },
               {
                  "value":"34",
                  "content":"Uniformes"
               },
               {
                  "value":"192",
                  "content":"Verjas"
               },
               {
                  "value":"193",
                  "content":"Verjas PVC"
               },
               {
                  "value":"124",
                  "content":"Video Juegos Accesorios"
               },
               {
                  "value":"75",
                  "content":"Video Juegos, Consolas y 'Hardware'"
               },
               {
                  "value":"74",
                  "content":"Video Juegos, 'Software'"
               },
               {
                  "value":"235",
                  "content":"Vitaminas"
               },
               {
                  "value":"41",
                  "content":"Zapatos"
               },
               {
                  "value":"113",
                  "content":"Zapatos Deportivos"
               },
               {
                  "value":"211",
                  "content":"Zapatos Terapeuticos"
               }
            ]

}

module.exports=COL;