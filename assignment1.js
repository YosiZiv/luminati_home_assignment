// Question 1
// Implement function verify(text) which verifies whether parentheses within text are
// correctly nested. You need to consider three kinds: (), [], <> and only these kinds.

const parenthesisOpen = ["(", "[", "<"];
const parenthesisClose = [")", "]", ">"];
const parenthesisRelation = { "(": ")", "[": "]", "<": ">" };

const isParenthesisMatch = (lastItem, item) => {
  return parenthesisRelation[lastItem] === item;
};

const verify = (text = "") => {
  const parenthesisStack = [];
  if (typeof text != "string") return 0;
  for (let str of text) {
    if (parenthesisOpen.includes(str)) parenthesisStack.push(str);
    else if (
      parenthesisClose.includes(str) &&
      parenthesisStack.length &&
      isParenthesisMatch(parenthesisStack[parenthesisStack.length - 1], str)
    )
      parenthesisStack.pop(str);
    else if (
      parenthesisClose.includes(str) &&
      parenthesisStack.length &&
      !isParenthesisMatch(parenthesisStack[parenthesisStack.length - 1], str)
    )
      return false;
    else if (parenthesisClose.includes(str) && !parenthesisStack.length)
      return false;
  }
  return true;
};
console.log(verify("<>>"));
