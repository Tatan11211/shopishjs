module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    },
    target: 'node',
  },
};