const generateModuleContent = (
  name: string,
  isSSR: boolean,
  fileType: string
) => {
  return `import React from 'react'\n
  ${fileType === '.ts' ? '// TODO: Declare interface of module props' : ''} 
export const ${name}${fileType === '.ts' ? ': interface' : ''} = (${
    isSSR ? 'props' : ''
  }) => {\n
    // TODO: Write module's logic\n
    return <></>
}`
}

export default generateModuleContent
