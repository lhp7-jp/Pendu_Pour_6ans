let animals_Farm = ['POULE', 'LAPIN', 'DINDON', 'COQ', 'VACHE'];
let cpt_Points = 0;

function Action_Jouer() {
    // Verif_Presence_Caract_Ds_Mot(Get_random_Animals)
    document.getElementById("demo").innerHTML = "Hello World";
}

function Get_random_Animals(liste) {
    return liste[Math.floor(Math.random() * liste.length)];
}

function Verif_Presence_Caract_Ds_Mot(mot, lettre) {
    let pos_Index_Lettre = new.Array();
    let work_War_Lettre = mot.split("");
    for (index_Lettre = 0; index_Lettre <= mot.length - 1; index_Lettre++) {
        if (lettre = work_War_Lettre(index_Lettre)) {
            pos_Index_Lettre.push(index_lettre);
            console.log(pos_Index_Lettre);
        }
        else {
            console.log(index_Lettre);
        }
    };
    Verif_Presence_Caract_Ds_Mot("poule", "e");
