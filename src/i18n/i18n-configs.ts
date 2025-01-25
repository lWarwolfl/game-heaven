import { type Fonts, lexend } from '@/i18n/fonts'
import { useLocale } from 'next-intl'
import createMiddleware from 'next-intl/middleware'
import { getLocale } from 'next-intl/server'

export type Direction = 'rtl' | 'ltr'

export type I18nLocale = 'en' | 'de'

export type LanguageCode = 'en-US' | 'de-DE'

interface I18nLocaleProps {
  direction: Direction
  locale: I18nLocale
  languageCode: LanguageCode
  font?: Fonts
}

export const defaultLocale: I18nLocale = 'en'
export const locales: I18nLocaleProps[] = [
  {
    locale: 'de',
    direction: 'ltr',
    languageCode: 'de-DE',
    font: lexend,
  },
  {
    locale: 'en',
    direction: 'ltr',
    languageCode: 'en-US',
    font: lexend,
  },
]

export const intlMiddleware = createMiddleware({
  defaultLocale,
  locales: locales.map(({ locale }) => locale),
  localePrefix: 'always',
})

/**
 * Asynchronously retrieves the current locale and its associated properties.
 *
 * This function uses `getLocale` to obtain the current locale and matches it
 * against the predefined list of locales to return the full `I18nLocaleProps`
 * object, which includes the locale's direction, language code, and font.
 *
 * @returns A promise that resolves to an `I18nLocaleProps` object containing
 *          the properties of the current locale.
 */
export async function getLocaleWithProps(): Promise<I18nLocaleProps> {
  const locale = (await getLocale()) as I18nLocale
  return locales.find((loc) => loc.locale === locale) as I18nLocaleProps
}

/**
 * Given an `I18nLocale`, returns the associated `I18nLocaleProps` object.
 *
 * This function takes an `I18nLocale` as an argument and returns the full
 * `I18nLocaleProps` object associated with that locale, which contains the
 * locale's direction, language code, and font.
 *
 * @param locale The `I18nLocale` to retrieve the associated `I18nLocaleProps`
 *               object for.
 * @returns The `I18nLocaleProps` object associated with the given `locale`.
 */
export function getLocaleProps(locale: I18nLocale): I18nLocaleProps {
  return locales.find((loc) => loc.locale === locale) as I18nLocaleProps
}

/**
 * Generates a record mapping language codes to their corresponding locale paths.
 *
 * @returns A record where each key is a `LanguageCode` and each value is a string
 *          representing the path for the corresponding `I18nLocale`.
 */
export function getAlternativeLocales() {
  return locales.reduce(
    (acc, { locale, languageCode }) => ({
      ...acc,
      [languageCode]: `/${locale}`,
    }),
    {} as Record<LanguageCode, `/${I18nLocale}`>
  )
}

/**
 * A hook that returns the currently active locale with its props.
 *
 * The returned object contains the currently active locale's code, language
 * code, direction, and font, if applicable.
 *
 * @returns An object with the shape of `I18nLocaleProps`.
 */
export function useLocaleWithProps() {
  const locale = useLocale() as I18nLocale
  return locales.find((loc) => loc.locale === locale) as I18nLocaleProps
}
