module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 2022,
    },
    rules: {
        // 4 spaces, switch-case gets indented as well with 1x4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
    },
};
