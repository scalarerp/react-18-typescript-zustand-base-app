const fs = require('fs')
const folder = './src/Common/SvgIcons/SvgFiles/'
const lineFeed = '\n'

// percorre a pasta Common/SvgIcons/SvgGallery/AllSvgIconsGallery
// e cria um array de svgs para exibir no componente SVG Gallery

const getComponentSvg = (name) => {
  return `
    { name: '${name}', component: <${name} size={size} color={color} /> },`
}
const getSvgTypeName = (name) => {
  return `|'${name}'`
}

const getExportAndImports = (name) => {
  return `export { default as ${name} } from './SvgFiles/${name}' ${lineFeed}`
}

const readFiles = () => {
  const allSvgList = []
  const allSvgNames = []
  const allSvgListImports = []
  const importAndExportList = []
  fs.readdirSync(folder).forEach((file) => {
    //console.log(file)
    const name = file.split('.')[0]
    if (name !== '_svgBase') {
      allSvgListImports.push(`    ${name},${lineFeed}`)
      allSvgList.push(getComponentSvg(name))
      allSvgNames.push(getSvgTypeName(name))
      importAndExportList.push(getExportAndImports(name))
    }
  })

  const fileTextResult = `// ARQUIVO GERADO AUTOMATICAMENTE
// Execute o comando 'yarn build-svg-gallery' para atualizar.

import {
${allSvgListImports.join(' ')} ${lineFeed}
} from '..'

const useSvg = (size: number, color: string | undefined) => {
    const svgArray = [
${allSvgList.join(' ')}
]

return { svgArray }
}

export default useSvg


    `

  fs.writeFile(
    './src/Common/SvgIcons/SvgGallery/useSvg.tsx',
    fileTextResult,
    (err) => {
      if (err) throw err
      console.log('\x1b[32m%s\x1b[0m', '✅ useSvg saved!')
    }
  )
  fs.writeFile(
    './src/Common/SvgIcons/index.tsx',
    importAndExportList.join(' '),
    (err) => {
      if (err) throw err
      console.log('\x1b[32m%s\x1b[0m', '✅ svg index saved!')
    }
  )
  fs.writeFile(
    './src/Common/SvgIcons/AllSvgNames.ts',
    `export type AllSvgNames =  ${allSvgNames.join(' ')}`,
    (err) => {
      if (err) throw err
      console.log('\x1b[32m%s\x1b[0m', '✅ allSvgNames saved!')
    }
  )
}

readFiles()
