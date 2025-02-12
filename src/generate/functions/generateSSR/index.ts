import { Commons } from './../constants'
import { createComplementaryFile } from './../../../helper'
import path from 'path'
import { capitalize } from '../../../helper'
import generateSSRFile from './generateSSRFile'

const generateSSR = ({ components, fileType, name }: Commons) => {
  const SSRName = `get${capitalize(name)}Props`
  const SSRDir = path.join(components, 'ssr')

  generateSSRFile(SSRName, SSRDir, fileType)

  createComplementaryFile(path.join(SSRDir, SSRName), fileType)
}

export default generateSSR
