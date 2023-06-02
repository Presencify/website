export const handleDownload = () => {
  const downloadUrl = "/Presencify.v0.0.2.zip" // Ruta relativa al archivo .rar en la carpeta 'public'

  const link = document.createElement("a")
  link.href = downloadUrl
  link.download = "Presencify.v0.0.2.zip" // Nombre que se utilizará para guardar el archivo
  link.click()
}
