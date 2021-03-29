import request from '@/utils/request';

export function getRoutes () {
  return request ({
    url: '/coding-tonight/routes',
    method: 'get',
  });
}

export function getRoles () {
  return request ({
    url: '/coding-tonight/roles',
    method: 'get',
  });
}

export function addRole (data) {
  return request ({
    url: '/coding-tonight/role',
    method: 'post',
    data,
  });
}

export function updateRole (id, data) {
  return request ({
    url: `/coding-tonight/role/${id}`,
    method: 'put',
    data,
  });
}

export function deleteRole (id) {
  return request ({
    url: `/coding-tonight/role/${id}`,
    method: 'delete',
  });
}
