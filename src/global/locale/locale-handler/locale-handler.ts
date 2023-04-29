import { ILocale, ILocaleEntry, Locale } from '@rove-team/locale';
import { englishUSA } from '../en-us';
import { Language } from './locale-handler-enum';

export class LocaleHandler implements ILocale {
  private static instance: LocaleHandler;
  private locale: Locale;

  private constructor() {}

  public static getInstance(language: Language): LocaleHandler {
    if (!LocaleHandler.instance) {
      LocaleHandler.instance = new LocaleHandler();
      LocaleHandler.instance.locale = new Locale({
        language,
        localeObject: {
          [Language.EN_US]: englishUSA,
        },
      });
    }

    return LocaleHandler.instance;
  }

  public getCollection(chain: string): ILocale {
    return this.locale.getCollection(chain);
  }

  public translate(key: string): string {
    return this.locale.translate(key);
  }
}
