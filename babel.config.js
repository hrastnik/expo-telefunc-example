module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['./node_modules/telefunc/dist/node/babel/babel-plugin-telefunc.js'],
  };
};
