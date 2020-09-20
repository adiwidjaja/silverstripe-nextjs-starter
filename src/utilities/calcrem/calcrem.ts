const FONT_BASE = 16;
const RADIX = 10;

export default (size:any) => (`${(parseInt(size, RADIX) / FONT_BASE)}rem`);
