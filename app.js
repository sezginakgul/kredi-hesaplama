const krediSelect = document.querySelector(".k-select");
// console.log(krediSelect);
const vade = document.querySelector("#v-input");
// console.log(vade);
const tutar = document.querySelector("#t-input");
// console.log(tutar);
const hesapla = document.querySelector(".hesapla");
// console.log(hesapla);
const reset  = document.querySelector(".reset");
// console.log(reset);

//? Oranlar
let oran = 0;

hesapla.addEventListener("click", () => {
  if (krediSelect.value == "Konut Kredisi") {
    oran = 1.29;
  }
  if (krediSelect.value == "Ihtiyac Kredisi") {
    oran = 1.99;
  }
  if (krediSelect.value == "Arac Kredisi") {
    oran = 1.79;
  }
  let hesFaiz =
    (tutar.value * (oran / 100) * (1 + oran / 100) ** vade.value) /
    ((1 + oran / 100) ** vade.value - 1);

  let toplamTutar = (hesFaiz * vade.value).toFixed(2);
  // console.log(toplamTutar);

  if (krediSelect.value === "Seciniz" || !krediSelect.value || !vade.value || !tutar.value) {
    // document.querySelector("body").className = "bg-danger"
    alert("Kredi türü, Vade ve Tutarı Giriniz...");
  } else {
    
    document.querySelector(".table").innerHTML = `
      <thead>
        <h2 class="mt-3 text-danger">Kredi Bilgileri</h2>
      </thead>
      <tr class="table-active">
              <td>Kredi Miktari</td>
              <td>${tutar.value}₺</td>
              <td>Kredi Tipi</td>
              <td>${krediSelect.value}</td>
            </tr>
            <tr class="table-active">
              <td>Vade</td>
              <td>${vade.value}</td>
              <td>Faiz Orani</td>
              <td>${oran}</td>
            </tr>
            <tr class="table-active">
              <td>Toplam Tutar</td>
              <td>${toplamTutar}₺</td>
              <td>Taksit Tutari</td>
              <td>${hesFaiz.toFixed(2)}₺</td>
            </tr>
          </tbody>
        </table>`;
  }
});

reset.addEventListener("click", ()=> {
  krediSelect.value = "Seciniz"
  vade.value = "";
  tutar.value = ""
  document.querySelector(".table").textContent = ""
})
