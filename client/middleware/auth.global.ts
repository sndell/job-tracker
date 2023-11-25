export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await useAsyncGql('GetCurrentUser');

  const user = data.value ? data.value.GetCurrentUser : null;

  const { setUser } = useUserStore();
  setUser(user);

  if (to.path === '/auth') {
    if (user) return navigateTo('/');
  } else if (!user) return navigateTo('/auth');
});
