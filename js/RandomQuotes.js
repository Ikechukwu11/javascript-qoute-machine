window.onload = init;
function init() {
	document.getElementById("twitterButton").href = "https://twitter.com/intent/tweet?text=" + quoteArea.innerHTML;
	document.getElementById("emailButton").href = "mailto: ?subject=kEkEsMoViC Javascript Random Quote&body=" + quoteArea.innerHTML;
    document.getElementById("fbButton").href = "http://www.facebook.com/sharer.php?u=" +  quoteArea.innerHTML;
}
// Array of arrays to hold quote and corresponding image of the character who said it
// Need 250x250 image of all of these people in the img folder of this projects directory
// The second index of each nested array will be "img/xxxxx.png"


var prevQuote;

   var colors= [
			'indigo',
			'green',
			'teal',
			'silver',
			'purple',
			'green',
			'orange',
			'black',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];
//Math.floor(Math.random() * colors.length);
var color = 0;


function change() {
color = (color == colors.length -1) ? 0: color;
document.body.style.backgroundColor=colors[++color];
console.log(color.text);
}

function getQuote() {

change();
	document.getElementById("quoteArea").innerHTML = "";
	document.getElementById("characterPhoto").src = "";
    document.getElementById("authorArea").innerHTML = "";
    
   	var quoteArray = [
["I really do believe I can accomplish a great deal with a big grin, I know some people find that disconcerting, but that doesn't matter","Beverly Sills", "img/BS.jpg","1929 - 2007"],
["A short saying oft contains much wisdom", "Sophocles","img/sophocles.jpg","496BC - 406BC"],
["Not only is the universe stranger than we imagine, it is stranger than we can imagine","Sir Arthur Eddington","img/SAE.jpg","1882 - 1944"],
["I would rather spend an hour among the notorious than two minutes with the dull","Stephanie Barron","img/SB.jpg","1963-date"],
["An honor is not diminished for being shared","Lois McMaster Bujold","img/LMB.jpg","1949-date"],
["When I only begin to read, I forget I'm on this world. It lifts me on wings with high thoughts","Anzia Yezierska","img/AY.jpg","1880-1970"],
["Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some","Charles Dickens","img/D.jpg","1812-1870"],
["The male is a domestic animal which, if treated with firmness, can be trained to do most things","Jilly Cooper","img/JC.jpg","1937-date"],
["No synonym for God is so perfect as Beauty. Whether as seen carving the lines of the mountains with glaciers or gathering matter into stars, or planning the movements of water, or gardening - still all is Beauty!","John Muir","img/JM.jpg","1838 - 1914"],
["Every creator painfully experiences the chasm between his inner vision and its ultimate expression","Isaac Bashevis","img/IB.jpg" ,"1904 - 1991"],
["The first rule of business, is never sell something you love. Otherwise, you may as well be selling your children","Hugh Macleod","img/HM.png","-"],
["It’s almost as if the way you imagine my dead self says more about you than it says about either the person I was or the whatever I am now","John Green","img/JG.jpg","1977-date"],
["A conference is a gathering of important people who singly can do nothing, but together can decide that nothing can be done","Fred Allen","img/FA.jpg","1894 - 1956"],
["Sitting at the table doesn't make you a diner,unless you eat some of what's on that plate.Being here in America doesn't make you an American.Being born here in America doesn't make you an American","Malcolm X","img/MX.jpg","1925 - 1965"],
["Few people think more than two or three times a year; I have made an international reputation for myself by thinking once or twice a week","Bernard Shaw","img/GBS.jpg","1856 - 1950"],
["Man's main task is to give birth to himself","Erich Fromm","img/EF.jpg", "1900 - 1980"],
["Much talking is the cause of danger. Silence is the means of avoiding misfortune. The talkative parrot is shut up in a cage. Other birds, without speech, fly freely about.","Saskya Pandita","img/SP.png","1182-1251"]
];

	var randomNumber = Math.floor(Math.random() * 17);
	 

	if (randomNumber === prevQuote) {
		randomNumber = randomNumber + 1;

	}

	prevQuote = randomNumber;


	//console.log(prevQuote);
	document.getElementById("characterPhoto").src = quoteArray[randomNumber][2];
	document.getElementById("quoteArea").innerHTML += quoteArray[randomNumber][0];
	document.getElementById("authorArea").innerHTML += quoteArray[randomNumber][1];
	document.getElementById("years").innerHTML = quoteArray[randomNumber][3];
	document.getElementById("twitterButton").href = "https://twitter.com/intent/tweet?text=" + quoteArray[randomNumber][0];
	document.getElementById("emailButton").href = "mailto: ?subject=kEkEsMoViC Javascript Random Quote&body=" + quoteArray[randomNumber][0];
    document.getElementById("fbButton").href = "http://www.facebook.com/sharer.php?u=" +  quoteArray[randomNumber][0];
    characterPhoto.width = 250;
    characterPhoto.height = 250;
    characterPhoto.class = "img-responsive, img-circle";

}