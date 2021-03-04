<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box ">
        <img src="../../assets/logo.png" alt="">
      </div>
      <!--      登录表单-->
      <el-form ref="form_login" :rules="login_rule" :model="form_login"  class="login_form">

        <el-form-item prop="username">
          <el-input v-model="form_login.username" prefix-icon="fa fa-user" ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="form_login.password "  show-password
                    prefix-icon="fa fa-lock"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="toLogin">登录</el-button>
          <el-button type="info" @click="restLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<script>
  import {reqLogin} from "@/api/index.js";

  export default {
    data() {
      return {
        form_login: {
          username: '123',
          password : '123'
        },
        login_rule: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '请输入3到10个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      restLoginFrom(){
        this.$refs.form_login.resetFields()
      },
      toLogin(){
        this.$refs['form_login'].validate( async (valid) => {
          if(!valid) return this.$message.error('密码与账号不能为空')
           const  {data:res} = await  reqLogin(this.form_login)
          console.log(res)
              if(res.meta.status!==200) return this.$message.error('密码或账号错误')
          this.$message.success('登录成功')
             this.$router.push('/home')
        });
      }
    }
  }
</script>
<style lang="less" scoped>
  .login_container {
    background: #2b4b6b;
    height: 100%;

    .login_box {
      width: 450px;
      height: 300px;
      background: #fff;
      border-radius: 3px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        box-shadow: 0 0 10px #ddd;

        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background: #eee;
        }
      }

      .login_form {
        position: absolute;
        bottom: 10px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

        .btns {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
