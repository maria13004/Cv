function setActiveStyleSheet(title) {
  var links = document.querySelectorAll('link[rel*="stylesheet"]');
  var i = links.length;
  while (links[--i]) {
    links[i].disabled = links[i].getAttribute('title') !== title;
  }
}

var myDate = new Date();
var hours = myDate.getHours();

if (5 <= hours && hours < 9) // 5-9 jour
{
  document.body.className = 'vert';
}
else if (9 <= hours && hours < 16) // 9-17 jour
{
 document.body.className = 'jaune';
}
else if (16 <= hours && hours < 22) // 16-22 soir
{
 document.body.className = 'bleu';
}
else if (22 <= hours || hours < 5) // 22-5 nuit
{
 document.body.className = 'bleufonce';
}

