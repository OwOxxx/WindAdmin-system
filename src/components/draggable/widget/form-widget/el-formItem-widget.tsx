export default defineComponent({
	props: ["_config", "defaultLabel"],
	setup(props, { slots }) {
		return () => (
			<el-form-item
				label={props._config.label || props.defaultLabel}
				prop={props._config.prop}
				class="m0! p10">
				{slots.default?.()}
			</el-form-item>
		)
	},
	mounted() {},
})
