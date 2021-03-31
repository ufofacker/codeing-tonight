<template>
  <div class="expand-knowledge">
    <SimpleArticlePart :label="mainLabel" :list="list">
      <template v-slot:item="slotProps">
        <div v-html="slotProps.item.content"></div>
      </template>
    </SimpleArticlePart>
  </div>
</template>

<script>
import { queryOptimizeWebList } from "@/api/expandKnowledge";
import SimpleArticlePart from "@/components/articlePage/SimpleArticlePart";
const routerMap = {
  optimizeWeb: {
    listApi: queryOptimizeWebList,
    mainLabel: "前端性能优化"
  }
};
export default {
  name: "ExpandKnowledge",
  components: { SimpleArticlePart },
  data() {
    return {
      routerMap,
      list: []
    };
  },
  props: ["compName"],
  computed: {
    mainLabel() {
      return this.routerMap[this.compName].mainLabel;
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.routerMap[this.compName].listApi().then(res => {
        if (res.status) {
          this.list = res.data;
        }
      });
    }
  }
};
</script>
