export const compare = (item, num1, num2, num3, num4) => {
  if (!num1 && !num2 && !num3 && !num4) {
    return true;
  }
  return (
    (item.segments[0].stops.length === num1 ||
      item.segments[0].stops.length === num2 ||
      item.segments[0].stops.length === num3 ||
      item.segments[0].stops.length === num4) &&
    (item.segments[1].stops.length === num1 ||
      item.segments[1].stops.length === num2 ||
      item.segments[1].stops.length === num3 ||
      item.segments[1].stops.length === num4)
  );
};

/* let resultList = [];
  const compare = (num1, num2, num3, num4) => {
    return [
      ...new Set([
        ...resultList,
        ...currentList.filter((t) => {
          return (
            (t.segments[0].stops.length === num1 ||
              t.segments[0].stops.length === num2 ||
              t.segments[0].stops.length === num3 ||
              t.segments[0].stops.length === num4) &&
            (t.segments[1].stops.length === num1 ||
              t.segments[1].stops.length === num2 ||
              t.segments[1].stops.length === num3 ||
              t.segments[1].stops.length === num4)
          );
        }),
      ]),
    ];
  }; */
