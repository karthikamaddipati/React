function processBackspaces(str) {
    const stack = [];
  
    for (let char of str) {
      if (char !== '#') {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
  
    return stack.join('');
  }
  
  function backspaceCompare(s, t) {
    const processedS = processBackspaces(s);
    const processedT = processBackspaces(t);
  
    return processedS === processedT;
  }
  
  // Example usage:
  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result);
  