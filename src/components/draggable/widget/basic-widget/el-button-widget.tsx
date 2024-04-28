export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		return () => <el-button {...props._config}>{props._config.label || "按钮"}</el-button>
	},
})
