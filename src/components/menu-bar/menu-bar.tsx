import React, { ReactElement } from 'react';
import ReactSwitch from 'react-switch';
import BaseComponent from '../../base/base-component';
import { Theme } from '../layout/layout-enum';
import { IMenuBarProperties, IMenuBarState } from './menu-bar-interface';
import './menu-bar.sass';

export class MenuBar extends BaseComponent<IMenuBarProperties, IMenuBarState> {
  public constructor(props: IMenuBarProperties) {
    super(props);

    this.state = {
      open: false,
      routeName: '',
    };
  }

  public componentDidMount(): void {
    if (typeof window !== 'undefined') {
      const [, routeName] = location.pathname.split('/');

      this.setState({
        ...this.state,
        routeName,
      });
    }
  }

  public render(): ReactElement {
    const { theme } = this.props;
    const { open, routeName } = this.state;
    const mainClassName: string = this.setMultipleClassName([
      'c-menu-bar',
      open ? 'c-menu-bar--open' : '',
    ]);
    const iconClassName: string = this.setMultipleClassName([
      'fa',
      open ? 'fa-remove' : 'fa-bars',
    ]);

    return (
      <aside className={mainClassName}>
        <div className="c-menu-bar__icon-holder">
          <i
            className={iconClassName}
            onClick={(): void => {
              this.setState({
                ...this.state,
                open: !open,
              });
              this.props.onMenuIconClicked(!open);
            }}
          ></i>
        </div>
        <div className="c-menu-bar__route-name-holder">
          <p className="c-menu-bar__route-name">
            {routeName === '' ? 'Home' : routeName}
          </p>
        </div>
        <nav>
          <ul className="c-menu-bar__menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="c-menu-bar_switch-holder">
          <p className="c-menu-bar_switch-holder__text">
            {theme.toUpperCase()} Theme
          </p>
          <ReactSwitch
            checked={theme === Theme.DARK}
            onChange={(checked: boolean): void => {
              this.props.onSwitchThemeChange(checked);
            }}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#101016"
          />
        </div>
      </aside>
    );
  }
}
