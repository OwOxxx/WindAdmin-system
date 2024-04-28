export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-input-number vModel={props._config.defaultValue} {...props._config} />
	},
})
