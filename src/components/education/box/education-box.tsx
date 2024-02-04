import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import HistoryBox from '../../history-box/history-box';
import { IEducationBoxProperties } from './education-box-interface';

export default class EducationBox extends BaseComponent<IEducationBoxProperties> {
  public render(): ReactElement {
    const {
      title,
      educationDetails: { field, duration, grade },
    } = this.props;

    return (
      <HistoryBox
        title={title}
        subtitle={`${grade} of ${field}`}
        duration={duration}
      />
    );
  }
}
