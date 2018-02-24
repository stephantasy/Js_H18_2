/* Stéphane Barthélemy (20084771) */
/* IFT1142 - TP2 */

// ===== Données du TP =====
var patients = [	
	{ "dossier":1, "nom":"Léger", "prenom":"Émile", "date_naissance":"1917-03-26", "sexe":"M" },
	{ "dossier":2, "nom":"Bernard", "prenom":"Marie", "date_naissance":"1946-03-02", "sexe":"F" },
	{ "dossier":3, "nom":"Chartrand", "prenom":"Guy", "date_naissance":"1959-04-05", "sexe":"M" },
	{ "dossier":4, "nom":"Côté", "prenom":"André", "date_naissance":"1978-09-02", "sexe":"M" },
	{ "dossier":5, "nom":"Lavoie", "prenom":"Carole", "date_naissance":"1973-11-04", "sexe":"F" },
	{ "dossier":6, "nom":"Martin", "prenom":"Diane", "date_naissance":"1965-12-02", "sexe":"F" },
	{ "dossier":7, "nom":"Lacroix", "prenom":"Pauline", "date_naissance":"1956-01-25", "sexe":"F" },
	{ "dossier":8, "nom":"St-Jean", "prenom":"Arthur", "date_naissance":"1912-10-07", "sexe":"M" },
	{ "dossier":9, "nom":"Béchard", "prenom":"Marc", "date_naissance":"1980-08-08", "sexe":"M" },
	{ "dossier":10, "nom":"Chartrand", "prenom":"Mario", "date_naissance":"1947-07-23", "sexe":"M" },
]	

// Note : Le numéro de téléphone est une String, car dans certains pays il commence part un 0
var etablissements = [	
	{ "code_etablissement":1234, "nom":"Centre hospitalier Sud", "adresse":"1234 boul. Sud, Montréal, Qc", "code_postal":"H2M3Y5", "no_tel":"5143231234" },
	{ "code_etablissement":2346, "nom":"Hôpital Nord", "adresse":"7562 rue du souvenir, Nordville, Qc", "code_postal":"J4R2Z5", "no_tel":"4502223333" },
	{ "code_etablissement":3980, "nom":" Hôpital  Centre", "adresse":"4637 boul. De l'Église, Montréal, Qc", "code_postal":"H1J4K8", "no_tel":"5141235678" },
	{ "code_etablissement":4177, "nom":"Centre hospitalier Est", "adresse":"12 rue Bernard, Repentigny, Qc", "code_postal":"J8R3K5", "no_tel":"4505892345" },
	{ "code_etablissement":7306, "nom":"Hôpital  du Salut", "adresse":"11 rue de la Rédemption, St-Basile, Qc", "code_postal":"J8H2D4", "no_tel":"4503456789" },
	{ "code_etablissement":8895, "nom":"Dernier Recours", "adresse":"999 rue St-Pierre, Longueuil, Qc", "code_postal":"J7B3J5", "no_tel":"4505556741" },
]	
	
var hospitalisations = [	
	{ "code_etablissement":1234, "dossier":5, "date_admission":"2000-08-14", "date_sortie":"2001-08-14", "specialite":"Médecine" },
	{ "code_etablissement":1234, "dossier":10, "date_admission":"1992-12-12", "date_sortie":"1992-12-12", "specialite":"Chirurgie" },
	{ "code_etablissement":2346, "dossier":8, "date_admission":"2003-03-03", "date_sortie":"2003-03-05", "specialite":"Médecine" },
	{ "code_etablissement":2346, "dossier":1, "date_admission":"1997-11-11", "date_sortie":"1997-11-12", "specialite":"Orthopédie" },
	{ "code_etablissement":2346, "dossier":3, "date_admission":"1995-04-12", "date_sortie":"1995-04-30", "specialite":"Médecine" },
	{ "code_etablissement":3980, "dossier":5, "date_admission":"2000-02-14", "date_sortie":"2000-03-14", "specialite":"Médecine" },
	{ "code_etablissement":3980, "dossier":5, "date_admission":"2001-01-01", "date_sortie":"2001-02-01", "specialite":"Médecine" },
	{ "code_etablissement":3980, "dossier":9, "date_admission":"1995-04-03", "date_sortie":"1995-04-08", "specialite":"Orthopédie" },
	{ "code_etablissement":3980, "dossier":7, "date_admission":"1999-11-27", "date_sortie":"1999-12-04", "specialite":"Chirurgie" },
	{ "code_etablissement":3980, "dossier":10, "date_admission":"1997-04-28", "date_sortie":"1997-05-05", "specialite":"Chirurgie" },
	{ "code_etablissement":4177, "dossier":3, "date_admission":"2001-08-03", "date_sortie":"2001-12-05", "specialite":"Médecine" },
	{ "code_etablissement":4177, "dossier":3, "date_admission":"2002-02-02", "date_sortie":"2002-02-23", "specialite":"Orthopédie" },
	{ "code_etablissement":7306, "dossier":2, "date_admission":"1998-05-23", "date_sortie":"1998-05-27", "specialite":"Orthopédie" }
]	


/*
 * Initialisation de la page
 */
function initialization(){
	
      var tableauData = document.getElementById("tableauData");
	  tableauData.style.visibility='visible'; 	
	  tableauData.innerHTML = "";

	  //return 0;

	  //tableauData.appendChild(getTableau(patients));
	  //tableauData.appendChild(getTableau(etablissements));
	  tableauData.appendChild(getTableau(hospitalisations));

	  var table = getTableau(hospitalisations)

	  //var popo = table.width;
	var width = document.getElementById("tableauData").offsetheight;
	var height = table.style.offsetheight;
	var width2 = table.style.width;
	var height2 = table.style.height;
	
	/*alert("width = " + width + " ; height = " + height + 
			"\nwidth = " + width2 + " ; height = " + height2);*/
	//alert("width = " + width);
	var ele = document.getElementById("tableData");
	var w = window.getComputedStyle(ele).width;

	document.getElementById("wrapper").setAttribute("style","width:" + w + ";");

}

function kiki(){
	var ele = document.getElementById("tableData");
	alert("width = " + window.getComputedStyle(ele).width);
}

function getTableau(tab){

	var nbElement = tab.length;

	var table = document.createElement("table");
	table.setAttribute("id", "tableData");	
	var tableHeader = document.createElement("thead");
	var tableBody = document.createElement("tbody");
	
	//Get the count of columns.
	var columnCount = 0;
	for(var o in tab[0]){
		columnCount++;
	}

	//Add the header row.
	var row = tableHeader.insertRow(-1);
	for (var p in tab[0]) {
		var headerCell = document.createElement("th");
		headerCell.innerHTML = p;
		row.appendChild(headerCell);
	}


	//Add the data rows.
	for (var i = 0; i < nbElement; i++) {
		row = tableBody.insertRow(-1);
		for (var p in tab[i]) {
			var cell = row.insertCell(-1);
			cell.innerHTML = tab[i][p];
		}
	}

	table.appendChild(tableHeader);
	table.appendChild(tableBody);

	

	return table;
}



