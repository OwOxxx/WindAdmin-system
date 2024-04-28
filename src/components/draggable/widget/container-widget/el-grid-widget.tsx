import DraggableItem from "../../DraggableItem.vue"

export default defineComponent({
	props: ["_config"],
	setup(props, { slots, emit }) {
		return () => (
			<div class="min-h-50px drag-b">
				<DraggableItem widgetList={props._config.child} container="grid" />
			</div>
		)
	},
})
