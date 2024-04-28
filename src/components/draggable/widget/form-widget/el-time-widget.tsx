export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-time-select vModel={props._config.defaultValue} placeholder="Select time" />
	},
})
