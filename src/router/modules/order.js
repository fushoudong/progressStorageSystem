import Layout from '@/views/layout/Layout'

const order = {
    path: '/order',
    component: Layout,
    meta: {title: '订单管理', icon: 'dingdan', noCache: true, affix: false,},
    children: [
       
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
