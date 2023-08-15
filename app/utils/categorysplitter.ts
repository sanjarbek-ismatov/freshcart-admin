/**
 * @param {number} count
 * @param {string[]} array
 * @returns {Promise<string[][]>}
 */
export function categorySplitter(
  count: number,
  array: any[]
): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    let iterableCount = Math.ceil(array.length / count);
    for (let i = 0; i < iterableCount; i++) {
      array.splice(i, count, [...array.slice(i, (i + 1) * count)]);
    }
    resolve(array);
  });
}
