export function transformToUrlFormat(value: string): string {
  return value
    .split(' ')
    .join('_')
    .replace(/[^\w\s]/g, '')
    .toLowerCase();
}
