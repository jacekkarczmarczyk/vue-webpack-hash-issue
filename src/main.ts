const foo = () => ({
  component: () => import(/* webpackChunkName: "chunk" */'@/chunk.vue'),
});
foo();
