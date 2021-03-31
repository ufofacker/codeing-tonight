const optimizeWeb = require ('./data/expandKnowledge/optimizeWeb');
module.exports = [
  {
    url: '/coding-tonight/expandKnowledge/queryOptimizeWebList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: optimizeWeb.list,
        status: true,
        message: '请求成功',
      };
    },
  },
];
