const codeAnalysis = require ('./data/vueFramework/codeAnalysis');
module.exports = [
  {
    url: '/coding-tonight/vueFramework/queryCodeAnalysisList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: codeAnalysis.list,
        status: true,
        message: '请求成功',
      };
    },
  },
];
