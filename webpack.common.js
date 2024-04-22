/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { __dirname } from './eslint.config.mjs';

export const entry = {
  app: './src/index.js',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/template.html',
  }),
];
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
