const express = require('express')
const app = express()  
const fn = require('./funcoes')


const path = require('path')
const way = path.join(__dirname, 'subtitles')

fn.readDirectory(way)
    .then(fn.getElementsWithEnd('.srt'))
    .then(fn.replaceValue('\\', '/'))
    .then(fn.readFiles)
    .then(fn.addArrayInString)
    .then(fn.stringInSubstringList)
    .then(fn.deleteSpace)
    .then(fn.removeElementsIfIncludes('-->'))
    .then(fn.removeElementsIfContentNumbers)
    .then(fn.removeSimbols)
    .then(console.log)
    .catch(console.log)