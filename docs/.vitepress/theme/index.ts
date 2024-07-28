import DefaultTheme from 'vitepress/theme';
import { EnhanceAppContext, useRoute } from 'vitepress';
import setViewer from '../../../';

export default {
	...DefaultTheme,
	enhanceApp(ctx: EnhanceAppContext) {
		DefaultTheme.enhanceApp(ctx);
	},
	setup() {
		// 获取路由
		const route = useRoute();
		setViewer(route, '.vp-doc');
	}
};
