// // function totalFidder() {
// //   let valueB = document.getElementById("inputBangla");
// //   let valueBNum = parseFloat(valueB.value);
// //   let valueE = document.getElementById("inputEnglish");
// //   let valueENum = parseFloat(valueE.value);
// //   let valueI = document.getElementById("inputIct");
// //   let valueINum = parseFloat(valueI.value);
// //   let total = valueBNum;
// //   total += valueENum;
// //   total += valueINum;
// //   //   document.getElementById("totalMarks").innerText = total;
// // }

// if (inputBangla.value > 0 && inputBangla.value <= 32) {
//     resBangla.innerText = "F";
// } else if (inputBangla.value >= 33 && inputBangla.value <= 39) {
//     resBangla.innerText = "D";
// } else if (inputBangla.value >= 40 && inputBangla.value <= 49) {
//     resBangla.innerText = "C";
// } else if (inputBangla.value >= 50 && inputBangla.value <= 59) {
//     resBangla.innerText = "B";
// } else if (inputBangla.value >= 60 && inputBangla.value <= 69) {
//     resBangla.innerText = "A-";
// } else if (inputBangla.value >= 70 && inputBangla.value <= 79) {
//     resBangla.innerText = "A";
// } else if (inputBangla.value >= 80 && inputBangla.value <= 100) {
//     resBangla.innerText = "A";
// } else {
//     alert("Invalid Number");
// // }
// let totalMarks = document.getElementById("totalMarks");

// const btnBangla = document.getElementById("cal-btn-bangla");
// btnBangla.addEventListener("click", () => {
//   //   let inputBangla = document.getElementById("inputBangla").value;
//   //   let inputBanglaNum = parseInt(inputBangla);
//   //   if (inputBangla == "") {
//   //     inputBanglaNum = 0;
//   //   }
//   //   console.log(inputBanglaNum + inputBanglaNum);
//   //   let banglaMarks = document.getElementById("inputBangla").value;
//   //   let banglaMarksNum = parseInt(banglaMarks);
//   //   let englishMarks = document.getElementById("inputEnglish").value;
//   //   let englishMarksNum = parseInt(englishMarks);
//   //   let ictMarks = document.getElementById("inputIct").value;
//   //   let ictMarksNum = parseInt(ictMarks);
//   //   if (banglaMarks == "" || banglaMarks == NaN) {
//   //     banglaMarks = 0;
//   //   }
//   //   if (englishMarks == "") {
//   //     englishMarks = 0;
//   //   }
//   //   if (banglaMarks == "") {
//   //     banglaMarks = 0;
//   //   }
//   //   totalMarks.innerText = banglaMarksNum + englishMarksNum + ictMarksNum;
//   // let alertNan = document.getElementById("inputBangla");
//   // let nanIs = isNaN(alertNan.value);
//   // if (nanIs == true || alertNan.value == "" || alertNan.value == " ") {
//   //   alert("invalid Number");
//   //   document.getElementById("inputBangla").value = 0;
//   // }
//   ResultCalc("inputBangla", "inputEnglish", "inputIct");
//   resultGradeClac();
// });

// const btnEnglish = document.getElementById("cal-btn-english");
// btnEnglish.addEventListener("click", () => {
//   ResultCalc("inputBangla", "inputEnglish", "inputIct");
// });

// const btnIct = document.getElementById("cal-btn-ict");
// btnIct.addEventListener("click", () => {
//   ResultCalc("inputBangla", "inputEnglish", "inputIct");
// });

// function ResultCalc(inputId, inputId2, inputId3) {
//   let banglaMarks = document.getElementById(inputId).value;
//   let banglaMarksNum = parseInt(banglaMarks);

//   let englishMarks = document.getElementById(inputId2).value;
//   let englishMarksNum = parseInt(englishMarks);

//   let ictMarks = document.getElementById(inputId3).value;
//   let ictMarksNum = parseInt(ictMarks);

//   totalMarks.innerText = banglaMarksNum + englishMarksNum + ictMarksNum;
// }

// function resultGradeClac(gradeInput) {
//   let showGrade = document.getElementById(gradeInput);
//   if (gradeInput.value > 0 && gradeInput.value <= 32) {
//     showGrade.innerText = "F";
//   } else if (gradeInput.value >= 33 && gradeInput.value <= 39) {
//     showGrade.innerText = "D";
//   } else if (gradeInput.value >= 40 && gradeInput.value <= 49) {
//     showGrade.innerText = "C";
//   } else if (gradeInput.value >= 50 && gradeInput.value <= 59) {
//     showGrade.innerText = "B";
//   } else if (gradeInput.value >= 60 && gradeInput.value <= 69) {
//     showGrade.innerText = "A-";
//   } else if (gradeInput.value >= 70 && gradeInput.value <= 79) {
//     showGrade.innerText = "A";
//   } else if (gradeInput.value >= 80 && gradeInput.value <= 100) {
//     showGrade.innerText = "A";
//   } else {
//     alert("Invalid Number");
//   }
// }
