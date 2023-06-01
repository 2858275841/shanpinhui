<template>
  <div>
    <!-- 顶部 -->
    <Header></Header>
    <router-view></router-view>
    <!-- 底部 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 请求三级联动的数据
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less"></style>
