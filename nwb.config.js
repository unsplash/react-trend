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
  karma: {
    // This poorly-named config is actually just a way of excluding files from
    // tests (and, thus, coverage). We don't need to test our utility functions
    testDirs: ['src/utils'],
  },
  webpack: {
    compat: {
      enzyme: true,
    },
  },
};
