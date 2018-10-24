var latintranslate = function(vowel){
  var vowels = ["a", "e", "i", "o", "u"];

 // debugger;
  var output = "";
  if  (vowel [0] ==="q" && vowel [1] ==="u"){
    output += vowel.substring(2, vowel.length) + vowel[0] + vowel[1] + "ay";

  }else if (vowels.includes(vowel[0])) {
    output += vowel.substring(0, vowel.length) + "way";
  } else {
    output += vowel.substring(1, vowel.length) + vowel[0] + "ay";

  }
  //console.log(output);
  return output;
}


$(document).ready(function(){
  $("#translate").submit(function(event){
    var piglatin = ($("#words").val());
    var inputArray = piglatin.split(' ');
    var phrase = "";
    inputArray.forEach(function(word) {
      phrase += latintranslate(word) + " ";
    });
    // var phrase = latintranslate(piglatin);
    $("#output").text(phrase);
    event.preventDefault();

  });
});
