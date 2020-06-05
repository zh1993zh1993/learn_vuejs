   <template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <div>
      <el-button type="primary"  @click="startHacking">Start</el-button>
    </div>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <el-button type="success" @click="submitRadio">提交</el-button>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <el-switch
            v-model="value"
            active-text="开"
            inactive-text="关"
            active-color="#13ce66"
            inactive-color="#ff4949">
    </el-switch>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <p>小计：{{totalFee}}</p>
    <!--pre标签：在界面上打印某个数据-->
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'use vue 2.0',
      radio:3,
      checkList: ['选中且禁用','复选框 A'],
      value: true,
      num:1,
      price:2198
    }
  },
  computed:{
    totalFee(){
      return this.num*this.price
    }
  },
  methods: {
    handleChange(){

    },
    submitRadio(){
      this.$notify({
        title: '你选择的是'+this.radio,
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        // duration:多少秒后隐藏
        duration: 3000
      })
    },
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
z
}
</style>
