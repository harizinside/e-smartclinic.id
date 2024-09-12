import { createI18n } from 'vue-i18n'
import type {
  DefineLocaleMessage,
  DefineDateTimeFormat,
  DefineNumberFormat
} from 'vue-i18n'

/**
 * import locale messages resoruce from json for global scope
 */
import en from './locales/en.json'
import id from './locales/id.json'

/**
 * setup vue-i18n with i18n resources with global type definition.
 * if you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 * you can check global type defition at `./vue-i18n.d.ts`
 */
export const i18n = createI18n<{
  message: DefineLocaleMessage,
  datetime: DefineDateTimeFormat,
  number: DefineNumberFormat
}, 'en' | 'id'>({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages: {
    en: en,
    id: id
  },
  datetimeFormats: {
    en: {
      // Min, 20 Desember 2020
      long: {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      //  20/12/2020
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
      },
      // 20-12-2020 13:26:48
      medium: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
      },
      // Minggu, 20 Desember 2020 pukul 10.23.16 WIB
      full: {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone: 'Asia/Jakarta'
      }
    },
    id: {
      // Min, 20 Desember 2020
      long: {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      },
      //  20/12/2020
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
      },
      // 20-12-2020 13:26:48
      medium: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
      },
      // Minggu, 20 Desember 2020 pukul 10.23.16 WIB
      full: {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone: 'Asia/Jakarta'
      }
    }
  },
  numberFormats: {
    en: {
      currency: {
        // Rp.500.000
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: 'standard'
      },
      // 500.000
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      // Rp.500.000,00
      currencyWithCents: {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    },
    id: {
      // Rp.500.000
      currency: {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: 'standard'
      },
      // 500.000
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      // Rp.500.000,00
      currencyWithCents: {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
})
