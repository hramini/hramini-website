import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import {
  IContactBoxKeyValuePair,
  IContactBoxProperties,
} from './contact-box-interface';
import './contact-box.sass';

export default class ContactBox extends BaseComponent<IContactBoxProperties> {
  public render(): ReactElement {
    const { dataList } = this.props;

    return (
      <div className="c-contact-box">
        {dataList.map(
          (data: IContactBoxKeyValuePair, index: number): ReactElement => {
            const { icon, key, value } = data;

            return (
              <p key={index} className="c-contact-box_item">
                <span className="c-contact-box_item__key">
                  {icon ? <i className={`fa fa-${icon}`}></i> : <></>} {key}:
                </span>
                <span className="c-contact-box_item__value">{value}</span>
              </p>
            );
          }
        )}
      </div>
    );
  }
}
