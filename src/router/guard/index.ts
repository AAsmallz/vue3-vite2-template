/**
 * 路由守卫函数
 * @param router 路由实例
 */
export function createRouterGuard(router: any){
	router.beforeEach((to: any, from: any) => {
		return true
	});
}
