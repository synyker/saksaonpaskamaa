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
  ''
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
  ''
];

var imageCount = 40;

var speed = 1600;
var bool = true;
var newImgNumber = 1;

function setImage() {

  $('.bg-image-' + bool)
    .fadeOut(speed*2, function() {
        $(this).css('background-image','url("img/saksa-' + newImgNumber + '.jpg")');
    });

  bool = !bool;
  $('.bg-image-' + bool)
    .css('background-image','url("img/saksa-' + newImgNumber + '.jpg")')
    .fadeIn(speed*2);

  setTimeout(setImage, speed*3);
}

function setText() {

  var newGoodNumber = Math.floor(Math.random()*goods.length);
  var newBadNumber = Math.floor(Math.random()*bads.length);

  $('.text')
    .fadeIn(speed)
    .delay(speed*2)
    .fadeOut(speed, function() {
      $('.good').text(goods[newGoodNumber]);
      $('.bad').text(bads[newBadNumber]);
    })

  newImgNumber = Math.floor(Math.random()*imageCount)+1 //newImgNumber < 22 ? newImgNumber += 1 : 1;
  $("<img />").attr("src", 'img/saksa-' + newImgNumber + '.jpg');

  setTimeout(setText, speed*3);
}

$(document).ready(function() {

  $('.good').text(goods[Math.floor(Math.random()*goods.length)]);
  $('.bad').text(bads[Math.floor(Math.random()*bads.length)]);

  newImgNumber = Math.floor(Math.random()*imageCount)+1;
  $('.bg-image').css('background-image','url("img/saksa-' + newImgNumber + '.jpg")');

  setImage();
  setText();
});
