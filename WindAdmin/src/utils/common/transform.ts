// 将hex颜色转成rgb
export function hexToRgba(hex, opacity) {
	//hex："#3ba272"； opacity：透明度
	let rgba =
		"rgba(" +
		parseInt("0x" + hex.slice(1, 3)) +
		"," +
		parseInt("0x" + hex.slice(3, 5)) +
		"," +
		parseInt("0x" + hex.slice(5, 7)) +
		"," +
		opacity +
		")"
	return rgba
	//返回结果：{blue: 114， green: 162 ，red: 59 ，rgba: "rgba(59,162,114,1)"}
}
