import { Plus } from "@element-plus/icons-vue"

export default defineComponent({
	props: ["_config"],
	setup(props, { slots }) {
		const flie_list = reactive([])
		return () => (
			<el-upload
				vModel:file-list={flie_list}
				list-type="picture-card"
				auto-upload={false}
				action={props._config.uploadUrl}
				{...props._config}>
				<el-icon>
					<Plus />
				</el-icon>
			</el-upload>
		)
	},
})
