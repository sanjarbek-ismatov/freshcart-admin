export function filterByTime(arr: any[], start: Date, end: Date) {
  return arr.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      start.getTime() <= itemDate.getTime() &&
      itemDate.getTime() <= end.getTime()
    );
  });
}
