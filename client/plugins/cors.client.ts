export default defineNuxtPlugin(() => {
  useGqlCors({ credentials: 'include' });
});
