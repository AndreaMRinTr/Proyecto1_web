function api(){

	var name;
	var album;

	var request = new Request ('https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1/tracks?market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))&limit=10&offset=0',
		{
			method: 'GET',
			headers: new Headers({ 'Accept': 'application/json',
			 'Content-Type': 'application/json',
			 'Authorization': 'Bearer BQCc8Qt4wGyEeQCuJb6rbbS0ceVt6WINyFEO4zyHbHOIll4bwKOMuBQSKJby-v9a-LnJKMPw0SjSoqRklkQHjisAVl7WHWs66GOI_vAadO2VonKtk1rQabZ9ckZ-Z-UCDBdOeoI3VWKfqBJv'})
		});

	fetch(request)
	.then (function(response) {
		//var jsonResponse = JSON.parse(response);
		//console.log(response);

		response.json().then(function(respjson){
			//console.log(respjson.items);
			document.forma.ejecutar.value = "";
			document.forma.salida_1.value = respjson.items[0].track.name + " ("+ respjson.items[0].track.album.name + ")";
			document.forma.salida_2.value = respjson.items[1].track.name + " ("+ respjson.items[1].track.album.name + ")";
			document.forma.salida_3.value = respjson.items[2].track.name + " ("+ respjson.items[2].track.album.name + ")";
			document.forma.salida_4.value = respjson.items[3].track.name + " ("+ respjson.items[3].track.album.name + ")";
			document.forma.salida_5.value = respjson.items[4].track.name + " ("+ respjson.items[4].track.album.name + ")";
			document.forma.salida_6.value = respjson.items[5].track.name + " ("+ respjson.items[5].track.album.name + ")";
			document.forma.salida_7.value = respjson.items[6].track.name + " ("+ respjson.items[6].track.album.name + ")";
			document.forma.salida_8.value = respjson.items[7].track.name + " ("+ respjson.items[7].track.album.name + ")";
			document.forma.salida_9.value = respjson.items[8].track.name + " ("+ respjson.items[8].track.album.name + ")";
			document.forma.salida_10.value = respjson.items[9].track.name + " ("+ respjson.items[9].track.album.name + ")";

			for (var i=0; i<=9;i++){
				console.log(respjson.items[i].track.name);
				console.log(respjson.items[i].track.album.name);
			}


			// document.getElementById("name")=name;
			// document.getElementById("album").innerHTML = respjson.items[i].track.album.name;


		});

	})
	.catch(err=> {
		console.log(err);
	});
}
