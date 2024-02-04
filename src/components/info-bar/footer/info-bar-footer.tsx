import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import './info-bar-footer.sass';

export class InfoBarFooter extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-info-bar-footer">
        <div className="c-info-bar-footer__social-networks">
          <a href="mailto:hramini72@gmail.com">
            <i className="fa fa-google"></i>
          </a>
          <a href="https://www.facebook.com/hamidreza.amini72">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hamidreza.amini.dev">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCqYvregmqB8_U2zJ6dx0pmw">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://twitter.com/HamidrezaAmini7">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/hamidreza-amini-8178657b/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/hramini/">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://codepen.com/hramini/">
            <i className="fa fa-codepen"></i>
          </a>
        </div>
      </div>
    );
  }
}
