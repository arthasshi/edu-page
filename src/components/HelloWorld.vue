<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      写在前面：当你们看到这个页面时，证明你看到了我的信息，有想学习的意向，本着对学生负责的原则，想对你们有一个简单的了解，大家认真填写一下下方的信息，没有任何敏感信息，放心填写！
    </p>
    <p>
      加我微信：13292680403
    </p>
    <h3 >主要：</h3>
     <mu-form ref="form" :model="validateForm" class="form" label-position="left">
    <mu-form-item label="怎么称呼"  prop="username" :rules="usernameRules">
      <mu-text-field  v-model="validateForm.username" prop="username" placeholder="最好是加我微信时所使用的微信号的昵称"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="性别" prop="sex" >
      <mu-radio :value="0" v-model="validateForm.sex"  label="女"></mu-radio>
      <mu-radio :value="1" v-model="validateForm.sex"  label="男"></mu-radio>
    </mu-form-item>
    <mu-form-item label="年龄" prop="age" >
        <mu-text-field type="text" v-model="validateForm.age" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="学历" prop="edu" >
        <mu-text-field type="text" v-model="validateForm.edu" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="联系方式" prop="phone" help-text="最好是微信或手机号，方便我能联系到你" >
        <mu-text-field type="text" v-model="validateForm.phone" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="学习的目的" help-text="阐述一下你为什么要学习编程，兴趣or找工作" prop="des" :rules="desRules">
      <mu-text-field multi-line :rows="3" :rows-max="6" v-model="validateForm.des" placeholder="随便写点什么"></mu-text-field>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
  </div>
</template>

<script>
import {saveInfo} from '@/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必填项'},
        { validate: (val) => val.length >= 2, message: '用户名长度大于2'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      desRules: [
        { validate: (val) => !!val, message: '必填项'},
        { validate: (val) => val.length >= 3 && val.length <= 500, message: '再多写一些，介绍内容不能少于3个字'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        username: '',
        age:'',
        phone:'',
        edu:'',
        sex:'',
        des:''
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        if(result){
          saveInfo(this.validateForm).then(res=>{
            console.log(res)
          }).catch(error=>{
            console.log(error)
          })
        }
      });
    },
    clear(){
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        age:'',
        phone:'',
        edu:'',
        sex:'',
        des:''
      };
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .hello{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
/deep/  .form{
    width: 100%;
    margin: 20px 0;
    .mu-form-item{
      width: 100%;
    }
    .mu-form-item-label{
      width: 100px;
      text-align: end;
    }
  .mu-text-field{
    width: calc(100% - 100px);
  }
}
}

</style>
