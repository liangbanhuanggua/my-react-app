import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: pluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 启用并配置 import/order 规则
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 模块 (e.g., fs, path)
            'external', // 外部模块 (e.g., react, lodash)
            'internal', // 项目内部模块
            'parent', // 父目录模块
            'sibling', // 同级模块
            'index', // 当前目录的 index 文件
            'object', // 对象导入
            'type', // 类型导入
            'unknown',
          ],
          pathGroups: [
            {
              pattern: '@/**', // 匹配所有以 @ 开头的路径
              group: 'internal', // 将其归为 internal 分组
              position: 'before', // 放在其他 internal 模块之前
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always', // 每个组之间保留一个空行
          alphabetize: {
            order: 'asc', // 按字母顺序排列
            caseInsensitive: true, // 忽略大小写
          },
        },
      ],
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
        }, // 如果是 TypeScript 项目
      },
    },
  }
);
