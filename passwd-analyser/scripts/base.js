let inBox = document.getElementById('input-box');
let outputBox = document.getElementById('output');
let errBox = document.getElementById('errbox');
console.log(inBox);

function checkStrength() {
  let output = 0;
  let answer = '';
  let inValue = inBox.value;
  let seqAlphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';

  if (inValue.match(/[A-Z]/m)) {output++}; // Check For atleast 1 Uppercase Letter
  if (inValue.match(/[a-z]/m)) {output++}; // Check For atleast 1 Lowercase Letter
  if (inValue.match(/[\d]/m)) {output++}; // Check For atleast 1 Digit
  if (inValue.match(/[@_]/m)) {output++}; // Check For Special Symbol like @, _
  if (inValue.match(/[-]/m)) {output++}; // Check For Special Symbol -
  if (inValue.match(/[\$]/m)) {output++}; // Check For Special Symbol $
  if (inValue.match(/[\d]+[A-Za-z\$@_-]+\d/m)) {output++}; // Check for numbers around text
  if (inValue.match(/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789|890)/i)) {output = 0}; //
  if (inValue.match(/(.)\1{2,}/)) {output = -1}; //

  if (inValue.length > 3) {
    switch(output) {
      case 1:
        answer = "Crackable"
        break;
      case 2:
        answer = "Weak";
        break;
      case 3:
        answer = "Good";
        break;
      case 4:
        answer = "Better";
        break;
      case 5:
        answer = "Strong";
        break;
      case 6:
        answer = "Stronger";
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

  if (output === 0) {
    answer = "Sequence Detected! Brute Force attack can crack it!";
    outputBox.innerHTML = `Strength - <span class='text-red-800/100'>Crackable!! Remove it</span>`;
    errBox.innerHTML = answer;
    return;
  }

  if (output === -1) {
    answer = "Same Character Repeated for more than 3 times";
    outputBox.innerHTML = `<span class='text-red-800/100'>Repeated Characters Detected!!</span>`;
    errBox.innerHTML = answer;
    return;
  }

}

inBox.addEventListener('input', checkStrength);
