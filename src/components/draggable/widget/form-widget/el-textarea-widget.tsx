export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		const inputV = ref("")
		return () => <el-input type="textarea" vModel={inputV.value} {...props._config}></el-input>
	},
})
