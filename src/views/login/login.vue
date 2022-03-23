<template>
  <el-button type="success">Success</el-button>
  <h1>登录{{ $store.state.name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent(() => {
  let store = useStore();
  console.log(store.state);

  return {};
});
</script>
<style lang="scss" scoped></style>
