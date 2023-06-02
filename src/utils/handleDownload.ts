export const handleDownload = () => {
  const downloadUrl = "/Precensify.zip" // Ruta relativa al archivo .rar en la carpeta 'public'

  const link = document.createElement("a")
  link.href = downloadUrl
  link.download = "Precensify.zip" // Nombre que se utilizará para guardar el archivo
  link.click()
}
