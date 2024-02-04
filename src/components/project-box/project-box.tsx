import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { IProjectBoxProperties } from './project-box-interface';
import './project-box.sass';

export default class ProjectBox extends BaseComponent<IProjectBoxProperties> {
  public render(): ReactElement {
    const { projectDetails, technologies, title } = this.props.project;
    const { at, description, url, usedTechnologies } = projectDetails;

    return (
      <div className="project-box">
        <h3 className="project-box_title">{title}</h3>
        <p className="project-box_detail project-box_at">
          <i>
            {at === 'Personal' ? '' : 'At '}
            <span>{at}</span>
          </i>
        </p>
        <p className="project-box_detail project-box_description">
          - {description}
        </p>
        <p className="project-box_detail project-box_used-technologies">
          - {usedTechnologies}
        </p>
        <p className="project-box_url">
          <a href={url}>{url}</a>
        </p>
      </div>
    );
  }
}
