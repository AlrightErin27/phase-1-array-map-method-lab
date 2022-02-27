const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// const titleCased = () => {
//   let arr1 = [],
//     arr2 = [];
//   for (let i = 0; i < tutorials.length; i++) {
//     arr1.push(tutorials[i].split(" "));
//     for (let k = 0; k < arr1.length; k++) {
//       if (arr1[k][0] === arr1[k][0].toUpperCase()) {
//         arr2.push(arr1[k]);
//       } else {
//         arr2.push("BOO");
//       }
//     }
//   }
//   return arr2;
// };

// const titleCased = () => {
//   const mappedLines = tutorials.map((line) => {
//     const words = line.split(" ");
//     const capitalizedWords = words.map(
//       (word) => word.charAt(0).toUpperCase() + word.slice(1)
//     );
//     const result = capitalizedWords.join(" ");
//   });
//   return result;
// };

const titleCased = () => {
  return tutorials.map((sentence) => {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const response = capitalizedWords.join(" ");
    return response;
  });
};
console.log(titleCased());
