import 'font-awesome/css/font-awesome.css';
import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import { Language } from '../../global/locale/locale-handler/locale-handler-enum';
import '../../global/styles/global.sass';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import { InfoBar } from '../info-bar/info-bar';
import { MenuBar } from '../menu-bar/menu-bar';
import SEO from '../seo/seo';
import { Theme } from './layout-enum';
import { ILayoutProperties, ILayoutState } from './layout-interface';
import './layout.sass';

export default class Layout extends BaseComponent<
  ILayoutProperties,
  ILayoutState
> {
  public constructor(props: ILayoutProperties) {
    super(props);

    this.state = {
      menuOpened: false,
      theme: Theme.DARK,
    };
  }

  public componentDidMount(): void {
    const theme: Theme = (localStorage.getItem('theme') as Theme) ?? Theme.DARK;

    const [htmlTag] = document.getElementsByTagName('html');
    htmlTag.classList.add(`theme--${theme}`);

    this.setState({
      ...this.state,
      theme,
    });
  }

  protected declareTranslateCollection(): string {
    return 'layout';
  }

  public render(): ReactNode {
    const { menuOpened, theme } = this.state;
    const { subtitle, title, description, children } = this.props;
    const contentClassName: string = this.setMultipleClassName([
      'layout__content',
      menuOpened ? 'layout__content--menu-opened' : '',
    ]);
    // const themeClassName: string = `theme--${theme}`;

    return (
      <div>
        <SEO
          pageTitle={`${this.translate('siteName')} - ${title}`}
          description={description}
          keywords={['state', 'democracy']}
          language={Language.EN_US}
        />
        <main className="layout">
          <div className="layout__container">
            <InfoBar />
            <div className={contentClassName}>
              <div className="layout__content-inner">
                {children}
                <footer className="layout_footer">
                  <Grid layout={GridLayoutType.ROW}>
                    <Flex size={33}>
                      <p className="layout_footer__rights">
                        &copy; {new Date().getFullYear()} All rights reserved.
                      </p>
                    </Flex>
                    <Flex size={33}>
                      <p className="layout_footer__source-code">
                        <a
                          href="https://github.com/hramini/hramini-website"
                          target="_blank"
                        >
                          <i className="fa fa-github"></i> My Website's Source
                          Code
                        </a>
                      </p>
                    </Flex>
                    <Flex size={33}>
                      <p className="layout_footer__email">
                        <a href="mailto:hramini72@gmail.com">
                          <i className="fa fa-envelope"></i> hramini72@gmail.com
                        </a>
                      </p>
                    </Flex>
                  </Grid>
                </footer>
              </div>
            </div>
            <MenuBar
              theme={theme}
              onSwitchThemeChange={(checked: boolean): void => {
                const currentTheme: Theme = checked ? Theme.DARK : Theme.LIGHT;

                this.setState({
                  ...this.state,
                  theme: currentTheme,
                });

                localStorage.setItem('theme', currentTheme);

                const [htmlTag] = document.getElementsByTagName('html');

                if (checked) {
                  htmlTag.classList.remove('theme--light');
                } else {
                  htmlTag.classList.remove('theme--dark');
                }

                htmlTag.classList.add(`theme--${currentTheme}`);
              }}
              onMenuIconClicked={(open: boolean): void => {
                this.setState({
                  ...this.state,
                  menuOpened: open,
                });
              }}
            />
          </div>
        </main>
      </div>
    );
  }
}
