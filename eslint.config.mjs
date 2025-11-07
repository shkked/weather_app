import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{ts,js,vue}'],
    ignores: ['/.nuxt/**', '/node_modules/**', '/dist/**', '/.vscode/**'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },

    plugins: {
      js,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      pluginVue,
    },

    // ⚙️ Базовые настройки без обращения к .configs
    rules: {
      ...js.configs.recommended.rules,

      // TODO включить Vue 3 правила
      // ...vuePlugin.configs['vue3-recommended'].rules,

      // TypeScript — берём набор базовых правил
      ...tseslint.configs.recommended.rules,

      // Отключаем конфликты с Prettier
      ...prettierPlugin.configs.recommended.rules,

      // 👇 Твои кастомные правила
      'vue/multi-word-component-names': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  pluginVue.configs['flat/essential'],
]);
