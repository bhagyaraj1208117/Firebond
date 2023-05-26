function getOperatorResult(givenIn, currentIndex) {
    function compileAnwser(list, operator) {
      const reducer = (accumulator, currentVal) => {
        if (operator === "&&") {
          return accumulator && currentVal;
        } else {
          return accumulator || currentVal;
        }
      };
  
      const result = list.reduce(reducer, list[0]); 
      return result;
    }
  
    const reduceVal = (accumulator, currentVal) => {
      if (currentVal.operator === "&&") {
        return accumulator && compileAnwser(currentVal.values, currentVal.operator);
      } else {
        return accumulator || compileAnwser(currentVal.values, currentVal.operator);
      }
    };
  
    const finalVal = givenIn.reduce(reduceVal, givenIn[0].values[0]); // Initialize with true as the initial value
  
    return finalVal;
  }
  
  const arr = [
    {
      operator: "&&",
      values: [true, false, false, true],
    },
    {
      operator: "||",
      values: [true, false, false, true],
    },
  ];
  
  

  export default getOperatorResult;
 