import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
      },
    },
  },
  prettier,
];
