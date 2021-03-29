import request from '@/utils/request';

export function login (data) {
  return request ({
    url: '/coding-tonight/user/login',
    method: 'post',
    data,
  });
}

export function getInfo (token) {
  return request ({
    url: '/coding-tonight/user/info',
    method: 'get',
    params: {token},
  });
}

export function logout () {
  return request ({
    url: '/coding-tonight/user/logout',
    method: 'post',
  });
}
