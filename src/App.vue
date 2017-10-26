<template>
    <div>
        <el-row type="flex"  justify="center">
            <el-col :span="4">
                <div>
                    <el-tabs v-model="activeName" class="login-tabs">
                        <el-tab-pane label="登录" name="first">
                            <el-form ref="form" :model="form">
                                <el-form-item>
                                    <el-input v-model="form.name" prefix-icon="el-icon-my-user"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input v-model="form.password" prefix-icon="el-icon-my-password"></el-input>
                                </el-form-item>
                                 <el-form-item>
                                <el-row type="flex" justify="end">
                                  <el-col :span="6.5">
                                 <el-switch v-model="form.rememberme" active-text="7天内免登录" inactive-text=""></el-switch>
                                   </el-col>
                                </el-row>
                                 </el-form-item>
                                <el-form-item>
                                <el-row type="flex" justify="space-around">
                                  <el-col :span="0.5">
                                    <el-button type="primary" @click="onSubmit">登录</el-button>
                                  </el-col>
                                </el-row>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="注册" name="second">
                          <el-form ref="form" :model="form">
                            <el-form-item>
                                <el-input v-model="form.name" prefix-icon="el-icon-my-user"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input v-model="form.password" prefix-icon="el-icon-my-password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input v-model="form.password2" prefix-icon="el-icon-my-confirmpassword"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input v-model="form.email" prefix-icon="el-icon-my-email"></el-input>
                                </el-form-item>
                                <el-form-item>
                                  <el-row type="flex" justify="space-around">
                                  <el-col :span="0.5">
                                    <el-button type="primary" @click="onSubmit">注册</el-button>
                                  </el-col>
                                </el-row>
                                    
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="stylus">
    .login-tabs {
        .el-tabs__nav {
            width 100%

            .el-tabs__item {
                width 50%
                text-align center
            }
        }
    }
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        rememberme: false
      },
      activeName: "first"
    };
  },
  methods: {
    onSubmit() {
      this.$ajax.post('oauth2/token',
      {
          name: 'will',
          password: 'mgx123'
      })
      .then(response=>{
          console.log(response)
      })
      .catch(function(error){
          console.log(error)
      });
    }
  }
};
</script>