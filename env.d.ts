/// <reference types="vite/client" />

// 解决./vue文件中的报错
declare module "*.vue" {
	import type { DefineComponent } from "vue"
	const vueComponent: DefineComponent<{}, {}, any>
	export default vueComponent
}
