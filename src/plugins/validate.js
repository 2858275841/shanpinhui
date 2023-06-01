// vee-validate 表单验证
import Vue from 'vue'

import VeeValidate from 'vee-validate'
// eslint-disable-next-line camelcase
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`
  },
  attributes: {
    phone: '手机号',
    password: '密码',
    password1: '确认密码',
    code: '验证码',
    agree: '协议'
  }
})

// 自定义表单验证
VeeValidate.Validator.extend('tongyi', {
  validate: value => value,
  getMessage: fieId => fieId + '必须同意'
})
