module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser', // 解析 .vue 文件
    extends: [
        'plugin:vue/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint', // 优先 prettier 中的样式规范
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser', // 解析 .ts 文件
    },
    rules: {
        // 禁止使用 var
        'no-var': 'error',
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // 关闭显式函数返回类型
        '@typescript-eslint/explicit-function-return-type': 'off',
        // 函数返回类型可以使用any
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                },
                singleline: {
                    delimiter: 'comma',
                },
            },
        ],
        // 可以使用空函数
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/html-self-closing': 0,
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        // html自闭合标签
        'vue/html-end-tags': 'off',
        'vue/html-quotes': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/no-multi-spaces': 'off',
        // 属性等号前后不添加空格
        'vue/no-spaces-around-equal-signs-in-attribute': 'off',
        // html内容是否换行
        'vue/singleline-html-element-content-newline': 'off',
        // html 模版中的缩进
        'vue/html-indent': ['error', 4],
        /**
         * 支持在模版中使用 eslint-disable-next-line 等注释
         */
        'vue/comment-directive': 'error',
        /**
         * 组件的 name 属性必须符合 PascalCase
         * @reason 这是官方建议的规范
         */
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        /**
         * 限制组件名的风格
         */
        'vue/component-name-in-template-casing': 'off',
        /**
         * 组件中必须按照  <template>, <script>, <style> 排序
         * @reason 这是官方建议的顺序
         */
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        'vue/eqeqeq': ['error', 'always'],
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         */
        'vue/jsx-uses-vars': 'error',
        /**
         * 禁用已废弃的 scope 属性
         */
        'vue/no-deprecated-scope-attribute': 'error',
        /**
         * 使用 v-slot 替代已废弃的 slot
         */
        'vue/no-deprecated-slot-attribute': 'error',
        /**
         * 禁用已废弃的 slot-scope
         */
        'vue/no-deprecated-slot-scope-attribute': 'error',
        /**
         * 禁止重复的键名
         */
        'vue/no-dupe-keys': 'error',
        /**
         * 禁止出现重复的属性
         */
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: false,
                allowCoexistStyle: false,
            },
        ],
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'vue/no-empty-pattern': 'error',
        // 禁用HTML语法错误
        'vue/no-parsing-error': [
            'error',
            {
                'control-character-in-input-stream': false,
            },
        ],
    },
}
