const champNumInput = document.getElementById('champNumInput');
const monFieldset = document.getElementById('monFieldset');
const submitBtn = monFieldset.querySelector('input[type="submit"]');
const form = document.querySelector('form');
const resultDisplay = document.getElementById('resultDisplay');

const container = document.createElement('div');
monFieldset.insertBefore(container, submitBtn);

champNumInput.addEventListener('input', function() {
    const nbChamps = parseInt(champNumInput.value) || 0;
    container.innerHTML = '';

    for (let i = 1; i <= nbChamps; i++) {
        const bloc = document.createElement('div');
        bloc.className = 'solarFieldBlock';
        bloc.innerHTML =
            '<h4>Champ solaire ' + i + '</h4>' +
            '<div class="formGroup">' +
            '<label>Orientation :</label>' +
            '<select name="orientation_' + i + '" class="orientationSelect" required>' +
            '<option value="">-- Choisir --</option>' +
            '<option value="portrait">Portrait</option>' +
            '<option value="paysage">Paysage</option>' +
            '</select>' +
            '</div>' +
            '<div class="dimensionContainer"></div>' +
            '<div class="sensorsContainer"></div>';

        const selectOrientation = bloc.querySelector('.orientationSelect');
        const dimensionContainer = bloc.querySelector('.dimensionContainer');
        const sensorsContainer = bloc.querySelector('.sensorsContainer');

        selectOrientation.addEventListener('change', function() {
            const orientation = selectOrientation.value;
            dimensionContainer.innerHTML = '';
            sensorsContainer.innerHTML = '';

            if (!orientation) {
                return;
            }

            const texteLabel = (orientation === 'portrait') ? 'Nombre de lignes' : 'Nombre de colonnes';

            const dimDiv = document.createElement('div');
            dimDiv.className = 'formGroup';
            dimDiv.innerHTML =
                '<label>' + texteLabel + ' :</label>' +
                '<input type="number" name="dim_' + i + '" value="0" min="1" required class="dimInput">';

            dimensionContainer.appendChild(dimDiv);

            const dimInput = dimDiv.querySelector('.dimInput');

            dimInput.addEventListener('input', function() {
                const nbLignesCols = parseInt(dimInput.value) || 0;
                sensorsContainer.innerHTML = '';

                const typeCapteur = (orientation === 'portrait') ? 'ligne' : 'colonne';

                for (let j = 1; j <= nbLignesCols; j++) {
                    const sensorDiv = document.createElement('div');
                    sensorDiv.className = 'formGroup';
                    sensorDiv.innerHTML =
                        '<label>Capteurs ' + typeCapteur + ' ' + j + ' :</label>' +
                        '<input type="number" name="sensor_' + i + '_' + typeCapteur + '_' + j + '" value="0" min="0" required>';

                    sensorsContainer.appendChild(sensorDiv);
                }
            });
        });

        container.appendChild(bloc);
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dataObject = {
        "nom": document.getElementById('inputName').value,
        "numero de dossier": document.getElementById('inputDirNumber').value,
        "numero": document.getElementById('inputStreetNum').value,
        "denomination rue": document.getElementById('inputAdressName').value,
        "code postal": document.getElementById('zipCodeInput').value,
        "ville": document.getElementById('cityInput').value,
        "tel": document.getElementById('telInput').value,
        "email": document.getElementById('emailInput').value,
        "datas": []
    };

    const nbChamps = parseInt(champNumInput.value) || 0;

    for (let i = 1; i <= nbChamps; i++) {
        const selectOrientation = document.querySelector('select[name="orientation_' + i + '"]');
        const orientationValue = selectOrientation ? selectOrientation.value : '';

        const orientationFormattee = orientationValue ? orientationValue.charAt(0).toUpperCase() + orientationValue.slice(1) : '';

        const sensorInputs = document.querySelectorAll('input[name^="sensor_' + i + '_"]');
        const descriptionArr = [];

        for (let k = 0; k < sensorInputs.length; k++) {
            descriptionArr.push(parseInt(sensorInputs[k].value) || 0);
        }

        const champObj = {
            "champ": i,
            "orientation": orientationFormattee,
            "description": descriptionArr
        };

        dataObject.datas.push(champObj);
    }

    resultDisplay.textContent = JSON.stringify(dataObject, null, 2);
});