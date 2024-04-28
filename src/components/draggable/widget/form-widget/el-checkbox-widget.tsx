export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		const inputV = ref()
		return () => (
			<el-checkbox-group vModel={inputV.value} {...props._config}>
				{props._config.optionItems.map(it => (
					<el-checkbox value={it.value}>{it.label}</el-checkbox>
				))}
			</el-checkbox-group>
		)
	},
})
