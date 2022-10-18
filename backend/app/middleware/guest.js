const guest = (req) => {
  if (req.isAuthenticated()) {
    req.status(403)
  }
}

module.exports = guest