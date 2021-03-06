1. //next必须写两次，登录验证时，使用token进行验证
router.beforeEach((to, from, next) => {
  if(to.path==='/login')return next()
  const token = window.sessionStorage.getItem('token')
  if(!token)return next('/login')
  next()
})
