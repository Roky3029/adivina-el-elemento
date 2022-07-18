// con esta funcion podemos llamar a imagenes desde Vite, ya que no soporta require() al usar ESM

const getImageUrl = (imgName) => {
  return new URL(`./../img/${imgName}`, import.meta.url).href
}

const getImageUrlWithDirs = (imgDir, imgName) => {
  return new URL(`./../img/${imgName}`, import.meta.url).href
}

export { getImageUrl, getImageUrlWithDirs }
