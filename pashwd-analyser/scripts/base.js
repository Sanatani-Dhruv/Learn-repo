let inBox = document.getElementById('input-box');
let outputBox = document.getElementById('output');
let errBox = document.getElementById('errbox');
console.log(inBox);

function checkStrength() {
  let output = 0;
  let answer = '';
  let inValue = inBox.value;

  if (inValue.match(/[A-Z]/m)) {output++}; // Check For atleast 1 Uppercase Letter
  if (inValue.match(/[a-z]/m)) {output++}; // Check For atleast 1 Lowercase Letter
  if (inValue.match(/[\d]/m)) {output++}; // Check For atleast 1 Digit
  if (inValue.match(/[@_]/m)) {output++}; // Check For Special Symbol
  if (inValue.match(/[-]/m)) {output++}; // Check For Special Symbol
  if (inValue.match(/[\$]/m)) {output++}; // Check For Special Symbol
  if (inValue.match(/[\d]+[\w]+\d/m)) {output++}; // Check For Special Symbol

  if (inValue.length > 3) {
    switch(output) {
      case 1:
        answer = "Very Weak"
        break;
      case 2:
        answer = "Weak";
        break;
      case 3:
        answer = "Good";
        break;
      case 4:
        answer = "Strong";
        break;
      case 5:
        answer = "Stronger";
        break;
      case 6:
        answer = "Strongest";
        break;
      case 7:
        answer = "Hack Proof";
        break;
      default:
        answer = "Weak";
        break;
    }
  } else {
    answer = "Make Password atleast 3 characters long";
    outputBox.innerHTML = '';
    errBox.innerHTML = answer;
    return;
  }

  errBox.innerHTML = "";
  outputBox.innerHTML = `Strength - ${answer}`;
}

inBox.addEventListener('input', checkStrength);
