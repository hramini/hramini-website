import React, { ReactNode } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import BaseComponent from '../../base/base-component';
import SvgIcon from '../svg-icon/svg-icon';
import { SvgIconPathCommand } from '../svg-icon/svg-icon-enum';
import { IShareBoxProperties, IShareBoxState } from './share-box-interface';
import './share-box.scss';

export default class ShareBox extends BaseComponent<
  IShareBoxProperties,
  IShareBoxState
> {
  public constructor(properties: IShareBoxProperties) {
    super(properties);

    this.state = {
      copyLinkText: this.translate('copy'),
    };
  }

  protected declareTranslateCollection(): string | undefined {
    return 'shareBox';
  }

  private onCopyClick(): void {
    const { absoluteLink } = this.props;
    const copyLink = `${window.location.protocol}//${window.location.host}${absoluteLink}`;
    navigator.clipboard.writeText(copyLink).then((): void => {
      this.setState({
        copyLinkText: this.translate('copied'),
      });
    });
  }

  public render(): ReactNode {
    const {
      description,
      absoluteLink,
      embeddedLink,
      isExpanded = false,
      isShareBoxOpen,
    } = this.props;
    const { copyLinkText } = this.state;

    let publicLink = '';

    //check if window defined.(prevent issue on SSR)
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      publicLink = `${window.location.protocol}//${window.location.host}${absoluteLink}`;
    }

    const shareBoxClassName: string = [
      isExpanded ? 'c-share-box--expanded' : 'c-share-box',
      isShareBoxOpen || isExpanded ? 'is-show' : 'is-hide',
    ].join(' ');

    return (
      <div className={shareBoxClassName}>
        <div className="c-share-box__arrow"></div>
        <FacebookShareButton url={publicLink} quote={description}>
          <SvgIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            paths={[{ command: SvgIconPathCommand.FACEBOOK, fill: '#1877F2' }]}
          />
          <span>Facebook</span>
        </FacebookShareButton>
        <TwitterShareButton url={publicLink}>
          <SvgIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            paths={[{ command: SvgIconPathCommand.TWITTER, fill: '#1DA1F2' }]}
          />
          <span>Twitter</span>
        </TwitterShareButton>
        <WhatsappShareButton url={publicLink}>
          <SvgIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            paths={[
              {
                command: SvgIconPathCommand.WHATSAPP,
                fill: '#25D366',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              },
            ]}
          />
          <span>WhatsApp</span>
        </WhatsappShareButton>
        <button
          className="react-share__ShareButton is-copy"
          onClick={(): void => {
            this.onCopyClick();
          }}
        >
          <SvgIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            paths={[
              {
                command: SvgIconPathCommand.COPY,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                fill: '#000',
              },
            ]}
          />
          <span>{copyLinkText}</span>
        </button>
        {embeddedLink ? (
          <button
            className="react-share__ShareButton"
            onClick={(): void => {
              this.props.onEmbedButtonClick();
            }}
          >
            <SvgIcon
              width="24"
              height="24"
              viewBox="0 0 24 24"
              paths={[
                {
                  command: SvgIconPathCommand.EMBED,
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  fill: '#000',
                },
              ]}
            />
            <span>{this.translate('embed')}</span>
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
