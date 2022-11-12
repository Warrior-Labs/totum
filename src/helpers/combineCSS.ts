const combineCSS = (classes: (string | undefined)[]) => {
  if (classes.length == 0) {
    return undefined;
  }
  let classList = classes.filter((val) => {
    return val !== undefined ? val : '';
  });
  return classList.join(' ');
};

export default combineCSS;
