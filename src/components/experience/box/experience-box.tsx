import React, { Fragment, ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import HistoryBox from '../../history-box/history-box';
import { IExperienceBoxProperties } from './experience-box-interface';

export default class ExperienceBox extends BaseComponent<IExperienceBoxProperties> {
  public render(): ReactElement {
    const {
      title,
      jobDetails: { address, role, remote, time, duration, website },
    } = this.props;

    return (
      <HistoryBox
        title={title}
        subtitle={role}
        duration={duration}
        url={website}
        details={[
          address,
          time,
          <Fragment>
            <span>Remote Job?</span> {remote ? 'Yes' : 'No'}
          </Fragment>,
        ]}
      />
    );
  }
}
