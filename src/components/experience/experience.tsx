import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import TagContainer from '../tag-container/tag-container';
import ExperienceBox from './box/experience-box';
import { IExperienceBoxProperties } from './box/experience-box-interface';
import { IExperienceProperties } from './experience-interface';
import './experience.sass';

export default class Experience extends BaseComponent<IExperienceProperties> {
  protected declareTranslateCollection(): string | undefined {
    return 'home.experience';
  }
  public render(): ReactElement {
    const { experiences } = this.props;

    return (
      <section className="experience">
        <h2 className="experience_title">
          <TagContainer text={this.translate('title')} />
        </h2>
        <Grid layout={GridLayoutType.ROW} wrap>
          {experiences.map(
            (
              experience: IExperienceBoxProperties,
              index: number
            ): ReactElement => {
              const size = index % 3 === 1 ? 34 : 33;

              return (
                <Flex size={size} key={index} className="experience_flex">
                  <ExperienceBox {...experience} />
                </Flex>
              );
            }
          )}
        </Grid>
      </section>
    );
  }
}
