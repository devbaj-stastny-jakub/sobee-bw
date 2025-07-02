module.exports = function (api) {
    api.cache(true);
    return {
        presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
        plugins: [
            '@babel/transform-react-jsx-source',
            'babel-plugin-transform-typescript-metadata',
        ],
    };
};
