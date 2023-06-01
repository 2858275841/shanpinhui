import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

Mock.mock('/mock/banner', { code: 200, message: '成功', data: banner })
Mock.mock('/mock/floor', { code: 200, message: '成功', data: floor })
