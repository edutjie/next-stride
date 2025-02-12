import { PageProps } from './index'
import { Commons } from './../constants'
import path from 'path'
import fs from 'fs-extra'
import generatePageContent from './generatePageContent'
import { capitalize } from '../../../helper'
import generatePageFile from './generatePageFile'

const generatePage = (commons: Commons, pageProps: PageProps) => {
  const { components, fileType, name } = commons
  const { SSRName, moduleName, pagePath } = pageProps

  const pageDir = path.join(components, '../pages', pagePath || name)
  const pageName = pagePath ? path.parse(pagePath).base : name

  if (fs.existsSync(pageDir)) {
    throw new Error('Page already exists')
  } else if (!fs.existsSync(path.parse(pageDir).dir)) {
    throw new Error('Parent folder does not exist')
  }

  const modulePageContent = generatePageContent(
    capitalize(pageName),
    moduleName,
    SSRName,
    fileType
  )

  generatePageFile(pageDir, fileType, modulePageContent)
}

export default generatePage
