import 'normalize.css';
import { ILocale } from '@rove-team/locale';
import { Component } from 'react';
import { LocaleHandler } from '../global/locale/locale-handler/locale-handler';
import { Language } from '../global/locale/locale-handler/locale-handler-enum';

export default abstract class BaseComponent<
  P = {},
  S = {},
  SS = any
> extends Component<P, S, SS> {
  private localeHandler: LocaleHandler;
  private locale: ILocale;
  private isMobile: boolean;

  public constructor(properties: P) {
    super(properties);

    this.localeHandler = LocaleHandler.getInstance(Language.EN_US);

    const chain: string | undefined = this.declareTranslateCollection();

    this.locale = chain
      ? this.localeHandler.getCollection(chain)
      : this.localeHandler;

    this.checkIfMobileDevice();
  }

  protected declareTranslateCollection(): string | undefined {
    return undefined;
  }

  protected translate(key: string): string {
    return this.locale.translate(key);
  }

  protected getResourcesPath(): string {
    return '/static/resources/';
  }

  protected setMultipleClassName(classNames: (string | undefined)[]): string {
    return classNames.join(' ');
  }

  private checkIfMobileDevice(): void {
    {
      this.isMobile = false;
      //check if document defined.(prevent issue on SSR)
      const isBrowser = typeof navigator !== 'undefined';
      if (isBrowser) {
        if ('maxTouchPoints' in navigator) {
          this.isMobile = navigator.maxTouchPoints > 0;
        } else if ('msMaxTouchPoints' in navigator) {
          this.isMobile = navigator['msMaxTouchPoints'] > 0;
        } else {
          const mQ = window.matchMedia('(pointer:coarse)');
          if (mQ && mQ.media === '(pointer:coarse)') {
            this.isMobile = !!mQ.matches;
          } else if ('orientation' in window) {
            this.isMobile = true; // deprecated, but good fallback
          } else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            this.isMobile =
              /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
              /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
          }
        }
      }
    }
  }

  protected isMobileDevice(): boolean {
    return this.isMobile;
  }
}
