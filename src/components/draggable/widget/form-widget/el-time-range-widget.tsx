export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => (
			<el-time-picker
				vModel={props._config.defaultValue}
				is-range
				range-separator="To"
				start-placeholder="Start time"
				end-placeholder="End time"
			/>
		)
	},
})
