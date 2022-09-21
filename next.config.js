/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = withTM({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf|fbx|glsl|vs|fs|vert|frag|OBJ|COLLADA)$/,
      use: {
        loader: 'file-loader'
      }
    })
  }
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig
