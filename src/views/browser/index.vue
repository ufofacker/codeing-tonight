<template>
  <div class="brief-introduction">
    <SimpleArticlePart :label="mainLabel" :list="list">
      <template v-slot:item="slotProps">
        <div v-html="slotProps.item.content"></div>
      </template>
    </SimpleArticlePart>
  </div>
</template>

<script>
import {
  queryBriefList,
  queryJsExcuteRuleList,
  queryV8EngineList
} from "@/api/browser";
import SimpleArticlePart from "@/components/articlePage/SimpleArticlePart";
const routerMap = {
  briefIntroduction: {
    listApi: queryBriefList,
    mainLabel: "浏览器介绍"
  },
  jsExcuteRule: {
    listApi: queryJsExcuteRuleList,
    mainLabel: "Javascript执行机制"
  },
  v8Engine: {
    listApi: queryV8EngineList,
    mainLabel: "V8工作原理"
  }
};
export default {
  name: "Browser",
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
