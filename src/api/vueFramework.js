import request from '@/utils/request';
//查询“vue源码解析”界面文章列表
export function queryCodeAnalysisList (query) {
  return request ({
    url: '/coding-tonight/vueFramework/queryCodeAnalysisList',
    method: 'get',
    params: query,
  });
}
