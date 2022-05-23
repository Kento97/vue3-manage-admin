import type { Tree } from "./type";

const menuListData: Tree[] = [
    {
        icon: "HomeFilled",
        index: "/dashboard",
        title: "系统首页",
    },
    {
        icon: "Menu",
        index: "/table",
        title: "基础表格",
    },
    {
        icon: "Tickets",
        index: "/tabs",
        title: "tab选项卡",
    },
    {
        icon: "Sunset",
        index: "3",
        title: "表单相关",
        subs: [
            {
                index: "/form",
                title: "基本表单",
            },
            {
                index: "/upload",
                title: "文件上传",
            },
            {
                index: "4",
                title: "三级菜单",
                subs: [
                    {
                        index: "/editor",
                        title: "富文本编辑器",
                    },
                ],
            },
        ],
    },
    {
        icon: "Moon",
        index: "/i18n",
        title: "国际化功能",
    },
    {
        icon: "CloseBold",
        index: "7",
        title: "错误处理",
        subs: [
            {
                index: "/permission",
                title: "权限测试",
            },
            {
                index: "/404",
                title: "404页面",
            },
        ],
    },
    {
        icon: "Avatar",
        index: "/donate",
        title: "支持作者",
    },
]

export { menuListData }