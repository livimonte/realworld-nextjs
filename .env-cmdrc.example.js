const PORT = 5000
const PORT_API = 5500

module.exports = {
  dev: {
    PORT: PORT,
    NEXT_PUBLIC_PORT: PORT,
    NEXT_PUBLIC_URL: `http://localhost:${PORT}`,
    NEXT_PUBLIC_API: `http://localhost:${PORT_API}/api`,
  },
}
