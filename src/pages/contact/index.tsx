import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import ContactBox from '../../components/contact-box/contact-box';
import Flex from '../../components/flex/flex-component';
import Grid from '../../components/grid/grid-component';
import { GridLayoutType } from '../../components/grid/grid-enum';
import Layout from '../../components/layout/layout';
import './contact.sass';

export default class Contact extends BaseComponent {
  public render(): ReactElement {
    return (
      <Layout title="Contact" description="">
        <h1 className="c-contact_title">My Contact Information</h1>
        <Grid layout={GridLayoutType.ROW}>
          <Flex size={50}>
            <div className="c-contact_box-holder">
              <ContactBox
                dataList={[
                  {
                    icon: 'google',
                    key: 'Google',
                    value: 'hramini72@gmail.com',
                  },
                  {
                    icon: 'instagram',
                    key: 'Instagram',
                    value: '@hamidreza.amini.dev',
                  },
                  {
                    icon: 'twitter',
                    key: 'Twitter',
                    value: '@HamidrezaAmini7',
                  },
                  {
                    icon: 'facebook',
                    key: 'Facebook',
                    value: '@hamidreza.amini72',
                  },
                  {
                    icon: 'whatsapp',
                    key: 'Whatsapp',
                    value: '+98-935-369-1801',
                  },
                  {
                    icon: 'mobile',
                    key: 'Business Phone',
                    value: '+98-935-928-1801',
                  },
                ]}
              />
            </div>
          </Flex>
          <Flex size={50}>
            <div className="c-contact_box-holder">
              <ContactBox
                dataList={[
                  {
                    icon: 'envelope',
                    key: 'Email',
                    value: 'me@hramini.ir',
                  },
                  {
                    icon: 'linkedin',
                    key: 'Linkedin',
                    value: '@hamidreza-amini-8178657b',
                  },
                  {
                    icon: 'skype',
                    key: 'Skype',
                    value: 'hamidreza.amini7',
                  },
                  {
                    icon: 'calendar',
                    key: 'Calendly',
                    value: 'hamidreza-7',
                  },
                  {
                    icon: 'github',
                    key: 'Github',
                    value: 'hramini',
                  },
                  {
                    icon: 'codepen',
                    key: 'Codepen',
                    value: 'hramini',
                  },
                ]}
              />
            </div>
          </Flex>
        </Grid>
      </Layout>
    );
  }
}
