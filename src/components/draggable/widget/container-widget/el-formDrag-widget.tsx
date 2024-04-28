export default defineComponent({
	props: ["_config", "model", "rules"],
	setup(props, { slots }) {
		return () => (
			<el-form model={props.model} label-width="auto" rules={props.rules} {...props._config}>
				{slots.default?.()}
			</el-form>
		)
	},
})
