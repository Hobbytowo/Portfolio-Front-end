module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'standard',
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'template-curly-spacing': ['error', 'always']
  }
}
