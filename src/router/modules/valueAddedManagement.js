import Layout from '@/views/layout/Layout'

const valueAddedManagement = {
    path: '/valueAddedManagement',
    component: Layout,
    meta: {title: '报表管理', icon: 'guanggaoguanli', noCache: true, affix: false},
    children: [
        {
            path: '/valueAddedAtatistics/index',
            component: () => import('@/views/valueAddedManagement/valueAddedAtatistics/index'),
            name: '采购报表统计',
            meta: {title: '采购报表统计', noCache: false, affix: false}
        },
        {
            path: '/valueAddedAtatistics/channelDetails',
            component: () => import('@/views/valueAddedManagement/valueAddedAtatistics/channelDetails'),
            hidden:true,
            name: '渠道详情',
            meta: {title: '渠道详情', noCache: false, affix: false},

        },
        {
            path: '/advertisingManagement/orderDetails',
            component: () => import('@/views/valueAddedManagement/valueAddedAtatistics/orderDetails'),
            hidden:true,
            name: '报表详情',
            meta: {title: '报表详情', noCache: false, affix: false},

        },
        {
            path: '/distributionSettings/index',
            component: () => import('@/views/valueAddedManagement/distributionSettings/index'),
            name: '分润设置',
            meta: {title: '分润设置', noCache: false, affix: false},

        },
    ]
};

export default valueAddedManagement
