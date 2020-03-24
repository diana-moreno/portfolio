
import { addLocaleData, IntlProvider } from 'react-intl'
import flatten from 'flat'

import esData from 'react-intl/locale-data/es'
import enData from 'react-intl/locale-data/en'

const en = require('../i18n/en.json');
const es = require('../i18n/es.json');
const ca = require('../i18n/ca.json');
const de = require('../i18n/de.json');

const enMessages = flatten(en)
const esMessages = flatten(es)
addLocaleData([...enData, ...esData])

const t = (id, locale, args) => {
  const messages = locale === 'es' ? esMessages : enMessages
  const { intl } = new IntlProvider({ locale, messages }, {}).getChildContext()
  return intl.formatMessage({ id }, locale, args)
}

export { t }
