import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../../components/flex/flex-component';
import Grid from '../../components/grid/grid-component';
import { GridLayoutType } from '../../components/grid/grid-enum';
import Layout from '../../components/layout/layout';
import '../../global/locale/en-us';
import './about.sass';

export default class About extends BaseComponent {
  protected declareTranslateCollection(): string {
    return 'home';
  }

  public render(): ReactNode {
    return (
      <Layout title="About" description="Hamidreza Amini">
        <Grid layout={GridLayoutType.ROW}>
          <Flex size={100} className="about_posts">
            <h2 className="about_title">About Me</h2>
            <p className="about_content">
              I am a <b>JavaScript Engineer</b> with over <i>8</i> years of
              experience in <i>JavaScript</i>, and over <i>5</i> years expertise
              in <i>TypeScript</i> and <i>React</i>, I am confident in my
              ability to contribute to professional teams and make a positive
              impact on the projects.
            </p>
            <p className="about_content">
              Throughout my career, I have been involved in various web
              development projects, where I have gained a deep understanding of
              both <b>front-end</b> and <b>back-end</b> development principles
              and best practices. My proficiency in JavaScript and TypeScript
              has allowed me to build robust and scalable applications on the
              client-side, while my experience with <b>Node.js</b>,{' '}
              <b>Express.js</b>, and <b>MongoDB</b> has enabled me to develop
              powerful server-side solutions.
            </p>
            <p className="about_content">
              I have a strong foundation in software development and{' '}
              <i>an eye for details</i>, which enables me to write clean,
              maintainable, and efficient code. I am well-versed in modern
              development tools and frameworks and have experience working with
              <b>Git</b>, <b>NPM</b>, <b>Webpack</b>, <b>Docker</b>,{' '}
              <b>Web3.js</b>, <b>Redux</b>, and other essential technologies.
              Additionally, I am comfortable working in an Agile development
              environment, collaborating with cross-functional teams to deliver
              high-quality software products.
            </p>
            <p className="about_content">
              One of my key strengths is my ability to quickly learn and adapt
              to new technologies and frameworks. I stay up to date with the
              latest trends in the JavaScript ecosystem and continuously strive
              to enhance my skills and knowledge through self-study and
              professional development resources. This mindset allows me to
              bring fresh ideas and innovative solutions to the table, ensuring
              that your projects stay on the cutting edge.
            </p>
            <p className="about_content">
              Beyond technical expertise, I am a <i>strong communicator</i> and
              a <i>team player</i>. I value open and transparent collaboration,
              actively seeking and providing feedback to foster a positive and
              productive working environment. I am eager to contribute my skills
              and experience to the teams, working together to achieve
              exceptional results.
            </p>
          </Flex>
        </Grid>
      </Layout>
    );
  }
}
