import vue from "@vitejs/plugin-vue"
import { defineConfig, UserConfigExport, ConfigEnv } from "vite"
import { viteMockServe } from "vite-plugin-mock"
import path from "path"

// 按需引入组件
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// svg图标插件
import viteSvgIcons, { createSvgIconsPlugin } from "vite-plugin-svg-icons"

import ElementPlus from "unplugin-element-plus/vite"

// 可视化打包分析
import { visualizer } from "rollup-plugin-visualizer"

// 压缩插件
import viteCompression from "vite-plugin-compression"

// css原子化UnoCSS
import UnoCSS from "unocss/vite"
export default ({ command }: ConfigEnv): UserConfigExport => {
	return {
		base: "/",
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
			ElementPlus({ useSource: true }),
			//引入SVG图标素材文件
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), "src/icons")],
				symbolId: "icon-[dir]-[name]",
				customDomId: "menu-default",
			}),
			// UnoCSS
			UnoCSS(),
			// viteMockServe({
			//   mockPath: 'mock',
			//   enable: true,
			// }),
			visualizer({ open: true }),
		],
		build: {
			rollupOptions: {
				plugins: [
					// viteCompression({
					// 	verbose: true, // 是否在控制台中输出压缩结果
					// 	disable: false,
					// 	threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
					// 	algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
					// 	ext: ".gz",
					// 	deleteOriginFile: true, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
					// }),
				],
			},
		},
		esbuild: {
			drop: ["console", "debugger"], // 去掉console和debugger
		},
		server: {
			open: true,
			port: 8888,
			proxy: {
				"/api": {
					target: "",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ""),
				},
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/styles/variables.scss" as *;', // 引入变量
				},
			},
		},
		resolve: {
			alias: [
				{
					find: "@/",
					replacement: path.resolve(process.cwd(), "src") + "/",
				},
				{
					find: "~/",
					replacement: path.resolve(process.cwd(), "") + "/",
				},
			],
		},
	}
}
