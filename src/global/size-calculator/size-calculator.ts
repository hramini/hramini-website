const BASE_UNIT: string = 'em';
const BASE_FONT_UNIT: string = 'rem';
const BASE_FONT_SIZE: number = 16;

export function sizeCalc(
  size: number,
  fontSize: number = BASE_FONT_SIZE
): string {
  const calculatedSize: number = size / fontSize;

  return `${calculatedSize}${BASE_UNIT}`;
}

export function fontSizeCalc(size: number): string {
  const calculatedSize: number = size / BASE_FONT_SIZE;

  return `${calculatedSize}${BASE_FONT_UNIT}`;
}
