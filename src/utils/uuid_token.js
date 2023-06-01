// 生成一个随机的UUID身份
import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
  let uuidToken = localStorage.getItem('UUID_TOKEN')
  // 本地没有就存储游客身份
  if (!uuidToken) {
    uuidToken = uuidv4()
    localStorage.setItem('UUID_TOKEN', uuidToken)
  }
  return uuidToken
}
