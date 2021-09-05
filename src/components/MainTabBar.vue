<template>
  <div>
        <tab-bar>
      <tab-bar-item
        path="/home"
        activeColor="#f48427"
      >
        <template v-slot:itemimg>
          <img
            src="~assets/img/tabBar/home.svg"
            alt=""
          >
        </template>
        <template v-slot:itemimg-active>
          <img
            src="../assets/img/tabBar/homeClick.svg"
            alt=""
          >
        </template>
        <template v-slot:itemtext>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item
        path="/classfy"
        activeColor="#f48427"
      >
        <template v-slot:itemimg>
          <img
            src="../assets/img/tabBar/classfy.svg"
            alt=""
          >
        </template>
        <template v-slot:itemimg-active>
          <img
            src="../assets/img/tabBar/classfyClick.svg"
            alt=""
          >
        </template>
        <template v-slot:itemtext>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item
        path="/shopcar"
        activeColor="#f48427"
      >
        <template v-slot:itemimg>
          <img
            src="../assets/img/tabBar/shopping.svg"
            alt=""
          >
        </template>
        <template v-slot:itemimg-active>
          <img
            src="../assets/img/tabBar/shoppingClick.svg"
            alt=""
          >
        </template>
        <template v-slot:itemtext>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item
        path="/mine"
        activeColor="#f48427"
      >
        <template v-slot:itemimg>
          <img
            src="../assets/img/tabBar/mine.svg"
            alt=""
          >
        </template>
        <template v-slot:itemimg-active>
          <img
            src="../assets/img/tabBar/mineClick.svg"
            alt=""
          >
        </template>
        <template v-slot:itemtext>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "./tabBar/tabbar";
import tabBarItem from "./tabBar/tabBarItem.vue";
export default {
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>