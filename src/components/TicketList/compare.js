export const compare = (list, num1, num2, num3, num4) => {
  if (num1 !== 0 && !num2 && !num3 && !num4) {
    return [];
  }
  return list.filter((item) => {
    return (
      item.segments[0].stops.length === num1 ||
      item.segments[0].stops.length === num2 ||
      item.segments[0].stops.length === num3 ||
      item.segments[0].stops.length === num4 ||
      item.segments[1].stops.length === num1 ||
      item.segments[1].stops.length === num2 ||
      item.segments[1].stops.length === num3 ||
      item.segments[1].stops.length === num4
    );
  });
};
