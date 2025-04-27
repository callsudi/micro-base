export default function importAllSvgIcons() {
  try {
    const request =
      require.context('./svg', false, /\.svg$/)
    request.keys().forEach(request)
  } catch (err) {
    console.log(err)
  }
}