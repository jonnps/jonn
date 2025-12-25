import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const content = await serverQueryContent(e).find()

  return content.map((page) => {
    return asSitemapUrl({
      loc: page._path,
      lastmod: page.datetime || new Date().toISOString()
    })
  })
})
