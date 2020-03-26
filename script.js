$.getJSON("https://api.ipify.org?format=json", function (data) {

                $("#ipaddress").html("IP: " + data.ip + "");

            })
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
var Title = ""
var Artist = ""
var Album = ""
var ReleaseYear = ""
var Genre = ""
var ipadress = document.getElementById("ipaddress").innerHTML;
function playAudio() {
  var e = document.getElementById("ddlViewBy");
  var strUser = e.options[e.selectedIndex].text;
  if(strUser=="SAD!"){
    document.getElementById("myAudio").src="SAD.mp3"
    Title="Sad"
    Artist = "XXXTentacion"
    Album="?"
    ReleaseYear="2018"
    Genre="Emo Rap"
    document.getElementById("s34").innerHTML= "Title:" + Title +"<Br>"+ "Artist:"+Artist+"<Br>"+"Album:"+Album+"<br>"+"Release Year:"+ReleaseYear+"<Br>"+"Genre:"+Genre
  }else if(strUser=="Robbery"){
    document.getElementById("myAudio").src="Robbery.mp3"
    Title="Robbery"
    Album="Death Race for Love"
    Artist= "Juice Wrld"
    ReleaseYear="2019"
    Genre="Emo Rap"
    document.getElementById("s34").innerHTML= "Title:" + Title +"<Br>"+ "Artist:"+Artist+"<Br>"+"Album:"+Album+"<br>"+"Release Year:"+ReleaseYear+"<Br>"+"Genre:"+Genre
  }else if(strUser=="All Girls are the Same"){
    document.getElementById("myAudio").src="All Girls Are The Same.mp3"
    Title="All Girls Are The Same"
    Album="Goodbye & Good Riddance"
    Artist= "Juice Wrld"
    ReleaseYear="2018"
    Genre="Emo Rap"
    document.getElementById("s34").innerHTML= "Title:" + Title +"<Br>"+ "Artist:"+Artist+"<Br>"+"Album:"+Album+"<br>"+"Release Year:"+ReleaseYear+"<Br>"+"Genre:"+Genre
  }else if(strUser=="Suge"){
    document.getElementById("myAudio").src="Suge.mp3"
    Title="Suge"
    Album="Baby on Baby"
    Artist= "DaBaby"
    ReleaseYear="2019"
    Genre="Rap"
    document.getElementById("s34").innerHTML= "Title:" + Title +"<Br>"+ "Artist:"+Artist+"<Br>"+"Album:"+Album+"<br>"+"Release Year:"+ReleaseYear+"<Br>"+"Genre:"+Genre
  }else if(strUser=="Off The Rip"){
    document.getElementById("myAudio").src="Off The Rip.mp3"
    Title="Off The Rip"
    Album="Kirk"
    Artist= "DaBaby"
    ReleaseYear="2019"
    Genre="Rap"
    document.getElementById("s34").innerHTML= "Title:" + Title +"<Br>"+ "Artist:"+Artist+"<Br>"+"Album:"+Album+"<br>"+"Release Year:"+ReleaseYear+"<Br>"+"Genre:"+Genre
  }
  document.getElementById('myAudio').play();
  submit();
} 

function pauseAudio() { 
  document.getElementById('myAudio').pause(); 
} 

$.getJSON("https://api.ipify.org?format=json", 
                                          function(data) { 
  
            // Setting text of element P with id gfg 
            $("#gfg").html(data.ip); 
            return data.ip;
}) 
function submit(){
  var inputVal = document.getElementById("ipaddress").innerHTML;
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const bod1 = { "Title": Title, "Artist": Artist,"Album": Album,"Released": ReleaseYear,"Genre":Genre,"IP Address":inputVal}
  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(bod1),
    }
  fetch("https://enqhf8jl70i8e.x.pipedream.net/", options)
};