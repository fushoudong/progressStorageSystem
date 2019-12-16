import Layout from '@/views/layout/Layout'

const order = {
    path: '/orgManage',
    component: Layout,
    meta: {title: '系统管理', icon: 'dingdan', noCache: true, affix: false},
    children: [
        {
            path: '/orgManage/index',
            component: () => import('@/views/orgManage/orgManage/index'),
            name: '员工查询',
            meta: {title: '员工查询', noCache: false, affix: false}
        },
        {
            path: '/privilegeManagement/account',
            component: () => import('@/views/privilegeManagement/account/index'),
            name: '账户管理',
            meta: {title: '账户管理', noCache: false, affix: false}
        },
        {
            path: '/privilegeManagement/role',
            component: () => import('@/views/privilegeManagement/role/index'),
            name: '角色管理',
            meta: {title: '角色管理', noCache: false, affix: false},

        },
        {
            path: '/privilegeManagement/role/permissions',
            component: () => import('@/views/privilegeManagement/role/permissions'),
            hidden:true,
            name: '新增角色',
            meta: {title: '新增角色', noCache: false, affix: false},

        },
        {
            path: '/privilegeManagement/account/opiModel',
            component: () => import('@/views/privilegeManagement/account/opiModel'),
            hidden:true,
            name: '用户增加/查看',
            meta: {title: '用户增加/查看', noCache: false, affix: false},

        }
        // {
        //     path: '/order/luckyFree',
        //     component: () => import('@/views/order/luckyFree/index'),
        //     name: '幸运免单',
        //     meta: {title: '幸运免单', noCache: false, affix: false},
        //
        // }
    ]
};

export default order
