import { Link } from 'gatsby';
import React, { Fragment, ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import { Route } from '../../global/route-enum';
import SEO from '../../components/seo/seo';
import ContainerBox from '../../components/container-box/container-box';
// import "./404.scss";

export default class NotFoundPage extends BaseComponent {
  protected declareTranslateCollection(): string {
    return 'notFound';
  }

  public render(): ReactNode {
    return (
      <Fragment>
        <SEO pageTitle={this.translate('title')} />
        <ContainerBox className="c-section--notfound">
          <div className="c-notfound">
            <div className="c-logo">
              <Link
                to={Route.HOME}
                className="c-link c-link--logo"
                aria-label="State of Democracy"
              ></Link>
            </div>
            <div className="c-notfound__wrap">
              <h1 className="c-notfound__title">
                {this.translate('notFound')}
              </h1>
              <p className="c-notfound__text">
                {this.translate('sorry')}, {this.translate('excuseText')}
              </p>
              <Link to={Route.HOME} className="c-btn is-white-bg">
                {this.translate('homeButtonText')}
              </Link>
            </div>
          </div>
        </ContainerBox>
      </Fragment>
    );
  }
}
