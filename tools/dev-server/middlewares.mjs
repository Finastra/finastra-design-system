import koaEjs from 'koa-ejs';
import { scanPackages } from './scan-packages.mjs';

export async function devIndex(ctx, next) {
  if (ctx.url === '/' || ctx.url === '/index.html' || ctx.url.match(/\/([^\/]*)\/demo\/(.*)\.html/)) {
    const pkgs = await scanPackages();
    if (ctx.url === '/' || ctx.url === '/index.html') {
      const content = await ctx.render('tools/view/index', { pkgs, title: 'Finastra Design System' });
      ctx.body = content;
      await next();
    } else {
      const content = await ctx.render(ctx.path.replace('.html', ''), { pkgs, title: 'Finastra Design System' });
      ctx.body = content;
      await next();
    }
  } else {
    await next();
  }
}

export async function esjRender(context, next) {
  koaEjs(context.app, {
    root: '.',
    layout: 'tools/view/layout',
    viewExt: 'html',
    async: true,
    cache: false,
    debug: false,
    writeResp: false,
  });
  await next();
}
