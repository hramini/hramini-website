import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import { Coding } from '../info-bar/body/sections/coding/coding';
import { Knowledge } from '../info-bar/body/sections/knowledge/knowledge';
import { Languages } from '../info-bar/body/sections/languages/languages';
import { Living } from '../info-bar/body/sections/living/living';
import './info-bar-mobile.sass';

export class InfoBarMobile extends BaseComponent {
  public render(): ReactElement {
    return (
      <div className="c-info-bar-mobile">
        <Grid
          layout={GridLayoutType.ROW}
          className="c-info-bar-mobile_base-info"
        >
          <Flex size={49}>
            <div>
              <h5 className="c-info-bar-mobile_section-title">Personal Info</h5>
              <Living />
            </div>
          </Flex>
          <Flex size={2}>
            <div className="c-info-bar-mobile_vertical-divider"></div>
          </Flex>
          <Flex size={49}>
            <div>
              <h5 className="c-info-bar-mobile_section-title">Languages</h5>
              <Languages />
            </div>
          </Flex>
        </Grid>
        <hr />
        <Grid
          layout={GridLayoutType.ROW}
          className="c-info-bar-mobile_skills"
          wrap
        >
          <Flex size={49}>
            <div>
              <h5 className="c-info-bar-mobile_section-title">Knowledge</h5>
              <Knowledge />
            </div>
          </Flex>
          <Flex size={2}>
            <div className="c-info-bar-mobile_vertical-divider"></div>
          </Flex>
          <Flex size={49}>
            <div>
              <h5 className="c-info-bar-mobile_section-title">Skills</h5>
              <Coding />
            </div>
          </Flex>
        </Grid>
      </div>
    );
  }
}
