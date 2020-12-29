module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-optional-chaining',
  ],
};
