export const combinations = (elements) => {
  if (elements.length < 2) {
    return [];
  }
  elements.sort();
  if (elements.length === 2) {
    return [{ source: elements[0], target: elements[1] }];
  }

  let result = [];
  const sources = [...elements];
  const length = elements.length;

  for (let i = 0; i < length - 1; i++) {
    const source = sources.splice(0, 1)[0];
    const targets = [...sources];

    result = result.concat(
      targets.map((target) => {
        return { source: source, target: target };
      })
    );
  }

  return result;
};
