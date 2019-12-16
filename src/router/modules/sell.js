import Layout from '@/views/layout/Layout'
const device = {
    path: '/device',
    component: Layout,
    meta: { title: '销售管理', icon: 'shebeiguanli1-copy', noCache: true, affix: false },
    children: [
        {
            path: '/device/list',
            component: () => import('@/views/device/list/index'),
            name: '商品销售',
            /* affix: true 一直固定不关闭 */
            meta: { title: '商品销售', noCache: false, affix: false }
        },
        {
            path: '/device/list/edit',
            component: () => import('@/views/device/list/edit'),
            hidden: true,
            name: '设备编辑',
            /* affix: true 一直固定不关闭 */
            meta: { title: '设备编辑', noCache: false, affix: false }
        },
        {
            path: '/device/group',
            component: () => import('@/views/device/group/index'),
            name: 'device_group_list',
            /* affix: true 一直固定不关闭 */
            meta: { title: '销售退换货', noCache: false, affix: false }
        },
        {
            path: '/device/salesOrder',
            component: () => import('@/views/order/salesOrder/index'),
            name: '查看销售订单',
            meta: {title: '查看销售订单', noCache: false, affix: false}
        },
    ]
}
export default device