export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-divider {...props._config} />
	},
})
