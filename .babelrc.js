
module.exports =  {
        presets: [
          '@babel/preset-typescript',
          [
            '@babel/preset-env',
            { loose: true, targets: { node: true }, modules: 'commonjs' },
          ],
        ],
        plugins: [
          'babel-plugin-dynamic-import-node',
          '@babel/plugin-transform-modules-commonjs',
          ['@babel/plugin-proposal-class-properties', { loose: true }],
          [
            require.resolve('babel-plugin-module-resolver'),
            {
              root: ['./'],
              alias: {
                '@config': './config',
                '@shared': './src/shared',
              },
            },
          ],
        ],
      };