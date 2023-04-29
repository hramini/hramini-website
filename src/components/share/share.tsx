import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import { Path } from '../../global/path-enum';
import EmbedModal from '../embed-modal/embed-modal';
import ShareBox from '../share-box/share-box';
import SolidButton from '../solid-button/solid-button';
import { SolidButtonColorSchemas } from '../solid-button/solid-button-enum';
import SvgIcon from '../svg-icon/svg-icon';
import { SvgIconPathCommand } from '../svg-icon/svg-icon-enum';
import { IShareProperties, IShareState } from './share-interface';
import './share.scss';

export default class Share extends BaseComponent<
  IShareProperties,
  IShareState
> {
  private wrapperRef: React.RefObject<any>;

  public constructor(properties: IShareProperties) {
    super(properties);

    this.state = {
      isShareBoxOpen: false,
      isEmbedModelOpen: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  private handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        isShareBoxOpen: false,
      });
    }
  }

  protected declareTranslateCollection(): string | undefined {
    return 'share';
  }

  private onShareButtonClick(): void {
    this.setState({
      isShareBoxOpen: !this.state.isShareBoxOpen,
    });
  }

  private onEmbedButtonClick(): void {
    this.setState({
      isEmbedModelOpen: !this.state.isEmbedModelOpen,
    });
  }

  public render(): ReactNode {
    const {
      imageResourceFileName,
      embeddedLink,
      isExpanded,
      absoluteLink,
      description,
    } = this.props;
    const { isShareBoxOpen } = this.state;

    return (
      <div className="c-share" ref={this.wrapperRef}>
        {!isExpanded && (
          <>
            <EmbedModal
              closeEmbedModal={(): void => {
                this.onEmbedButtonClick();
              }}
              showModal={this.state.isEmbedModelOpen}
              embeddedLink={embeddedLink}
              imageSource={`${Path.IMAGE}/${imageResourceFileName}`}
            />
            <SolidButton
              colorSchema={SolidButtonColorSchemas.TRANSPARENT}
              onClick={(): void => {
                this.onShareButtonClick();
              }}
            >
              {this.translate('share')}
              <SvgIcon
                width="20"
                viewBox="0 0 20 21"
                paths={[{ command: SvgIconPathCommand.SHARE, fill: '#4A1D96' }]}
              />
            </SolidButton>
          </>
        )}

        <ShareBox
          absoluteLink={absoluteLink}
          description={description}
          embeddedLink={embeddedLink}
          isShareBoxOpen={isShareBoxOpen}
          isExpanded={isExpanded}
          onEmbedButtonClick={(): void => {
            this.onEmbedButtonClick();
          }}
        />
      </div>
    );
  }
}
