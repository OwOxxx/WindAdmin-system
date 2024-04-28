export const containers = [
	{
		type: "grid",
		category: "container",
		icon: "grid",
		options: {
			child: [],
			prop: "defaultValue",
			gutter: 12,
			colHeight: null, //栅格列统一高度属性，用于解决栅格列设置响应式布局浮动后被挂住的问题！！
			// customClass: "", //自定义css类名
		},
	},
	{
		type: "table",
		category: "container",
		icon: "table",
		options: {
			child: [],
			prop: "defaultValue",
			// customClass: "", //自定义css类名
		},
	},
	{
		type: "tab",
		category: "container",
		icon: "tab",
		// displayType: "border-card",
		// tabs: [],
		options: {
			prop: "defaultValue",
			// customClass: "", //自定义css类名
		},
	},
	{
		type: "grid-col",
		category: "container",
		icon: "grid-col",
		// internal: true,
		// widgetList: [],
		options: {
			prop: "defaultValue",
			span: 12,
			offset: 0,
			push: 0,
			pull: 0,
			responsive: false, //是否开启响应式布局
			md: 12,
			sm: 12,
			xs: 12,
			// customClass: "", //自定义css类名
		},
	},
	{
		type: "table-cell",
		category: "container",
		icon: "table-cell",
		// internal: true,
		// widgetList: [],
		options: {
			prop: "defaultValue",
			cellWidth: "",
			cellHeight: "",
			colspan: 1,
			rowspan: 1,
			wordBreak: false, //是否自动换行
			// customClass: "", //自定义css类名
		},
	},
	{
		type: "tab-pane",
		category: "container",
		icon: "tab-pane",
		// internal: true,
		// widgetList: [],
		options: {
			prop: "defaultValue",
			label: "",
			active: false,
			disabled: false,
			// customClass: "", //自定义css类名
		},
	},
]

export const basicFields = [
	{
		type: "input",
		icon: "text-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "input",
			type: "text",
			defaultValue: "",
			placeholder: "",
			size: "default",
			readonly: false,
			disabled: false,
			clearable: true,
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			minLength: null,
			maxLength: null,
			showWordLimit: false,
			prefixIcon: "",
			suffixIcon: "",
			appendButton: false,
			appendButtonDisabled: false,
			buttonIcon: "custom-search",
			//-------------------
			onCreated: "",
			onMounted: "",
			onInput: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
			onAppendButtonClick: "",
		},
		formItemConfig: {},
	},
	{
		type: "textarea",
		icon: "textarea-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "textarea",
			rows: 3,
			defaultValue: "",
			placeholder: "",

			size: "default",

			readonly: false,
			disabled: false,

			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			minLength: null,
			maxLength: null,
			showWordLimit: false,
			//-------------------
			onCreated: "",
			onMounted: "",
			onInput: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "number",
		icon: "number-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "number",
			defaultValue: 0,
			placeholder: "",
			size: "default",
			disabled: false,
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			min: -100000000000,
			max: 100000000000,
			precision: 0,
			step: 1,
			controlsPosition: "right",
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "radio",
		icon: "radio-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "radio",

			defaultValue: null,

			size: "default",
			displayStyle: "inline",
			buttonStyle: false,
			border: false,

			disabled: false,

			optionItems: [
				{ label: "radio 1", value: 1 },
				{ label: "radio 2", value: 2 },
				{ label: "radio 3", value: 3 },
			],
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "checkbox",
		icon: "checkbox-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "checkbox",

			defaultValue: [],

			size: "default",
			displayStyle: "inline",
			buttonStyle: false,
			border: false,

			disabled: false,

			optionItems: [
				{ label: "check 1", value: 1 },
				{ label: "check 2", value: 2 },
				{ label: "check 3", value: 3 },
			],
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "select",
		icon: "select-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "select",

			defaultValue: "",
			placeholder: "",

			size: "default",

			disabled: false,

			clearable: true,
			filterable: false,
			allowCreate: false,
			remote: false,
			automaticDropdown: false, //自动下拉
			multiple: false,
			multipleLimit: 0,
			optionItems: [
				{ label: "select 1", value: 1 },
				{ label: "select 2", value: 2 },
				{ label: "select 3", value: 3 },
			],
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onRemoteQuery: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "time",
		icon: "time-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "time",

			defaultValue: null,
			placeholder: "",

			size: "default",
			autoFullWidth: true,

			readonly: false,
			disabled: false,

			clearable: true,
			editable: false,
			format: "HH:mm:ss", //时间格式
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "time-range",
		icon: "time-range-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "time-range",

			defaultValue: null,
			startPlaceholder: "",
			endPlaceholder: "",

			size: "default",
			autoFullWidth: true,

			readonly: false,
			disabled: false,

			clearable: true,
			editable: false,
			format: "HH:mm:ss", //时间格式
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "date",
		icon: "date-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "date",

			type: "date",
			defaultValue: null,
			placeholder: "",

			size: "default",
			autoFullWidth: true,

			readonly: false,
			disabled: false,

			clearable: true,
			editable: false,
			format: "YYYY-MM-DD", //日期显示格式
			valueFormat: "YYYY-MM-DD", //日期对象格式
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "date-range",
		icon: "date-range-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "date-range",

			type: "daterange",
			defaultValue: null,
			startPlaceholder: "",
			endPlaceholder: "",

			size: "default",
			autoFullWidth: true,

			readonly: false,
			disabled: false,

			clearable: true,
			editable: false,
			format: "YYYY-MM-DD", //日期显示格式
			valueFormat: "YYYY-MM-DD", //日期对象格式
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},

	{
		type: "switch",
		icon: "switch-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "switch",

			defaultValue: null,

			disabled: false,

			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			switchWidth: 40,
			activeText: "",
			inactiveText: "",
			activeColor: null,
			inactiveColor: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "rate",
		icon: "rate-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "rate",
			defaultValue: null,

			disabled: false,

			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			max: 5,
			lowThreshold: 2,
			highThreshold: 4,
			allowHalf: false,
			showText: false,
			showScore: false,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "color",
		icon: "color-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "color",

			defaultValue: null,

			size: "default",

			disabled: false,

			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "slider",
		icon: "slider-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "slider",

			showStops: true,
			size: "default",

			disabled: false,

			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			min: 0,
			max: 100,
			step: 10,
			range: false,
			//vertical: false,
			height: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onValidate: "",
		},
	},

	{
		type: "static-text",
		icon: "static-text",
		category: "notFormItemChild",
		options: {
			prop: "defaultValue",

			textContent: "static text",
			textAlign: "left",
			fontSize: "13px",
			preWrap: false, //是否自动换行
			//-------------------
			// customClass: "", //自定义css类名
			//-------------------
			onCreated: "",
			onMounted: "",
		},
	},

	{
		type: "html-text",
		icon: "html-text",
		category: "notFormItemChild",
		options: {
			prop: "defaultValue",

			htmlContent: "<b>html text</b>",
			//-------------------
			// customClass: "", //自定义css类名
			//-------------------
			onCreated: "",
			onMounted: "",
		},
	},

	{
		type: "button",
		icon: "button",
		category: "notFormItemChild",
		options: {
			prop: "defaultValue",
			label: "",

			size: "default",
			displayStyle: "block",
			disabled: false,

			type: "",
			plain: false,
			round: false,
			circle: false,
			icon: null,
			//-------------------
			// customClass: "", //自定义css类名
			//-------------------
			onCreated: "",
			onMounted: "",
			onClick: "",
		},
	},

	{
		type: "divider",
		icon: "divider",
		category: "notFormItemChild",
		options: {
			prop: "defaultValue",
			label: "",

			direction: "horizontal",
			contentPosition: "center",

			//-------------------
			// customClass: "", //自定义css类名
			//-------------------
			onCreated: "",
			onMounted: "",
		},
	},

	//
]

export const advancedFields = [
	{
		type: "picture-upload",
		icon: "picture-upload-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "picture-upload",
			disabled: false,
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			customRule: "",
			customRuleHint: "",
			//-------------------
			uploadURL: "",
			uploadTip: "",
			withCredentials: false,
			multipleSelect: false,
			showFileList: true,
			limit: 3,
			fileMaxSize: 5, //MB
			fileTypes: ["jpg", "jpeg", "png"],
			//headers: [],
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onBeforeUpload: "",
			onUploadSuccess: "",
			onUploadError: "",
			onFileRemove: "",
			onValidate: "",
			//onFileChange: '',
		},
	},

	{
		type: "file-upload",
		icon: "file-upload-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "file-upload",
			disabled: false,
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			customRule: "",
			customRuleHint: "",
			//-------------------
			uploadURL: "",
			uploadTip: "",
			withCredentials: false,
			multipleSelect: false,
			showFileList: true,
			limit: 3,
			fileMaxSize: 5, //MB
			fileTypes: ["doc", "docx", "xls", "xlsx"],
			//headers: [],
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onBeforeUpload: "",
			onUploadSuccess: "",
			onUploadError: "",
			onFileRemove: "",
			onValidate: "",
			//onFileChange: '',
		},
	},

	{
		type: "rich-editor",
		icon: "rich-editor-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "rich-editor",
			placeholder: "",
			contentHeight: "200px",
			disabled: false,
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			customRule: "",
			customRuleHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			minLength: null,
			maxLength: null,
			showWordLimit: false,
			//-------------------
			onCreated: "",
			onMounted: "",
			onValidate: "",
		},
	},

	{
		type: "cascader",
		icon: "cascader-field",
		category: "isFormItemChild",
		options: {
			prop: "defaultValue",
			label: "cascader",
			defaultValue: "",
			placeholder: "",
			size: "default",
			disabled: false,
			clearable: true,
			filterable: false,
			multiple: false,
			checkStrictly: false, //可选择任意一级选项，默认不开启
			showAllLevels: true, //显示完整路径
			optionItems: [
				{ label: "select 1", value: 1, children: [{ label: "child 1", value: 11 }] },
				{ label: "select 2", value: 2 },
				{ label: "select 3", value: 3 },
			],
			required: false,
			requiredHint: "",
			validation: "",
			validationHint: "",
			customRule: "",
			customRuleHint: "",
			//-------------------
			// customClass: "", //自定义css类名
			labelIconClass: null,
			labelIconPosition: "rear",
			labelTooltip: null,
			//-------------------
			onCreated: "",
			onMounted: "",
			onChange: "",
			onFocus: "",
			onBlur: "",
			onValidate: "",
		},
	},
]

export const formConfig = {
	// modelName: "formData",
	// refName: "vForm",
	// rulesName: "rules",
	labelWidth: 120,
	labelPosition: "left",
	size: "default",
	// labelAlign: "label-right-align",
	// cssCode: "",
	// customClass: [],
	// functions: "",
	// layoutType: "PC",
	// jsonVersion: 3,
	// onFormCreated: "",
	// onFormMounted: "",
	// onFormDataChange: "",
	// dataSources: [],
	// onFormValidate: "",
}

export const customFields = []

export function addContainerWidgetSchema(containerSchema) {
	containers.push(containerSchema)
}

export function addBasicFieldSchema(fieldSchema) {
	basicFields.push(fieldSchema)
}

export function addAdvancedFieldSchema(fieldSchema) {
	advancedFields.push(fieldSchema)
}

export function addCustomWidgetSchema(widgetSchema) {
	customFields.push(widgetSchema)
}
