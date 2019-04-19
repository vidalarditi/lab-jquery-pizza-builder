// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".sauce").toggleClass("sauce-white");
  $(".btn-crust").toggleClass("active");
  $(".btn-sauce").toggleClass("active");
  $("ul > li:contains('white')").hide();
  $("ul > li:contains('gluten')").hide();
  document.getElementsByTagName("strong")[0].innerHTML = "$13";
})

$(".btn").click(function(event){
  var topping = this.innerHTML;
  switch(topping){
    case "Pepperonni":
      $(".pep").toggle();
      $(".btn-pepperonni").toggleClass("active");
      $("ul > li:contains('pepperonni')").toggle()
      break;
    case "Mushrooms":
      $(".mushroom").toggle();
      $(".btn-mushrooms").toggleClass("active");
      $("ul > li:contains('mushrooms')").toggle()
      break;
    case "Green peppers":
      $(".green-pepper").toggle();
      $(".btn-green-peppers").toggleClass("active");
      $("ul > li:contains('green')").toggle()
      break;
    case "White sauce":
      $(".sauce").toggleClass("sauce-white");
      $(".btn-sauce").toggleClass("active");
      $("ul > li:contains('white')").toggle()
      break;
    case "Gluten-free crust":
      $(".crust").toggleClass("crust-gluten-free");
      $(".btn-crust").toggleClass("active");
      $("ul > li:contains('gluten')").toggle()
      break;
  }
  })

var pCounter=0, mCounter=0, gCounter=0, sCounter=0, cCounter = 0;
$(".btn").click(function(event){
  var topping = this.innerHTML;
  var totalPrice = parseInt(document.getElementsByTagName("strong")[0].innerHTML.substring(1));
  switch(topping){
    case "Pepperonni":
      pCounter++
      if(pCounter % 2 == 0){
        totalPrice += 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      } else {
        totalPrice -= 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      }
      break;
    case "Mushrooms":
      mCounter++
      if(mCounter % 2 == 0){
        totalPrice += 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      } else {
        totalPrice -= 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      }
      break;
    case "Green peppers":
      gCounter++
      if(gCounter % 2 == 0){
        totalPrice += 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      } else {
        totalPrice -= 1;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      }
      break;
    case "White sauce":
      sCounter++
      if(sCounter % 2 == 1){
        totalPrice += 3;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      } else {
        totalPrice -= 3;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      }
      break;
    case "Gluten-free crust":
      cCounter++
      if(cCounter % 2 == 1){
        totalPrice += 5;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      } else {
        totalPrice -= 5;
        document.getElementsByTagName("strong")[0].innerHTML = "$" + totalPrice.toString();
      }
      break;
    default:
      break;
  }
})