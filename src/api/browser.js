import request from '@/utils/request';
//查询“浏览器简介”界面文章列表
export function queryBriefList (query) {
  return request ({
    url: '/coding-tonight/browser/queryBriefList',
    method: 'get',
    params: query,
  });
}
//查询“Javascript执行机制”界面文章列表
export function queryJsExcuteRuleList (query) {
  return request ({
    url: '/coding-tonight/browser/queryJsExcuteRuleList',
    method: 'get',
    params: query,
  });
}
//查询“V8工作原理”界面文章列表
export function queryV8EngineList (query) {
    return request ({
      url: '/coding-tonight/browser/queryV8EngineList',
      method: 'get',
      params: query,
    });
  }

export function fetchArticle (id) {
  return request ({
    url: '/coding-tonight/article/detail',
    method: 'get',
    params: {id},
  });
}

export function fetchPv (pv) {
  return request ({
    url: '/coding-tonight/article/pv',
    method: 'get',
    params: {pv},
  });
}

export function createArticle (data) {
  return request ({
    url: '/coding-tonight/article/create',
    method: 'post',
    data,
  });
}

export function updateArticle (data) {
  return request ({
    url: '/coding-tonight/article/update',
    method: 'post',
    data,
  });
}
