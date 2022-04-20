const PORT = 5000

module.exports = {
  dev: {
    PORT: PORT,
    NEXT_PUBLIC_PORT: PORT,
    NEXT_PUBLIC_URL: `http://localhost:${PORT}`,
  },
}
