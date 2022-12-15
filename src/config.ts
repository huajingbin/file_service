import { getIPAddresses } from "./utils"
export const port = 5000

export const savePath = 'D:\\data\\'

export const assetsAPI = 'static'

export const assetsAddress = `http://${getIPAddresses()}:${port}/${assetsAPI}/`