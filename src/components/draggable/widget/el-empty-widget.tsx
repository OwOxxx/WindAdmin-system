export default defineComponent({
	props: [],
	setup(props, { slots, emit }) {
		return () => (
			<div
				class="h100 drag-b"
				v-loading="loading"
				element-loading-text="组件开发中..."
				// element-loading-spinner="svg"
				// element-loading-svg-view-box="-10, -10, 50, 50"
			></div>
		)
	},
})
