export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-rate v-model={props._config.defaultValue} />
	},
})
