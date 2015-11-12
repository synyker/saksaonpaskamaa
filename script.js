var goods = [
  'olut on halpaa',

];

var bads = [
  'kaupat eivät ole auki sunnuntaisin',
  'kaupat sulkeutuvat kello 20:00',
  'ruoka-annosten kuvaaminen on tekijänoikeusrikos'
];

var imageCount = 22;

var speed = 1600;
var bool = true;
var newImgNumber = 1;

function setImage() {

  newImgNumber = newImgNumber < 22 ? newImgNumber += 1 : 1;

  $('.bg-image-' + bool)
    .fadeOut(speed*2, function() {
        $(this).css('background-image','url("img/saksa-' + newImgNumber + '.jpg")');
    });
    //.delay(speed*2)

  bool = !bool;
  $('.bg-image-' + bool)
    .css('background-image','url("img/saksa-' + newImgNumber + '.jpg")')
    //.delay(speed*2)
    .fadeIn(speed*2);

  var max = newImgNumber + 3 < 22 ? newImgNumber + 3 : 22;
  for (var i = newImgNumber; i < max; i++) {
    $("<img />").attr("src", 'img/saksa-' + i + '.jpg');
  }

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

  setTimeout(setText, speed*3);
}

$(document).ready(function() {

  $('.good').text(goods[Math.floor(Math.random()*goods.length)]);
  $('.bad').text(bads[Math.floor(Math.random()*bads.length)]);
  $('.bg-image').css('background-image','url("img/saksa-' + (Math.floor(Math.random()*imageCount)+1) + '.jpg")');

  setImage();
  setText();
});
