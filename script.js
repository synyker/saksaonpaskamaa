var goods = [
  'olut on halpaa',
  'Amazon Prime on vuoden ilmainen opiskelijoille',
  'ravintoloista voi ostaa alkoholia mukaan',
  'luennolla on ihan okei juoda olutta',
  'viini on halpaa',
  'alkoholi on halpaa',
  'Saksassa on vuoria',
  'sää voi olla kaunis marraskuussakin',
  'opiskelijaruoka maksaa joskus vain euron',
  'baarit voivat olla auki aamukuuteen asti',
  'ruokakaupasta saa viiniä',
  'ruokakaupasta saa väkeviä viinoja',
  'Saksassa on paljon pieniä leipomoita',
  'Saksassa on paljon lihakauppoja',
  'julkinen liikenne toimii loistavasti',
  'olut maksaa ravintoloissa lähes yhtä vähän kuin vesi',
  'osavaltioiden sisäinen rajaton julkisten kulkuvälineiden lippu maksaa halvimmillaan alle 9 euroa',
  'muutaman tunnin matkustamalla pääsee useisiin eri Keski-Euroopan maihin',
  'HERKULLINEN OLUT',
  'Oktoberfest',
  'Saksalainen ruoka on herkullista',
  'loputon valikoima makkaroita',
  'kaupungeissa on kauniita kulttuurihistoriallisia rakennuksia',
  'Alpeille laskettelemaan meneminen maksaa pennosia',
  'oluen juominen aamiaisella on ihan okei',
  'Döner on herkullista',
  'Döner on halpaa',
  'ruokakaupoilla on kattava valikoima paikallisia oluita',
  'vahvemmat oluet eivät ole välttämättä juuri miedompia kalliimpia',
  'saksalaiset osaavat käyttäytyä myös juodessaan'
];

var bads = [
  'kaupat eivät ole auki sunnuntaisin',
  'kaupat sulkeutuvat kello 20:00',
  'ruoka-annosten kuvaaminen on tekijänoikeusrikos',
  'tavallisesta ruokakaupasta ei saa korianteria',
  'DHL jättää paketit satunnaiselle naapurille',
  'DHL ei löydä oikeaa rakennusta',
  'internet-yhteydet ovat kalliita',
  'internet-yhteyksissä on datarajoituksia',
  'TV-lupamaksu on 17,50€/kk',
  'muuttoilmoitus tehdään konttorissa, jossa odotusajat ovat yleensä tunteja',
  'opiskelijaruoka on välillä huonompaa kuin Unicafessa',
  'ilmaisia julkisia vessoja ei ole edes ostoskeskuksissa',
  'kaikki Saksan televisio-ohjelmat ovat dubattuja tai valmiiksi saksankielisiä',
  'ravintoloista saa vain pullotettua vettä, ei ollenkaan hanavettä',
  'vesi maksaa ravintoloissa lähes yhtä paljon kuin olut',
  'Münchenin kraanavesi maistuu pahalta',
  'opiskelijaravintoloissa saa vettä ainoastaan pullossa',
  'yliopistojen lukukausien alkamisajankohdat poikkeavat Suomen yliopistoista',
  'asuntojen vuokrat ovat kalliita Münchenissä',
  'kauppojen kassoilla ei ole erillistä pakkausaluetta',
  '"Unfortunately this video is not available in your country"',
  'Reinheitsgebot rajoittaa eri oluttyyppien valmistusta Baijerissa',
  'saksalainen asiakaspalvelu on vaihtelevan töykeää'
];

var badStack = [];
var goodStack = [];
var imageStack = [];

var imageCount = 107;

var speed = 2300;
var bool = true;
var newImgNumber = 1;

function setImage() {

  $('.bg-image-' + bool)
    .fadeOut(speed, function() {
        $(this).css('background-image','url("img/saksa-' + newImgNumber + '.jpg")');
    });

  bool = !bool;
  $('.bg-image-' + bool)
    .css('background-image','url("img/saksa-' + newImgNumber + '.jpg")')
    .fadeIn(speed);

  if (imageStack.length == 0) {
    imageStack = generateStack(imageCount);
  }
  newImgNumber = imageStack.pop() + 1;
  $('<img />').attr('src', 'img/saksa-' + newImgNumber + '.jpg');


  setTimeout(setImage, speed*3);
}

function setText() {

  if (goodStack.length == 0) {
    goodStack = generateStack(goods.length);
  }
  var newGoodNumber = goodStack.pop();


  if (badStack.length == 0) {
    badStack = generateStack(bads.length);
  }
  var newBadNumber = badStack.pop();

  $('.text')
    .fadeIn(speed/2)
    .delay(speed*2)
    .fadeOut(speed/2, function() {
      $('.good').text(goods[newGoodNumber]);
      $('.bad').text(bads[newBadNumber]);
    })

  setTimeout(setText, speed*3);
}

function generateStack(size) {

  var o = [];
  for (var i = 0; i < size; i++) {
    o.push(i);
  }

  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

$(document).ready(function() {

  var parameter = parseInt(location.search.split('speed=')[1]);
  speed = $.isNumeric(parameter) ? parameter : 2300;

  goodStack = generateStack(goods.length);
  badStack = generateStack(bads.length);
  imageStack = generateStack(imageCount);

  $('.good').text(goods[goodStack.pop()]);
  $('.bad').text(bads[badStack.pop()]);

  newImgNumber = Math.floor(Math.random()*imageCount)+1;
  $('.bg-image').css('background-image','url("img/saksa-' + (imageStack.pop()+1) + '.jpg")');

  setImage();
  setText();
});
