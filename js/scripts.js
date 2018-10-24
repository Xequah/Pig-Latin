var latintranslate = function(vowel){
  var vowels = ["a", "e", "i", "o", "u"];

 // debugger;
  var output = "";
  if (vowels.includes(vowel[0])) {
    output += vowel.substring(0, vowel.length) + "way";
  } else {
    output += vowel.substring(0, vowel.length) + "ay";
  }
  console.log(output);
  return output;
}


$(document).ready(function(){
  $("#translate").submit(function(event){
    var piglatin = ($("#words").val());
    var phrase = latintranslate(piglatin);
    $("#output").text(phrase);
    event.preventDefault();
  });
});
