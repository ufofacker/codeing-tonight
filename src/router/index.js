import Vue from 'vue';
import Router from 'vue-router';

Vue.use (Router);
import Layout from '@/layout';
import componentsRouter from './modules/components';
import chartsRouter from './modules/charts';
import tableRouter from './modules/table';
import nestedRouter from './modules/nested';

/**
 * @description 路由配置
 * hidden: true 设置成true，则不会在菜单栏展示
 * alwaysShow: true 设置成true，则始终会展示菜单的根节点         
 *                               
 *                                
 * redirect: '重定向到的路由路径'   可通过设置为noRedirect来关闭重定向
 * name:'路由名称'             如果使用了<keep-alive>组件则必须设置
 * meta : {
    roles: ['admin','editor']    设置页面角色
    title: 'title'               设置菜单标题
    icon: 'svg-name'/'el-icon-x' 显示在侧边栏的图标
    noCache: true                不缓存页面配置，默认为false
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            设置成false，则对应的路由标题不会显示在面包屑中
    activeMenu: '/example/list'  设置高亮的菜单路径
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import ('@/views/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import ('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: () => import ('@/views/login/auth-redirect'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import ('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import ('@/views/error-page/401'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import ('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/documentation/index'),
        name: 'Documentation',
        meta: {
          title: 'Documentation',
          icon: 'documentation',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import ('@/views/guide/index'),
        name: 'Guide',
        meta: {
          title: 'Guide',
          icon: 'guide',
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/profile/index'),
        name: 'Profile',
        meta: {
          title: 'Profile',
          icon: 'user',
          noCache: true,
        },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'], // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import ('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'], // or you can only set roles in sub nav
        },
      },
      {
        path: 'directive',
        component: () => import ('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission',
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: 'role',
        component: () => import ('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin'],
        },
      },
    ],
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/icons/index'),
        name: 'Icons',
        meta: {
          title: 'Icons',
          icon: 'icon',
          noCache: true,
        },
      },
    ],
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/browser',
    component: Layout,
    redirect: '/browser/briefIntroduction',
    name: 'Browser',
    meta: {
      title: '浏览器',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        path: 'create',
        component: () => import ('@/views/example/create'),
        name: 'CreateArticle',
        meta: {
          title: 'Create Article',
          icon: 'edit',
        },
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import ('@/views/example/edit'),
        name: 'EditArticle',
        meta: {
          title: 'Edit Article',
          noCache: true,
          activeMenu: '/example/list',
        },
        hidden: true,
      },
      {
        path: 'list',
        component: () => import ('@/views/example/list'),
        name: 'list',
        meta: {
          title: 'list',
          icon: 'list',
        },
      },
      {
        path: 'briefIntroduction',
        component: () => import ('@/views/browser'),
        meta: {
          title: '浏览器介绍',
          icon: 'list',
        },
        props: {compName: 'briefIntroduction'},
      },
      {
        path: 'jsExcuteRule',
        component: () => import ('@/views/browser'),
        meta: {
          title: 'Javascript执行机制',
          icon: 'list',
        },
        props: {compName: 'jsExcuteRule'},
      },
      {
        path: 'v8Engine',
        component: () => import ('@/views/browser'),
        meta: {
          title: 'V8工作原理',
          icon: 'list',
        },
        props: {compName: 'v8Engine'},
      },
      {
        path: 'developerTools',
        component: () => import ('@/views/browser'),
        meta: {
          title: '开发者工具',
          icon: 'list',
        },
        props: {compName: 'jsExcuteRule'},
      },
    ],
  },
  {
    path: '/expandKnowledge',
    component: Layout,
    redirect: '/expandKnowledge/optimizeWeb',
    name: 'ExpandKnowledge',
    meta: {
      title: '拓展知识',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        path: 'optimizeWeb',
        component: () => import ('@/views/expand-knowledge'),
        meta: {
          title: '前端性能优化',
          icon: 'list',
        },
        props: {compName: 'optimizeWeb'},
      },
    ],
  },
  {
    path: '/vueFramework',
    component: Layout,
    redirect: '/vueFramework/codeAnalysis',
    name: 'VueFramework',
    meta: {
      title: 'Vue技术栈',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        path: 'codeAnalysis',
        component: () => import ('@/views/vue-framework'),
        meta: {
          title: 'Vue框架源码分析',
          icon: 'list',
        },
        props: {compName: 'codeAnalysis'},
      },
    ],
  },
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/tab/index'),
        name: 'Tab',
        meta: {
          title: 'Tab',
          icon: 'tab',
        },
      },
    ],
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: () => import ('@/views/error-page/401'),
        name: 'Page401',
        meta: {
          title: '401',
          noCache: true,
        },
      },
      {
        path: '404',
        component: () => import ('@/views/error-page/404'),
        name: 'Page404',
        meta: {
          title: '404',
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import ('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: {
          title: 'Error Log',
          icon: 'bug',
        },
      },
    ],
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel',
    },
    children: [
      {
        path: 'export-excel',
        component: () => import ('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: {
          title: 'Export Excel',
        },
      },
      {
        path: 'export-selected-excel',
        component: () => import ('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: {
          title: 'Export Selected',
        },
      },
      {
        path: 'export-merge-header',
        component: () => import ('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: {
          title: 'Merge Header',
        },
      },
      {
        path: 'upload-excel',
        component: () => import ('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: {
          title: 'Upload Excel',
        },
      },
    ],
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: {
      title: 'Zip',
      icon: 'zip',
    },
    children: [
      {
        path: 'download',
        component: () => import ('@/views/zip/index'),
        name: 'ExportZip',
        meta: {
          title: 'Export Zip',
        },
      },
    ],
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import ('@/views/pdf/index'),
        name: 'PDF',
        meta: {
          title: 'PDF',
          icon: 'pdf',
        },
      },
    ],
  },
  {
    path: '/pdf/download',
    component: () => import ('@/views/pdf/download'),
    hidden: true,
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/theme/index'),
        name: 'Theme',
        meta: {
          title: 'Theme',
          icon: 'theme',
        },
      },
    ],
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import ('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: {
          title: 'Clipboard',
          icon: 'clipboard',
        },
      },
    ],
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: {
          title: 'External Link',
          icon: 'link',
        },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];

const createRouter = () =>
  new Router ({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter ();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter ();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
