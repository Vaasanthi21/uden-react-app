
export const px2vw = (size = 16, width = window.innerWidth) => `${(size / width) * 100}vw`;