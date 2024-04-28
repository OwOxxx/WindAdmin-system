export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		return () => <el-color-picker {...props._config} />
	},
})
