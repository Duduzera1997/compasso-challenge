module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$'] }],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': ['error'],
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-color-literals': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
          'builtin',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'app',
      },
    },
  },
};
