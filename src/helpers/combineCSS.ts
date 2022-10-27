const combineCSS = (classes: (string | undefined)[]) => {
  let classList = classes.filter((val) => {
    return val !== undefined ? val : '';
  });
  return classList.join(' ');
};

export default combineCSS;
