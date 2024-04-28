export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		const inputV = ref(1)
		return () => (
			<el-radio-group vModel={inputV.value} {...props._config}>
				{props._config.optionItems.map(it => (
					<el-radio value={it.value}>{it.label}</el-radio>
				))}
			</el-radio-group>
		)
	},
})
