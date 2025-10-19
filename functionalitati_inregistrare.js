function afisareInformatii() {
    var textDeAfisat = "";
    var inputs = document.getElementsByClassName("input_inregistreaza");

    Array.from(inputs).forEach(element => {
        var input = element.value.trim();
        if (input !== "") {
            textDeAfisat += "Ai completat: " + input + "<br>";
        }
    });

    var profilePhoto = document.querySelector('input[type="file"][name="pozaDeProfil"]');
    if (profilePhoto && profilePhoto.files.length > 0) {
        var fisier = profilePhoto.files[0];
                textDeAfisat += "Ai selectat fisierul: " + fisier.name + "<br>";
        
    }

    var genul = document.querySelector("select");
    if (genul && genul.value) {
        textDeAfisat += "Ai selectat genul: " + genul.value + "<br>";
    }

    var radio = document.querySelector("input[type='radio']:checked");
    if (radio) {
        textDeAfisat += "Copil: " + radio.value + "<br>";
    }

    var data_nasterii = document.querySelector("input[type='date']");
    if (data_nasterii && data_nasterii.value) {
        textDeAfisat += "Data nașterii: " + data_nasterii.value + "<br>";
    }

    var textArea = document.querySelector("textarea");
    if (textArea) {
        textDeAfisat += textArea.value + "<br>";
    }

    var fereastra = window.open('', '', 'width=400,height=400');
    fereastra.document.write('<html><head><title>Date utilizator</title></head><body>');
    fereastra.document.write('<h1>Datele utilizatorului:</h1><br>');
    fereastra.document.write(textDeAfisat);
    fereastra.document.write('</body></html>');
    fereastra.document.close();
}


/*
function afisareInformatieCuAlert(element)
{
    if (element.type === "text" || element.tagName.toLowerCase() === "textarea") {
        var valoareInput = element.value.trim(); 
        if (valoareInput !== "") {
            alert('Ai completat: ' + valoareInput);
        }
    }

    else if (element.tagName.toLowerCase() === "select") {
        var valoareSelect = element.value; 
        if (valoareSelect !== "") {
            alert('Ai ales: ' + valoareSelect);
        }
    }

    else if (element.type === "radio") {
        var name = element.name;
        var radioGroup = document.getElementsByName(name);
        var valoareRadio = "";
        
        for (var i = 0; i < radioGroup.length; i++) {
            if (radioGroup[i].checked) {
                valoareRadio = radioGroup[i].value;
                break;
            }
        }

        if (valoareRadio !== "") {
            alert('Ai selectat: ' + valoareRadio);
        }
    }
    
}*/