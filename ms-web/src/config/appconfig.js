let test_menu = [
	{
		name: "首页",
		path: "/home",
		component: "Home",
		localFilePath: "views/Home",
		icon: "HomeFilled",
		isSingle: true,
		children: [
			{
				name: "控制台",
				path: "console",
				toPath: "/home/console",
				component: "Console",
				localFilePath: "views/Console",
				icon: "Odometer",
			},
		],
	},
	{
		name: "系统管理",
		path: "/systemManage",
		component: "SystemManage",
		localFilePath: "views/SystemManage",
		icon: "Setting",
		children:[
			{
				name:"用户管理",
				path:"userManage",
				toPath:"/systemManage/userManage",
				component:"UserManage",
				localFilePath:"views/UserManage",
				icon:"User",
			},
		]
	},
	{
		name: "下一页",
		path: "/test4",
		component: "NextPage",
		localFilePath: "views/NextPage",
		icon: "Grid",
		children: [
			{
				name: "测试4",
				path: "test41",
				component: "NextPage",
				localFilePath: "views/NextPage",
				icon: "Grid",
			},
			{
				name: "测试5",
				path: "test42",
				component: "NextPage",
				localFilePath: "views/NextPage",
				icon: "Grid",
				children: [
					{
						name: "测试6",
						path: "test43",
						component: "NextPage",
						localFilePath: "views/NextPage",
						icon: "Grid",
					},
				],
			},
		],
	},
]

export default {
	routes: test_menu,
}
