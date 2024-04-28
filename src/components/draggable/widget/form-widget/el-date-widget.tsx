export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		return () => (
			<el-date-picker v-model={props._config.defaultValue} type="date" placeholder="Pick a day" />
		)
	},
})
