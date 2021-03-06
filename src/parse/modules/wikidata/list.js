/**
 * @module input/wikidata
 */

import wdk from 'wikidata-sdk'

/**
 * Get Wikidata JSON from Wikidata IDs
 *
 * @access protected
 * @method parseWikidata
 *
 * @param {String} data - Wikidata IDs
 *
 * @return {Object} Wikidata JSON
 */
const parseWikidata = function (data) {
  const list = Array.isArray(data) ? data : data.trim().split(/(?:[\s,]\s*)/g)
  return [].concat(wdk.getEntities(list, ['en']))
}

export const scope = '@wikidata'
export const types = ['@wikidata/list+text', '@wikidata/id', '@wikidata/list+object']
export {
  parseWikidata as parse,
  parseWikidata as default
}
