var boite = document.getElementById('date_heure');


function horloge() { 
    var now = new Date(); 

    var annee = now.getFullYear();
    var mois = now.getMonth()+1;

    mois = ('0'+mois).slice(-2);

    var jour = ('0'+now.getDate()   ).slice(-2);
    var joursemaine = now.getDay();
    var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

    var heure = ('0'+now.getHours()  ).slice(-2);
    var minutes = ('0'+now.getMinutes()).slice(-2);
    var secondes = ('0'+now.getSeconds()).slice(-2);

    boite.textContent = '' + tab_jour[joursemaine] + ' ' + jour + '/' + mois + '/' + annee + ' ' + heure + ':' + minutes + ':' + secondes;

}

setInterval("horloge()", 1000);