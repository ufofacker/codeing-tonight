<template>
  <div class="simple-article-part">
    <div class="main-label-box">
      <h1 class="main-label">{{ label }}</h1>
    </div>
    <div class="part-container" v-for="(item, index) in list" :key="index">
      <h2 class="label" v-text="item.label"></h2>
      <div class="content">
        <slot name="item" :item="item">{{ item.content }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleArticlePart",
  props: {
    label: String, //文档标题
    /**
     * list:[{
     *  label: 'xxx',//标题
     *  content: 'xxxxxxx'//内容
     * }]
     */
    list: {
      type: Array, //文档小节列表
      require: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables-article.scss";
.simple-article-part {
  margin-bottom: 0;
  color: $color-grey;
  .main-label-box {
    text-align: center;
  }
  .main-label {
    display: inline-block;
    margin-top: $ed-lg;
    text-align: center;
    padding: $ed-md;
    font-size: $font-xlg;
    background: $color-green-normal;
  }
  .part-container {
    width: 100%;
    .label {
      margin-top: $ed-lg;
      padding: $ed-normal;
      font-size: $font-lg;
      background: $color-green-light;
      border-left: $border-xmd solid $color-grey;
    }
    .content {
      margin-top: $ed-lg;
      padding: 0 $ed-lg;
      font-size: $font-md;
      line-height: 30px;
      background: $color-lighter;
    }
  }
}
</style>
