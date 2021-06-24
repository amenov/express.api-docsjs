module.exports = (routes, options = {}) => {
  return (req, res, next) => {
    if (req.method === 'GET') {
      if (req.baseUrl === req.baseUrl + '/routes') {
        return res.json({ routes, options })
      }

      if (req.originalUrl.includes(`${req.baseUrl}/assets`)) {
        return res.sendFile(
          __dirname + req.originalUrl.replace(req.baseUrl, '')
        )
      }

      return res.sendFile(__dirname + '/index.html')
    }

    next()
  }
}
