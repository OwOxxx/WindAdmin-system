export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		const flie_list = reactive([])
		return () => (
			<el-upload
				vModel:file-list={flie_list}
				auto-upload={false}
				action={props._config.uploadUrl}
				{...props._config}>
				<el-button type="primary">Click to upload</el-button>
			</el-upload>
		)
	},
})
