import { useUserStore } from "@/store"
import { AxiosRequestConfig } from "axios"

export default function (config: AxiosRequestConfig) {
	const useStore = useUserStore()
	if (config) {
		if (!config.headers) {
			config.headers = {}
		}
		if (!config.headers["Auth"]) {
			config.headers["Auth"] = useStore.token
		}
	}
	return config
}
