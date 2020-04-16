import { addLocaleData, IntlProvider } from 'react-intl'
import flatten from 'flat'

import esData from 'react-intl/locale-data/es'
import enData from 'react-intl/locale-data/en'
import caData from 'react-intl/locale-data/ca'
import deData from 'react-intl/locale-data/de'

const en = require('../i18n/en.json');
const es = require('../i18n/es.json');
const ca = require('../i18n/ca.json');
const de = require('../i18n/de.json');

const enMessages = flatten(en)
const esMessages = flatten(es)
const caMessages = flatten(ca)
const deMessages = flatten(de)
addLocaleData([...enData, ...esData, ...caData, ...deData])

const t = (id, locale, args) => {
  let messages
  if(locale === 'en') messages = enMessages
  if(locale === 'es') messages = esMessages
  if(locale === 'ca') messages = caMessages
  if(locale === 'de') messages = deMessages
  const { intl } = new IntlProvider({ locale, messages }, {}).getChildContext()
  return intl.formatMessage({ id }, locale, args)
}

export { t }
