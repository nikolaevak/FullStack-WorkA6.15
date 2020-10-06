const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

let missCount  = 0; // количество промахов 

let btnStart = $("#button-start")
let btnReload = $("#button-reload")


// btnReload.click(function(){
//   firstHitTime  = getTimestamp();
//   console.log ('time', firstHitTime)
// })


btnStart.click(function(){
  firstHitTime  = getTimestamp();
  console.log ('time', firstHitTime)
})



function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
  
  let divSelector = randomDivId();
  $('.game-field').removeClass("target"); // удалить класс перед поиском 

  $(divSelector).addClass("target");
    // TODO: помечать target текущим номером
  $('.target').text(hits + 1); 
  // FIXME: тут надо определять при первом клике firstHitTime
  if (hits === maxHits) {
    endGame();
   }
   
 };


function endGame() {
  // FIXME: спрятать игровое поле сначала
  $('.page-1').addClass("d-none");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#count").text(missCount);
  $("#win-message").removeClass("d-none");
  
}


function handleClick(event) {
 
     
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  if ($(event.target).hasClass("target")) {
      $('.game-field').text('')
   // $('.game-field').removeClass("target");
      $('.miss').removeClass("miss");
      hits = hits + 1;
    round();
  }
   else {
    $(event.target).addClass("miss")
   // hits = hits + 1;
   missCount = missCount + 1 ;
    $('.game-field').text('');
    setTimeout(() => {  $('.game-field').removeClass('miss'); }, 100);
    round();
  }

  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  btnStart.click(function(){
    firstHitTime  = getTimestamp();
    console.log ('time', firstHitTime)
  })
  
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
