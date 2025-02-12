import path from 'path'
import fs from 'fs-extra'
import { appendIndex, capitalize } from '../../../helper'
import { Commons } from '../constants'
import generateIconContent from './generateIconContent'

const generateIcon = ({ components, fileType, name }: Commons) => {
  const iconDir = path.join(components, 'icons')
  const iconName = capitalize(name)
  const fileName = path.join(iconDir, `${iconName}${fileType}x`)

  appendIndex(iconName, path.join(iconDir, `index${fileType}`))

  fs.writeFileSync(fileName, generateIconContent(iconName, fileType), {
    flag: 'w',
  })
}

export default generateIcon
