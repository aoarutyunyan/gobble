module.exports = {
  env: { browser: true, es6: true },
  extends: 'react-app',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // comma dangle
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'linebreak-style': ['error', 'unix'],

    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    'no-new-object': 'error',

    'object-shorthand': 'error',
    
    'object-curly-spacing': ['error', 'always'],
    'one-var-declaration-per-line': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'no-array-constructor': ['error'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'newline-before-return': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],

    // jsx
    'jsx-quotes': ['error', 'prefer-double'],

    // react
    'react/prop-types': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-indent-props': ['error', 2],
  },
};
