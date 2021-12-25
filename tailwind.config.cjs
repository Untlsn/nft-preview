module.exports = {
  extract: {
    include: ['**/*.{svelte,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        background: '#0D1A2D',
        tile: '#15273F',
        ethereum: '#0BFFFF',
      }
    }
  },
};