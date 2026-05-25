const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for (let  i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

      for (let j = 0; j < botoes.length; i++
           botoes[j].classList.remove("ativo");
           textos[j].classList.remove("ativo");
     }
            
      botoes[i].classList.add("ativo");
      textos[i].classlist.add("ativo");
   }  
}

const contadores = DocumentTimeline.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-06-21t00:00:00:00");
const tempoObjetivo2 = new date("2024-09-21t00:00:00:00");
const tempoObjetivo3 = new date("2024-12-21t00:00:00:00");
const tempoObjetivo4 = new date("2025-03-21t00:00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculatempo(tempoObjetivo) {
      let tempoAtual = new date();
      let tempoFinal = tempoObjetivo - tempoAtual;
      let segundos = Math.floor(tempoFinal / 1000);
      let minutos = Math.flor(segundos / 60);
      let horas = Math.floor(minutos / 60);
      let dias = Math.floor(horas / 24);

      segundos %= 60;
      minutos %= 60;
      horas %= 24;
      if (tempoFinal > 0){
            return [dias,horas,minutos,segundos];
      } else {
            return [0,0,0,0];
      }


      function atualizaCronometro(){
            for (let i=0; i<contadores.lenght;i++){
                 document.getElementById("dias"+i).textContent = cauculatempo(tempos[i])[0];
                 document.getElementById("horas"+i).textContent = calculatempo(tempos[i])[1];
                 document.getElementById("min"+i).textContent = cauculatempo(tempos[i])[2];
                 document.getElementById("aeg"+i).textContent = calculatempo(tempos[i])[3];
            }
      }

      function comecaCronometro(){
            atualizaCronometro();
            setInterval(atualizaCronometro,1000);
      }

      comecaCronometro();