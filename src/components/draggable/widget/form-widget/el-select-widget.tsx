export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		const inputV = ref(1)
		return () => (
			<div class="w-full">
				<el-select vModel={inputV.value} {...props._config}>
					{props._config.optionItems.map(it => (
						<el-option key={it.value} label={it.label} value={it.value} />
					))}
				</el-select>
			</div>
		)
	},
})
