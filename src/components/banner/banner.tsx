import { Box, Grid } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import { sizeCalc } from '../../global/size-calculator/size-calculator';
import './banner.sass';

export class Banner extends BaseComponent {
  protected declareTranslateCollection(): string | undefined {
    return 'home.banner';
  }

  public render(): ReactElement {
    return (
      <Box component="section" className="banner">
        <StaticImage
          className="banner_image"
          src="../../assets/images/transparent2.png"
          alt="Hamidreza Amini"
          formats={['png']}
        />
        <Grid
          sx={{
            position: 'absolute',
            top: '50%',
            left: sizeCalc(40),
            transform: 'translateY(-50%)',
          }}
          // className="banner_content"
        >
          <h1 className="banner_content__title">{this.translate('title')}</h1>
          <p className="banner_content__quote">
            {'<'}
            <span>code</span>
            {'> '}
            <i>{this.translate('subtitle')}</i>
            {' </'}
            <span>code</span>
            {'>'}
          </p>
          <a href="/about" className="banner_button">
            {this.translate('readMoreButtonText')}
          </a>
        </Grid>
      </Box>
    );
  }
}
