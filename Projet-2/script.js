const effectifU18F = [
    { id: 1, nom: "Martin", prenom: "Chloé", anneeNaissance: 2009, categoriePoste: "Avant", poste: "Pilier gauche", poids: 72, taille: 168, disponible: true },
    { id: 2, nom: "Bernard", prenom: "Manon", anneeNaissance: 2010, categoriePoste: "Avant", poste: "Pilier gauche", poids: 75, taille: 170, disponible: true },
    { id: 3, nom: "Thomas", prenom: "Camille", anneeNaissance: 2011, categoriePoste: "Avant", poste: "Pilier gauche", poids: 68, taille: 165, disponible: true },
    { id: 4, nom: "Lefebvre", prenom: "Rose", anneeNaissance: 2009, categoriePoste: "Avant", poste: "Pilier droit", poids: 78, taille: 173, disponible: true },
    { id: 5, nom: "Giraud", prenom: "Sarah", anneeNaissance: 2010, categoriePoste: "Avant", poste: "Pilier droit", poids: 74, taille: 171, disponible: false },
    { id: 6, nom: "Roussel", prenom: "Inès", anneeNaissance: 2011, categoriePoste: "Avant", poste: "Pilier droit", poids: 73, taille: 169, disponible: true },
    { id: 7, nom: "Petit", prenom: "Emma", anneeNaissance: 2009, categoriePoste: "Avant", poste: "Talonneuse", poids: 65, taille: 162, disponible: true },
    { id: 8, nom: "Robert", prenom: "Léa", anneeNaissance: 2010, categoriePoste: "Avant", poste: "Talonneuse", poids: 67, taille: 164, disponible: true },
    { id: 9, nom: "Leroy", prenom: "Romane", anneeNaissance: 2011, categoriePoste: "Avant", poste: "Talonneuse", poids: 64, taille: 160, disponible: true },
    { id: 10, nom: "Richard", prenom: "Zoé", anneeNaissance: 2010, categoriePoste: "Avant", poste: "Deuxième ligne droit", poids: 74, taille: 178, disponible: true },
    { id: 11, nom: "Durand", prenom: "Alice", anneeNaissance: 2011, categoriePoste: "Avant", poste: "Deuxième ligne droit", poids: 76, taille: 180, disponible: false },
    { id: 12, nom: "Dubois", prenom: "Clara", anneeNaissance: 2009, categoriePoste: "Avant", poste: "Deuxième ligne gauche", poids: 71, taille: 175, disponible: true },
    { id: 13, nom: "Roux", prenom: "Juliette", anneeNaissance: 2010, categoriePoste: "Avant", poste: "Deuxième ligne gauche", poids: 72, taille: 176, disponible: true },
    { id: 14, nom: "Moreau", prenom: "Louise", anneeNaissance: 2011, categoriePoste: "Avant", poste: "3eme ligne aile", poids: 66, taille: 170, disponible: true },
    { id: 15, nom: "Laurent", prenom: "Charlotte", anneeNaissance: 2009, categoriePoste: "Avant", poste: "3eme ligne aile", poids: 69, taille: 172, disponible: true },
    { id: 16, nom: "Simon", prenom: "Lucie", anneeNaissance: 2010, categoriePoste: "Avant", poste: "3eme ligne aile", poids: 67, taille: 169, disponible: true },
    { id: 17, nom: "Michel", prenom: "Maëlys", anneeNaissance: 2011, categoriePoste: "Avant", poste: "3eme ligne aile", poids: 68, taille: 171, disponible: true },
    { id: 18, nom: "David", prenom: "Agathe", anneeNaissance: 2009, categoriePoste: "Avant", poste: "3eme ligne aile", poids: 70, taille: 174, disponible: true },
    { id: 19, nom: "Bertrand", prenom: "Salomé", anneeNaissance: 2010, categoriePoste: "Avant", poste: "3eme ligne centre", poids: 65, taille: 168, disponible: true },
    { id: 20, nom: "Duval", prenom: "Jade", anneeNaissance: 2011, categoriePoste: "Avant", poste: "3eme ligne centre", poids: 68, taille: 172, disponible: true },
    { id: 21, nom: "Morel", prenom: "Eva", anneeNaissance: 2011, categoriePoste: "Trois-quart", poste: "Demi de mêlée", poids: 58, taille: 158, disponible: true },
    { id: 22, nom: "Fournier", prenom: "Anaïs", anneeNaissance: 2009, categoriePoste: "Trois-quart", poste: "Demi de mêlée", poids: 60, taille: 162, disponible: false },
    { id: 23, nom: "Blanc", prenom: "Assa", anneeNaissance: 2010, categoriePoste: "Trois-quart", poste: "Demi de mêlée", poids: 57, taille: 159, disponible: true },
    { id: 24, nom: "Girard", prenom: "Jeanne", anneeNaissance: 2011, categoriePoste: "Trois-quart", poste: "Demi d'ouverture", poids: 62, taille: 166, disponible: true },
    { id: 25, nom: "Bonnet", prenom: "Pauline", anneeNaissance: 2009, categoriePoste: "Trois-quart", poste: "Demi d'ouverture", poids: 59, taille: 164, disponible: true },
    { id: 26, nom: "Gauthier", prenom: "Océane", anneeNaissance: 2010, categoriePoste: "Trois-quart", poste: "Ailier", poids: 61, taille: 165, disponible: true },
    { id: 27, nom: "Dupont", prenom: "Mathilde", anneeNaissance: 2011, categoriePoste: "Trois-quart", poste: "1er Centre", poids: 63, taille: 168, disponible: true },
    { id: 28, nom: "Lambert", prenom: "Clémence", anneeNaissance: 2009, categoriePoste: "Trois-quart", poste: "1er Centre", poids: 65, taille: 170, disponible: true },
    { id: 29, nom: "Perez", prenom: "Capucine", anneeNaissance: 2010, categoriePoste: "Trois-quart", poste: "2eme Centre", poids: 61, taille: 165, disponible: false },
    { id: 30, nom: "Rousseau", prenom: "Nina", anneeNaissance: 2011, categoriePoste: "Trois-quart", poste: "2eme Centre", poids: 64, taille: 169, disponible: true },
    { id: 31, nom: "Vincent", prenom: "Luna", anneeNaissance: 2009, categoriePoste: "Trois-quart", poste: "1er Centre", poids: 63, taille: 167, disponible: true },
    { id: 32, nom: "Faure", prenom: "Mia", anneeNaissance: 2010, categoriePoste: "Trois-quart", poste: "Ailiere", poids: 58, taille: 163, disponible: true },
    { id: 33, nom: "Andres", prenom: "Marion", anneeNaissance: 2011, categoriePoste: "Trois-quart", poste: "Ailiere", poids: 56, taille: 161, disponible: true },
    { id: 34, nom: "Guerin", prenom: "Lilou", anneeNaissance: 2009, categoriePoste: "Trois-quart", poste: "Arrière", poids: 60, taille: 167, disponible: true },
    { id: 35, nom: "Boyer", prenom: "Elise", anneeNaissance: 2010, categoriePoste: "Trois-quart", poste: "Arrière", poids: 62, taille: 170, disponible: true }
];

const tableBody = document.getElementById('playerTableBody');
const selectPoste = document.getElementById('parPoste');
const selectDispo = document.getElementById('dispoInput');
const selectYear = document.getElementById('birthYear');

function afficherEffectif(donnees) {
    tableBody.innerHTML = '';

    if (donnees.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" class="empty-message">Aucune joueuse ne correspond aux critères sélectionnés.</td></tr>';
        return;
    }

    donnees.forEach(function(joueuse) {
        const tr = document.createElement('tr');

        tr.addEventListener('click', function() {
            window.location.href = 'playerpage.html?id=' + joueuse.id;
        });

        const statutDispo = joueuse.disponible
            ? '<span class="statut-disponible"> Disponible</span>'
            : '<span class="statut-indisponible"> Indisponible</span>';

        tr.innerHTML = '<td>' + joueuse.poste + '</td>' +
            '<td>' + joueuse.nom + '</td>' +
            '<td>' + joueuse.prenom + '</td>' +
            '<td>' + joueuse.anneeNaissance + '</td>' +
            '<td>' + statutDispo + '</td>';

        tableBody.appendChild(tr);
    });
}

function filtrerEffectif() {
    const filtrePoste = selectPoste.value;
    const filtreDispo = selectDispo.value;
    const filtreYear = selectYear.value;

    const donneesFiltrees = effectifU18F.filter(function(joueuse) {
        let matchPoste = true;
        if (filtrePoste !== "") {
            matchPoste = (joueuse.poste === filtrePoste);
        }

        let matchDispo = true;
        if (filtreDispo !== "") {
            const dispoBoolean = (filtreDispo === "true");
            matchDispo = (joueuse.disponible === dispoBoolean);
        }

        let matchYear = true;
        if (filtreYear !== "") {
            matchYear = (joueuse.anneeNaissance.toString() === filtreYear);
        }

        return matchPoste && matchDispo && matchYear;
    });

    afficherEffectif(donneesFiltrees);
}

selectPoste.addEventListener('change', filtrerEffectif);
selectDispo.addEventListener('change', filtrerEffectif);
selectYear.addEventListener('change', filtrerEffectif);

afficherEffectif(effectifU18F);