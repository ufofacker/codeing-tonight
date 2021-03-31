import request from '@/utils/request';
//查询“前端性能优化”界面文章列表
export function queryOptimizeWebList (query) {
  return request ({
    url: '/coding-tonight/expandKnowledge/queryOptimizeWebList',
    method: 'get',
    params: query,
  });
}
