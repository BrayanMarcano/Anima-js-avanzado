function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
 }), {});
}

module.exports = countWords
