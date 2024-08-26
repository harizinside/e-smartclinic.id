import { createI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messages: { [key: string]: any } = {}

function loadLocaleMessages(locale: string) {
  return import(/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.ts`)
    .then((module) => {
      messages[locale] = module.default
      return module.default
    })
}

function detectUserLocale() {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    return savedLocale
  }

  const browserLocale = navigator.language
  const supportedLocales = [ 'en', 'id' ] 
  if (supportedLocales.includes(browserLocale)) {
    return browserLocale
  }

  return 'id'
}

export function setupI18n() {
  const defaultLocale = detectUserLocale()
  const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'id',
    messages
  })

  if (!messages[defaultLocale]) {
    loadLocaleMessages(defaultLocale)
  }

  return i18n
}
