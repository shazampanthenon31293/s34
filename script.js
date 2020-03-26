function stringToBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};
function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}

function s12(){
  var pre1 = document.getElementById('txt_name').value
  var pre2 = ascii_to_hexa(pre1)
  var pre3 = stringToBinary(pre1)
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const bod1 = { "string": pre1,
  "Hex": pre2,
  "Binary": pre3}
  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(bod1),
    }
  fetch("https://enqhf8jl70i8e.x.pipedream.net/", options)
}
var x = document.getElementById("myAudio"); 

function playAudio() { 
  var e = document.getElementById("ddlViewBy");
  var strUser = e.options[e.selectedIndex].text;
  if(strUser=="SAD!"){
    document.getElementById("myAudio").src="SAD.mp3"
  }else if(strUser=="Robbery"){
    document.getElementById("myAudio").src="Robbery.mp3"
  }
  document.getElementById('myAudio').play();

} 

function pauseAudio() { 
  document.getElementById('myAudio').pause(); 
} 