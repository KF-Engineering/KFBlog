import { norm } from "mathjs";

export const simpleSimilarity = (word, otherWord) => {
  var score = 0;

  for (var indexfirst = 0; indexfirst < word.length; indexfirst++) {
    for (var indexsecond = 0; indexsecond < otherWord.length; indexsecond++) {
      if (word.charAt(indexfirst).toLowerCase() === otherWord.charAt(indexsecond).toLowerCase()) {
        if (indexfirst === indexsecond) {
          score++;
          continue;
        }
        score = score + 1 / norm(indexfirst - indexsecond);
      }
    }
  }

  return score;
};
