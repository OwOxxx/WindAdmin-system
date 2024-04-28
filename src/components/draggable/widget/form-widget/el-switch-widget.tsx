export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-switch v-model={props._config.defaultValue} />
	},
})
