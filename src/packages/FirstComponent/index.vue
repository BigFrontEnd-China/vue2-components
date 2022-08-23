<!--
*@filePath: packages\FirstComponent\index.vue
*@Description: firstComponent
*@Author: Jackson
*@CreateTime: 2022年08月23日 10:51:54
*@UpdateTime: ''
-->
<template>
  <div class="firstComponent">{{ text }}</div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    text: {
      type: String,
      default: 'FirstComponent'
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.firstComponent {
  font-size: 20px;
  color: #666;
}
</style>
