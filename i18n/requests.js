import { getRequestConfig } from 'next-intl/server';
export const locales = ['en', 'es', 'fr', 'de']; // Add your supported locales
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  // Load the messages for the locale
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    timeZone: 'UTC',
    now: new Date(),
  };
});

// You'll need to create a config.ts file with your locales
// This is a placeholder for that reference
export const localePrefix = 'as-needed'; // 'as-needed' | 'always' | 'never'