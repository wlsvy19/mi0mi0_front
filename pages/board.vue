<template>
  <div>
    <QnABoard></QnABoard>
    <div>{{ key }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QnABoard from "@/components/QnABoard.vue";
export default defineComponent({
  components: {
    QnABoard,
  },
  data() {
    return {
      key: "value",
    };
  },
});
</script>

<style>
</style>