function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const combinedString = s + s;
    return combinedString.includes(goal);
  }
  
  // Example usage:
  const s = "abcde";
  const goal = "cdeab";
  const result = rotateString(s, goal);
  console.log(result);
  