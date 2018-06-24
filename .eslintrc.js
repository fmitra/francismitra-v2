module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-magic-numbers': 0,
    'object-property-newline': 0,
    'no-extra-parens': 0,
    'react/prop-types': 0,
    'class-methods-use-this': 0,
    'no-warning-comments': 0,
    'no-negated-condition': 0,
    'prefer-destructuring': 0,
    'arrow-parens': 0,
    'no-param-reassign': 0,
    'camelcase': 0,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-continue': 0,
    'no-empty-function': 0,
    'no-process-env': 0,
    'guard-for-in': 0
  }
};
