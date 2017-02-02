module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Trend',
      externals: {
        react: 'React',
      },
    },
  },
};
