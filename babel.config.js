module.exports = api => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];
  if (process.env.NODE_ENV !== 'production') {
    plugins.push('react-hot-loader/babel');
  }
  return {
    presets,
    plugins,
  };
};
