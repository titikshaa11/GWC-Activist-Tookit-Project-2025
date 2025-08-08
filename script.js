

/* Fact generator Feature */

var factList = [
  "The 333 rule is a quick grounding technique for anxiety: name three things you see, three things you hear, and move three parts of your body. It helps bring your attention back to the present and creates a sense of calm.",
  "Open up to a trusted friend, family member, counselor, or therapist. Talking about what you're feeling can relieve pressure and help you feel supported.",
  "Reduce screen time, especially on social media, and take breaks from overwhelming environments to give your mind space to reset.",
  "Journaling, drawing, music, or other creative outlets can help you process emotions in a healthy way.",
  "Break tasks into smaller, manageable steps to avoid feeling overwhelmed and build a sense of accomplishment.",
  "Be patient and kind to yourself. Struggling doesn’t mean you’re failing—it means you’re human."
]

var button = document.getElementById("button");
var factTxt = document.getElementById("fact-txt");

console.log(factTxt);
var count = 0;

// Only add event listener if button exists (only on index.html)
if (button && factTxt) {
  button.addEventListener("click", displayFact);
}

function displayFact() {
  factTxt.innerHTML = factList[count];
  count++;

  if (count > factList.length-1) {
    count = 0;
  }
}


/* Personalize it Feature */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var color = document.getElementById("color").value;
  var weather = document.getElementById("weather").value;
  var food = document.getElementById("food").value;

  displayScript.innerHTML = name + ", you're still here, and that matters more than you know. You've made it through days that felt impossible, through moments where you've felt the burden of the world on your shoulders, when everything felt heavy. Maybe things aren't perfect. Maybe they must've changed permanently, and you're still hurt. But you're still breathing, living, alive and trying. And that means something to someone out there, whether you've met them or not. Think about it. There's so much more to do, more to become, achieve, make things better. There's still a chance to wear your favorite clothing in the color ' " + color + "' , to feel the rush of " + weather + "on your face, to enjoy the taste of " + food + " again. Of course, you don't have it figured out, but don't stop. Keep going, make mistakes, continue living to the best you can. The world still hasn't seen the way you can change for the better. Make sure it does.";
}
