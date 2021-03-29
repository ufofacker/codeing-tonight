const briefIntroduction = require ('./data/browser/briefIntroduction');
const jsExcuteRule = require ('./data/browser/jsExcuteRule');
const v8Engine = require ('./data/browser/v8Engine');
module.exports = [
  {
    url: '/coding-tonight/browser/queryBriefList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: briefIntroduction.list,
        status: true,
        message: '请求成功',
      };
    },
  },
  {
    url: '/coding-tonight/browser/queryJsExcuteRuleList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: jsExcuteRule.list,
        status: true,
        message: '请求成功',
      };
    },
  },
  {
    url: '/coding-tonight/browser/queryV8EngineList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: v8Engine.list,
        status: true,
        message: '请求成功',
      };
    },
  },
];
