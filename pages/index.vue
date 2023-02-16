<template>
  <div>
    <h1>기본 페이지</h1>
    <h1>{{ testMethod() }}</h1>
    <QnABoard></QnABoard>
  </div>
</template>

<script>
import QnABoard from '~/components/QnABoard.vue';
export default {
  comments: {
    QnABoard
  },
  methods: {
    testMethod() {
      return "test1";
    }
  },
};
</script>
