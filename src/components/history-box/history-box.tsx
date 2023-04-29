import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { IHistoryBoxProperties } from './history-box-interface';
import './history-box.sass';

export default class HistoryBox extends BaseComponent<IHistoryBoxProperties> {
  public render(): ReactElement {
    const { title, subtitle, duration, details, url } = this.props;
    const titleClassName: string = this.setMultipleClassName([
      'history-box_title',
      url ? 'history-box_title--hoverable' : '',
    ]);

    return (
      <div className="history-box">
        <a className={titleClassName} href={url} target="_blank">
          <h3>{title}</h3>
        </a>
        <p className="history-box_detail">
          <i>{subtitle}</i>
        </p>
        <p className="history-box_detail history-box_duration">{duration}</p>
        {details?.map((item: string | ReactElement): ReactElement => {
          return <p className="history-box_detail">{item}</p>;
        })}
      </div>
    );
  }
}
