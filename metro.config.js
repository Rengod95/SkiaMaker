const {getDefaultConfig} = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const {transformer, resolver} = config;

  config.transformer = {
    ...transformer,
    // SVG 파일 import를 위한 트랜스포머 모듈
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  };
  config.resolver = {
    ...resolver,
    // SVG 파일 import를 위한 트랜스포머 모듈
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    // SVG 파일 import를 위한 트랜스포머 모듈
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return config;
})();
