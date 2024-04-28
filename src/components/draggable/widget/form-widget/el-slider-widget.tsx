export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => <el-slider v-model={props._config.defaultValue} />
	},
})
