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

// Constantes (textes)
const MSG_NBSP = "&nbsp;";
const MSG_CHOISIR = "Choisir...";
const MSG_LISTE_HOSPITALISATION = "Liste des hospitalisations";
const MSG_LISTE_ACTS_PAR_SPECIALITE = "Liste des actes pour la spécialité choisie";
const MSG_LISTE_PATIENTS = "Liste des patients";
const MSG_LISTE_ETABLISSEMENT = "Liste des établissements";
const MSG_NO_HOSPITALISATION = "Aucune hospitalisation pour ce patient";
const MSG_INFO_PATIENT = "Information sur le patient";
const MSG_INFO_ETABLISSEMENT = "Information sur l'établissement";

// Initialisation 
function initContent(displayPresentation){
	// On cache les zones de Select
	hideElement("choixPatient");
	hideElement("choixEtablissement");
	hideElement("choixSpecialite");
	// On vide les tableaux et on les caches
	cleanElement("tableauPresentation");
	cleanElement("tableauData");
	hideElement("zoneTableau");
	// On vide les champs de Status/Information
	cleanElement("tableauPresentationInfo");
	hideElement("tableauPresentationInfo");
	cleanElement("tableauDataInfo");
	hideElement("tableauDataInfo");
	fillElement("statusInfo", MSG_NBSP);
	if(displayPresentation){
		// On affiche la présentation par défaut
		displayElement("defaultPresentation");
	}else{
		// On cache la présentation par défaut
		hideElement("defaultPresentation");
	}
}

// Cache l'élément demandé
function hideElement(name){	
	var element = document.getElementById(name);
	element.style.display='none';
}

// Affiche l'élément demandé
function displayElement(name){	
	var element = document.getElementById(name);
	element.style.display='block';
}

// Rempli l'élément demandé avec le message passé en paramètre
function fillElement(name, msg){	
	var element = document.getElementById(name);
	element.innerHTML = msg;
}

// Vide le contenu du tableau demandé (ainsi que l'information associée)
function cleanElement(name){
	var element = document.getElementById(name);
	element.innerHTML = "";
}

// Rempli le tableau demandé avec le tableau passé en paramètre et rempli le message (si fourni)
function fillTableau(name, data, message){
	cleanElement(name);
	if(message){
		displayElement(name + "Info");
		fillElement(name + "Info", message);
	}
	var tableau = document.getElementById(name);
	tableau.appendChild(getTableau(data, true));
}

function displayPatients(){	
	initContent(false);
	fillTableau("tableauData", patients, MSG_LISTE_PATIENTS);
	displayElement("zoneTableau");
}

function displayEtablissements(){
	initContent(false);
	fillTableau("tableauData", etablissements, MSG_LISTE_ETABLISSEMENT);
	displayElement("zoneTableau");
}

function displayHospitalisations(){
	initContent(false);
	fillTableau("tableauData", hospitalisations, MSG_LISTE_HOSPITALISATION);
	displayElement("zoneTableau");
}

function displayHospByPatient(){
	initContent(false);
	// On fait apparaitre le block traité
	displayElement("choixPatient");
	// 	Remplissage du Select	
	var selectPatient = document.getElementById("selectPatient");
	selectPatient.options.length = 0;
	selectPatient.options[0] = new Option(MSG_CHOISIR);
	for(var p in patients){
		selectPatient.options[selectPatient.options.length] = new Option(patients[p].dossier + " (" + patients[p].nom + " " + patients[p].prenom + ")");
	}	
}

function displayHospByPatientData(){	
	// On cache le select	
	hideElement("choixPatient");

	// Patient choisi
	var selectPatient = document.getElementById("selectPatient");
	var selected = selectPatient.selectedIndex -1;	// Élement choisi
	
	// Si on a choisi un patient
	if(selected >= 0){
		var infoPatient = patients[selectPatient.selectedIndex-1];
		var tabHosp = [];
		var pos = 0;
		var tabInfoPatient = [infoPatient];

		// Affichage des informations sur le patient
		fillTableau("tableauPresentation", tabInfoPatient, MSG_INFO_PATIENT);

		// Récupération des hospitalisation du patient
		for(var h in hospitalisations){
			if(hospitalisations[h].dossier === infoPatient.dossier){
				tabHosp[pos++] = hospitalisations[h];
			}
		}
		if(tabHosp.length > 0){
			// On rempli et on  affiche le tableau
			fillTableau("tableauData", tabHosp, MSG_LISTE_HOSPITALISATION);
			displayElement("zoneTableau");
			fillElement("statusInfo", MSG_NBSP);
		}else{
			fillElement("statusInfo", MSG_NO_HOSPITALISATION);
			hideElement("zoneTableau");
		}
	}
	// Sinon on cache le tableau
	else{
		hideElement("zoneTableau");
	}
}


function displayHospEtablissement(){
	initContent(false);

	// On fait apparaitre le block traité
	displayElement("choixEtablissement");

	// 	Remplissage du Select	
	var selectEtablissement = document.getElementById("selectEtablissement");
	selectEtablissement.options.length = 0;
	selectEtablissement.options[0] = new Option(MSG_CHOISIR);
	for(var p in etablissements){
		selectEtablissement.options[selectEtablissement.options.length] = new Option(etablissements[p].code_etablissement + " (" + etablissements[p].nom + ")");
	}
}

function displayHospSpecialite(){

	// Établissement choisi
	var selectEtablissement = document.getElementById("selectEtablissement");
	var position = selectEtablissement.selectedIndex-1;
	if(position >= 0){
		var codeEtablissement = etablissements[position].code_etablissement;

		// On fait apparaitre le block traité
		displayElement("choixSpecialite");

		// On crée le tableau des spécilité
		var tabSpe = [];
		var tabSpeUnique = [];
		for(var s in hospitalisations){
			if(hospitalisations[s].code_etablissement == codeEtablissement){
				tabSpe[s] = hospitalisations[s].specialite;
			}
		}
		// Ne garde que les valeurs uniques ; Source : https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
		tabSpeUnique = tabSpe.filter(function(item, pos) {
			return tabSpe.indexOf(item) == pos;
		})

		// 	Remplissage du Select	
		var selectSpecialite = document.getElementById("selectSpecialite");
		selectSpecialite.options.length = 0;
		selectSpecialite.options[0] = new Option(MSG_CHOISIR);
		for(var s in tabSpeUnique){
			selectSpecialite.options[selectSpecialite.options.length] = new Option(tabSpeUnique[s]);
		}
	}else{
		// On cache le Select des spécialités
		hideElement("choixSpecialite");
	}
}

function displayHospEtabSpeData(){	
	// On cache tout le bazard	
	initContent(false);

	// Spécialité choisie
	var selectSpecialite = document.getElementById("selectSpecialite");
	var specialiteChoisi = selectSpecialite.options[selectSpecialite.selectedIndex].text;	// Élement choisi

	// Établissement choisi
	var selectEtablissement = document.getElementById("selectEtablissement");
	var infoEtablissement = etablissements[selectEtablissement.selectedIndex-1];

	var tabInfoEtablissement = [infoEtablissement];
	var tabActParSpe = [];
	var pos = 0;

	// Affichage des informations sur l'établissement
	fillTableau("tableauPresentation", tabInfoEtablissement, MSG_INFO_ETABLISSEMENT);

	// Récupération des actes de l'établissement pour la spécialité choisie
	for(var h in hospitalisations){
		if(hospitalisations[h].code_etablissement == infoEtablissement.code_etablissement
			&& hospitalisations[h].specialite == specialiteChoisi){
				tabActParSpe[pos++] = hospitalisations[h];
		}
	}

	// On rempli et on  affiche le tableau
	fillTableau("tableauData", tabActParSpe, MSG_LISTE_ACTS_PAR_SPECIALITE);
	displayElement("zoneTableau");
	fillElement("statusInfo", MSG_NBSP);		

}



// Permet de mettre en évidence le bouton du menu sur lequel on a cliqué
function setMenuSelected(current){	
	var menu = document.getElementById("menu").childNodes;
	// On ôte la classe "selected" de tous les éléments de la liste et on l'applique à celle sélectionnée
	for(var v in menu){
		if(menu[v].nodeName === "LI"){
			menu[v].setAttribute("class","");
		}
	}
	current.setAttribute("class","selected");
}


// Construction de la Table avec les données reçues en paramètre
function getTableau(tab, hasHeader){

	var nbElement = tab.length;
	var table = document.createElement("table");
	table.setAttribute("id", "tableData");	
	var tableHeader = document.createElement("thead");
	var tableBody = document.createElement("tbody");
	var row;

	//Get the count of columns.
	var columnCount = 0;
	for(var o in tab[0]){
		columnCount++;
	}

	if(hasHeader){
		//Add the header row.
		row = tableHeader.insertRow(-1);
		for (var p in tab[0]) {
			var headerCell = document.createElement("th");
			headerCell.innerHTML = getNeatNameOf(p);
			row.appendChild(headerCell);
		}
	}

	//Add the data rows.
	for (var i = 0; i < nbElement; i++) {
		row = tableBody.insertRow(-1);
		for (var p in tab[i]) {
			var cell = row.insertCell(-1);
			cell.innerHTML = tab[i][p];
		}
	}

	// Construct the Table
	table.appendChild(tableHeader);
	table.appendChild(tableBody);	
	return table;
}

// Permet de modifier le nom d'une colonne issue de JSON en un nom plus "propre"
function getNeatNameOf(name){
	switch(name){
		case "nom":
		case "sexe":
		case "adresse":
			return name.charAt(0).toUpperCase() + name.slice(1);
		case "prenom":
			return "Prénom";		
		case "specialite":
			return "Spécialité";
		case "dossier":
			return "No de dossier";
		case "date_naissance":
			return "Date de naissance";
		case "code_etablissement":
			return "Code de l'établissement";
		case "code_postal":
			return "Code postal";
		case "no_tel":
			return "Téléphone";	
		case "date_admission":
			return "Date d'émission" ;
		case "date_sortie":
			return "Date de sortie";
		default:
			return name;
	}
}

// Formate le numéro de téléphone
function formatPhoneNumber(number){
	return "(" + number.substr(0, 3) + ") " + number.substr(3, 3) + "-" + number.slice(6);
}

// Formate la date de naissance
function formatBirthDate(birthDate){
	return birthDate; //TODO
}

