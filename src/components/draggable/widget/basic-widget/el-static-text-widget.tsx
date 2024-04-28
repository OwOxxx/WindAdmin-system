export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-text vModel={props._config.defaultValue} {...props._config}></el-text>
	},
})
