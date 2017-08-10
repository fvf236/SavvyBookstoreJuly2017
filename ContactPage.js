var puppyObject = [{
  name: 'Henry',
  age: 0.5,
  breed: 'Aussie',
  food: 'kibble',
  toys: ['tennis ball', 'chew toy'],
  picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
},
{
name: 'Tilly',
age: 5,
breed: 'Mutt',
food: 'kibble',
toys: ['bone', 'kong', 'squeaky toy'],
picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
name: 'Apollo',
age: 10,
breed: 'Labrador',
food: 'absolutely anything',
toys: ['old sock', 'other old sock', 'more old socks'],
picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]

 - - - - - -
for (var i = 0; i < puppyObject.length; i++) {
  console.log(puppyObject[i].name)
}

var allToys = [ ]

for (var i = 0; i < puppyObject.length; i++) {
   allToys = allToys.concat (puppyObject[i].toys)
 }

 console.log(allToys);
 - - -   - - -- - -

 var friends = ['ada', 'will', 'bianca', 'abe']
 var enemies = ['john', 'alice']

 var frenemies = friends.concat(enemies)

 console.log(frenemies)
 console.log(friends, enemies)
 - - - - - - - - - - - - - - - - - - - - - - -
 var friends = ['ada', 'will', 'bianca', 'abe']
var enemies = ['john', 'alice']

var dogtoy = name.concat(allToys)

console.log(dogtoy)
console.log(name, allToys)
------ - - -
var log_me = function(word){
  console.log(word)
}

words.forEach(log_me)
 = - - - - - - - - - - - - - - -

 var findToy = function (puppies, toy) {
 }
    for (var i = 0; i < puppies.length; i++) {
      for(var a = 0; a< puppies[i].toys.length; a++) {
          if(puppies.toys[a]===toy) return puppies[i] name
      }
    }
 }
   console.log(puppies, toys)
 }

<li><a href="https://www.linkedin.com/in/ciara-nelson-13598724/">LinkedIn</a></li>

var answerLogger = function(fn) {
    var output = (fn);

     $("#answer").text(output);
};

var answerLogger = function(arr){
  $("#answer").html("<ol></ol>");

  arr.forEach( function(fn){
    var answer = fn();

    $("#answer > ol").append("<li>" + output + "</li>");
  });
};

var answerLogger = function(fnArr) {
  $('div#answer').html('<ol><ol>')
  for(var i = 0; i < fnARR.length; i++)  {
  $('#answer ol').append("<li>" + fnArr[i]() + "<li>")
  }
}

answerLogger(
  [
    function()_ {return "I should appear in div#answer"};
    function()_ {return "I should appear in div#answer"};
    function()_ {return "I should appear in div#answer"};
  ]
)




  answerLogger(
    [
      function()_ {return "I should appear in div#answer"};
      function()_ {return "I should appear in div#answer"};
      function()_ {return "I should appear in div#answer"};
   ]
  )
