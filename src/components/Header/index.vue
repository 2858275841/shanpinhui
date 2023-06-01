<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="loginName ? false : true">
            <span>请</span>
            <a href="JavaScript:;" @click="upLogin">登录</a>
            <a href="JavaScript:;" class="register" @click="upRegister"
              >免费注册</a
            >
          </p>
          <p style="border-left: none" v-if="loginName ? true : false">
            <span></span>
            <a href="JavaScript:;">{{ loginName }}</a>
            <a
              href="JavaScript:;"
              class="register"
              @click="loginOut"
              >退出登录</a
            >
          </p>
        </div>
        <div class="typeList">
          <router-link to='/center'>我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="/">
          <img src="@/assets/images/Header/logo.png" alt="" />
        </a>
      </h1>
      <div class="searchArea">
        <form class="searchForm" :v-model="from">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            autocomplete="off"
            v-model="from.keyword"
            @keyup.enter.prevent=""
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      from: {
        keyword: ''
      }
    }
  },
  methods: {
    upLogin() {
      this.$router.push('/login')
    },
    upRegister() {
      this.$router.push('/register')
    },
    goSearch() {
      if (this.$route.query) {
        const location = {
          name: 'search',
          params: { keyword: this.from.keyword || undefined }
        }
        location.query = this.$route.query
        this.$router.push(location)
      }
    },
    // 退出登录
    async loginOut() {
      try {
        await this.$store.dispatch('userLoginOut')
        this.$router.push('/')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  mounted() {
    this.$bus.$on('delKeyword', (data) => {
      this.from.keyword = data
    })
  },
  computed: {
    ...mapState({
      loginName: (state) => state.User.userInfo.loginName
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
