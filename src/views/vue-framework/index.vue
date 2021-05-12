<template>
  <div class="vue-framework">
    <SimpleArticlePart :label="mainLabel" :list="list">
      <template v-slot:item="slotProps">
        <div v-html="slotProps.item.content"></div>
      </template>
    </SimpleArticlePart>
  </div>
</template>

<script>
import { queryCodeAnalysisList } from "@/api/vueFramework";
import SimpleArticlePart from "@/components/articlePage/SimpleArticlePart";
const routerMap = {
  codeAnalysis: {
    listApi: queryCodeAnalysisList,
    mainLabel: "Vue源码分析"
  }
};
export default {
  name: "VueFramework",
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
