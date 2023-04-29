import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import TagContainer from '../tag-container/tag-container';
import EducationBox from './box/education-box';
import { IEducationBoxProperties } from './box/education-box-interface';
import { IEducationProperties } from './education-interface';
import './education.sass';

export default class Education extends BaseComponent<IEducationProperties> {
  protected declareTranslateCollection(): string | undefined {
    return 'home.education';
  }
  public render(): ReactElement {
    const { educations } = this.props;

    return (
      <section className="education">
        <h2 className="education_title">
          <TagContainer text={this.translate('title')} />
        </h2>
        <Grid layout={GridLayoutType.ROW}>
          {educations.map(
            (
              education: IEducationBoxProperties,
              index: number
            ): ReactElement => {
              return (
                <Flex size={50} key={index} className="education_flex">
                  <EducationBox {...education} />
                </Flex>
              );
            }
          )}
        </Grid>
      </section>
    );
  }
}
