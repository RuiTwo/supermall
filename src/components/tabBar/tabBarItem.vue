<template>
  <div
    class="tab-bar-item"
    @click="itemClick"
  >
    <slot
      v-if="!isActive"
      name="itemimg"
    ></slot>
    <div v-else>
      <slot name="itemimg-active"></slot>
    </div>
    <div
      :class="{ active: isActive }"
      :style="activeStyle"
    >
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      //不直接用 === 判断两者相等的理由是 整个页面中会有其他子路由
      //其他子路由也会让页面属于活跃状态
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => err);
    },
  },
};
</script>

<style>
.tab-bar-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  display: block;
  height: 30px;
  width: 30px;
  /* vertical-align: middle; */
}
</style>