import fs from 'fs'
import {join} from 'path'
import { networkInterfaces } from 'os'
import {savePath} from '../config'

export function writeFile(file,fileName) {
  return new Promise((resovle, reject) => {
    const readStream = fs.createReadStream(file)
    const writeStream = fs.createWriteStream(join(savePath, fileName))
    readStream.pipe(writeStream)
    readStream.once('end', () => {
      writeStream.close()
      resovle(true)
    })
    readStream.once('error', (err: Error) => {
      reject(err)
    })
  })
}

export function getIPAddresses() {
  const interfaces = networkInterfaces()
  for (let devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
  return ''
}