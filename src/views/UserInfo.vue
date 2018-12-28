<template>
    <div>
        <div v-for="(item) in infos" :key="item.id">
            <p>{{item.data}}</p>
        </div>
          <mu-paper :z-depth="1">
    <mu-data-table :columns="columns"  :data="infos">
      <template slot-scope="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.data.username}}</td>
        <td class="is-right">{{scope.row.data.sex}}</td>
        <td class="is-right">{{scope.row.data.age}}</td>
        <td class="is-right">{{scope.row.data.phone}}</td>
        <td class="is-right">{{scope.row.data.edu}}</td>
        <td class="is-right">{{scope.row.data.des}}%</td>
      </template>
    </mu-data-table> 
  </mu-paper> 
    </div>
</template>

<script>
import {getInfo} from '@/api'
    export default {
        name:"",
        data() {
            return {
                infos: [],
                columns: [
                    { title: 'id', width: 200, name: 'id' },
                    { title: '姓名', width: 200, name: 'username' },
                    { title: '性别', name: 'sex', width: 126, align: 'center', sortable: true },
                    { title: '年龄', name: 'age', width: 126, align: 'center', sortable: true },
                    { title: '联系方式', name: 'phone', width: 126, align: 'center', sortable: true },
                    { title: '学历', name: 'edu', width: 126, align: 'center', sortable: true },
                    { title: '学习目的', name: 'des', width: 126, align: 'center', sortable: true }
                ],
            }
        },
        mounted(){
            this.getList()
        },
        methods: {
            getList() {
                getInfo().then(res=>{
                    console.log(res);
                    this.infos = res;
                    if(res){
                    }
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>