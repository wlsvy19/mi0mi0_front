module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier',],
  plugins: [],
  // add your custom rules here
  rules: {
    // 에러 나타나도 콘솔에 출력 하지말고 화면 나오게 해
    "no-console": "off",


  },
}
