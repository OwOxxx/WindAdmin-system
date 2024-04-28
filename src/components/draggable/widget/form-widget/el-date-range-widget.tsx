export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		return () => (
			<el-date-picker
				v-model={props._config.defaultValue}
				type="datetimerange"
				range-separator="To"
				start-placeholder="Start date"
				end-placeholder="End date"
			/>
		)
	},
})
