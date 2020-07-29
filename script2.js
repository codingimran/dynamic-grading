document.getElementById("inputBangla").value = 0;
document.getElementById("inputEnglish").value = 0;
document.getElementById("inputIct").value = 0;

const btnBangla = document.getElementById("cal-btn-bangla");
btnBangla.addEventListener("click", () => {
  resultGradeClac("inputBangla", "resBangla");
  result();
});

const btnIct = document.getElementById("cal-btn-ict");
btnIct.addEventListener("click", () => {
  resultGradeClac("inputIct", "resIct");
  result();
});

const btnEnglish = document.getElementById("cal-btn-english");
btnEnglish.addEventListener("click", () => {
  resultGradeClac("inputEnglish", "resEng");
  result();
});

function ResultCalc(inputId, inputId2, inputId3) {
  let banglaMarks = document.getElementById(inputId).value;
  let banglaMarksNum = parseInt(banglaMarks);

  let englishMarks = document.getElementById(inputId2).value;
  let englishMarksNum = parseInt(englishMarks);

  let ictMarks = document.getElementById(inputId3).value;
  let ictMarksNum = parseInt(ictMarks);

  if (banglaMarks >= 101 || englishMarks >= 101 || ictMarks >= 101) {
    null;
  } else {
    totalMarks.innerText = banglaMarksNum + englishMarksNum + ictMarksNum;
  }
}

function resultGradeClac(marksInput, gradeInput) {
  let marksValue = document.getElementById(marksInput).value;
  let showGrade = document.getElementById(gradeInput);
  if (marksValue <= 32) {
    showGrade.innerText = "F";
  } else if (marksValue >= 33 && marksValue <= 39) {
    showGrade.innerText = "D";
  } else if (marksValue >= 40 && marksValue <= 49) {
    showGrade.innerText = "C";
  } else if (marksValue >= 50 && marksValue <= 59) {
    showGrade.innerText = "B";
  } else if (marksValue >= 60 && marksValue <= 69) {
    showGrade.innerText = "A-";
  } else if (marksValue >= 70 && marksValue <= 79) {
    showGrade.innerText = "A";
  } else if (marksValue >= 80 && marksValue <= 100) {
    showGrade.innerText = "A+";
  } else {
    alert("Invalid Number");
    document.getElementById(marksInput).value = 0;
  }
}

function result() {
  ResultCalc("inputBangla", "inputEnglish", "inputIct");
}

const totalMarksBtn = document.getElementById("totalMarksBtn");
totalMarksBtn.addEventListener("click", () => {
  const total = document.getElementById("totalMarks").innerText;
  const totalValue = parseInt(total);
  let finalGrade = document.getElementById("finalGrade");
  if (totalValue < 99) {
    finalGrade.innerText = "F";
  } else if (totalValue >= 99 && totalValue <= 140) {
    finalGrade.innerText = "B";
  } else {
    finalGrade.innerText = "A+";
  }

  result();
});
