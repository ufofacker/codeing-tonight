import request from '@/utils/request';

export function searchUser (name) {
  return request ({
    url: '/coding-tonight/search/user',
    method: 'get',
    params: {name},
  });
}

export function transactionList (query) {
  return request ({
    url: '/coding-tonight/transaction/list',
    method: 'get',
    params: query,
  });
}
