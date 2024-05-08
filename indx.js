function generateParagraph() {
    var phrases = [
        "Do not take life too seriously. You will not get out alive--Elbert Hubbard",
        "New QuoteYou miss 100% of the shots you don't take--Wayne Gretzy",
        "Do not take life too seriously. You will not get out alive--Elbert Hubbard",
        "New QuoteYou miss 100% of the shots you don't take--Wayne Gretzy",
        "Do not take life too seriously. You will not get out alive--Elbert Hubbard",
    ];
    
    var paragraphElement = document.getElementById("paragraph");
    var randomIndex = Math.floor(Math.random() * phrases.length);
    paragraphElement.textContent = phrases[randomIndex];
}