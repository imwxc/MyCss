// 使用common js 写法 因为node.js使用的是js5
module.exports = {
  pages: {
    index: { entry: "src/main.ts" },
  },
  lintOnSave: false, // 关闭语法检查 
  outputDir: '../MyVueService/static'
};
