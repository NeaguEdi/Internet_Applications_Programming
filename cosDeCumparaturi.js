function afiseazaCos() {
  var cos = JSON.parse(window.sessionStorage.getItem('cos')) || [];
  var container = document.getElementById('cos');
  container.innerHTML = "";

  if (cos.length === 0) {
    container.innerHTML = "<p>Coșul este gol.</p>";
    return;
  }

  cos.forEach((produs, index) => {
    container.innerHTML += `
      <div>
        <strong>${produs.nume}</strong> - ${produs.pret} lei x ${produs.cantitate}
        <button onclick="modificaCantitate(${index}, 1)">+</button>
        <button onclick="modificaCantitate(${index}, -1)">-</button>
        <button onclick="stergeProdus(${index})">Șterge</button>
      </div>
   `;
  });
}

function modificaCantitate(index, delta) {
  var cos = JSON.parse(window.sessionStorage.getItem('cos')) || [];
  cos[index].cantitate += delta;
  if (cos[index].cantitate <= 0) cos.splice(index, 1);
  window.sessionStorage.setItem('cos', JSON.stringify(cos));
  afiseazaCos();
}

function stergeProdus(index) {
  var cos = JSON.parse(window.sessionStorage.getItem('cos')) || [];
  cos.splice(index, 1);
  window.sessionStorage.setItem('cos', JSON.stringify(cos));
  afiseazaCos();
}

function adaugaInCos(nume, pret) {
  var cos = JSON.parse(window.sessionStorage.getItem('cos')) || [];
  var produs = cos.find(p => p.nume === nume);

  if (produs) {
    produs.cantitate += 1;
  } else {
    cos.push({ nume, pret, cantitate: 1 });
  }

  window.sessionStorage.setItem('cos', JSON.stringify(cos));
  alert("Produs adăugat în coș!");
}  

window.onload = afiseazaCos;