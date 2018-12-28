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
      <li>暂定6000元/人</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：最终学习成果？</h4>
     <ul class="ans-container">
      <li>要求学生全力配合，按照教学大纲完成学习，不缺课，认真完成课后作业，认真对待实战项目的前提下可达到：</li>
      <li>一年工作经验的前端职位都可胜任；</li>
      <li>可以自己独立开发：做个独立开发者；</li>
      <li>做自己的网站，小程序赚取广告费用；</li>
      <li>自己接项目做外包。</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：授课方式？</h4>
    <ul class="ans-container">
      <li>课时：待定</li>
      <li>时间：周末</li>
      <li>地点：廊坊市市区范围内</li>
      <li>课上教学，课下作业，在线答疑</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：可以晚上上课吗？</h4>
    <ul class="ans-container">
      <li>目前不行，我还在工作，所以晚上的时间并不稳定，不能保证晚上有时间上课</li>
      <li>秉承对大家负责的态度，我会一直从事一线开发工作，吸取最新的技术，授之以渔</li>
    </ul>
  </mu-expansion-panel>
   <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：需要自备电脑吗？</h4>
    <ul class="ans-container">
      <li>需要</li>
      <li>关于电脑的配置：目前主流的3500+以上的笔记本电脑就可以，最好内存8g以上，操作系统不限（不懂的请详细咨询老师）</li>
    </ul>
  </mu-expansion-panel>
  <mu-expansion-panel  :expand="true">
    <h4 slot="header">Q：关于老师是否靠谱？</h4>
    <ul class="ans-container">
      <li>简介：软件技术专业（河北工业大学）和计算机科学与技术专业（北京大学）；</li>
      <li>目前属于全栈开发工程师，工作内容涉及到pc/web网页，后台，Android/iOS，Mac/windows/Linux桌面程序，及docker等运维相关工作；</li>
      <li>前期在北京从事的Android开发工作，主要作品：味库，央广新闻客户端等；</li>
      <li>熟练掌握前端开发相关技术，目前为某公司前端组的组长，顺利帮助公司项目相继上线；</li>
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
      margin: 10px 0;
    }
  }
  .mu-expansion-panel{

  }
}
  </style>


