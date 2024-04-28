declare namespace Drag {
	type WidgetOption = {
		id?: string
		type: string
		icon?: string
		internal?: boolean
		category?: string
		component?: any
		options: {
			child?: Array<any>
			[key: string]: any
		}
	}
}
