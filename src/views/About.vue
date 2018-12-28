<template>
  <div class="about">
    <h3>这个Q&A列表会根据大家关心的问题不断补充</h3>
    <mu-expansion-panel   :expand="true">
    <h4 slot="header" >Q：主讲内容？</h4>
    <ul class="ans-container">
      <li>html：包含基本用法，常用元素介绍，html5新增特性</li>
      <li>css：基本用法，css动画，css3新增特性</li>
      <li>JavaScript：基础语法，es6新特性（包含面向对象的概念），dom操作</li>
      <li>jquery：只简单介绍，能帮助理解前端的发展历史，承上启下</li>
      <li>vuejs：主讲，基础用法，规范</li>
      <li>git的使用：主讲，基础用法，规范</li>
      <li>小程序开发：开发规范，使用vue开发小程序</li>
      <li>1-2个实战项目</li>
      <li>nodejs：基础用法，规范，可以简单的部署，写一些接口，辅助前端开发</li>
      <li>linux：进阶课程，帮助学生在未来想自己独立开发的情况下，完整的掌握整个网站开发流程</li>
      <li>看授课情况会进行额外的补充</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：收费？</h4>
     <ul class="ans-container">
      <li>根据课时的情况待定</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：最终学习成果？</h4>
     <ul class="ans-container">
      <li>在学生按照教学大纲完成学习&&不缺课&&完成课后作业&&认真对待实战项目的情况下：（写了这一堆条件，总结来说就是积极配合，努力学习）</li>
      <li>可以去找工作：一年工作经验的前端职位都可胜任</li>
      <li>可以跟我一起接外包：这个真的是如果好苗子，我是不会忘了你们的哈哈哈哈</li>
      <li>可以自己独立开发：做个独立开发者，做自己的网站，小程序赚一些广告钱，或者自己接项目做外包；</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：授课方式？</h4>
    <ul class="ans-container">
      <li>课时：待定</li>
      <li>时间：周末</li>
      <li>地点：市区内的某个会议室或者教室</li>
      <li>课上教学，课下作业，伴随着答疑</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：可以晚上上课吗？</h4>
    <ul class="ans-container">
      <li>目前不行，我还在工作，所以晚上的时间并不稳定，不能保证晚上有时间上课</li>
      <li>短时间内，我不会离职专门做这个培训，毕竟如果我离开一线，技术可能就会落后，秉承对大家负责的态度，不能教授太过时的知识</li>
    </ul>
  </mu-expansion-panel>
   <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：需要自备电脑吗？</h4>
    <ul class="ans-container">
      <li>需要</li>
      <li>因为我这不是培训机构，只是自己对这方面感兴趣，找一些志同道合的学生，所以不会也没有条件为大家提供设备</li>
      <li>而且就算我能提供电脑，课下的练习也是必须的，所以学生们需要自己准备电脑</li>
      <li>关于电脑的配置：目前主流的3500+以上的笔记本电脑就可以，最好内存8g以上，操作系统不限</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：关于老师是否靠谱？</h4>
    <ul class="ans-container">
      <li>主讲教师就是我</li>
      <li>我的简介：软件技术（河北工业大学）和计算机科学与技术专业（北京大学）</li>
      <li>毕业最开始在北京从事的Android开发工作，周末有过兼职在培训机构培训的经历</li>
      <li>跟同事学习了php相关技术，做过几个项目，这个有人感兴趣的话，我也可以教一些</li>
      <li>这两年在做前端开发，也就是我要讲的主要内容，目前为公司前端组的组长，带过2个同事，在这两年期间，又自学了linux和运维相关的技术</li>
      <li>这几年在这个行业，交了几个不错的朋友，batj都有，有机会可以请来当个客串的老师，给大家讲解一下他们的工作中用到的东西，包含且不限于以上我会的这些</li>
    </ul>
  </mu-expansion-panel>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.about{
  width: 100%;
  .ans-container{
    width: 100%;
    &>li{
      width: 100%;
      text-align: start;
      height: 40px;
    }
  }
  .mu-expansion-panel{

  }
}
  </style>


