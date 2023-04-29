import { GridScreenSize } from '../../grid/grid-enum';
import {
  IFlexStyleClassNameGeneratorEntry,
  IFlexStyleClassNameGeneratorGetFlexClassName,
  IFlexViewGenerateFlexSizeStyleSheetClassParam,
} from './flex-style-class-name-generator-interface';

export class FlexStyleClassNameGenerator {
  private flexClassName: string[];

  public constructor(
    private readonly entry: IFlexStyleClassNameGeneratorEntry
  ) {
    this.generate();
  }

  public getFlexClassName(): IFlexStyleClassNameGeneratorGetFlexClassName {
    const { flexClassName } = this;

    return { flexClassName: flexClassName.join(' ') };
  }

  private generate(): void {
    const { flexProperties } = this.entry;
    const { size, desktopOrder, tabletOrder, mobileOrder } = flexProperties;
    const { tabletSize = size, mobileSize = size } = flexProperties;

    this.flexClassName = ['flex'];

    this.generateFlexSizeStyleSheetClass({
      flexSize: size,
      flexScreenSize: GridScreenSize.DESKTOP,
      flexOrder: desktopOrder,
    });

    this.generateFlexSizeStyleSheetClass({
      flexSize: tabletSize,
      flexScreenSize: GridScreenSize.TABLET,
      flexOrder: tabletOrder,
    });

    this.generateFlexSizeStyleSheetClass({
      flexSize: mobileSize,
      flexScreenSize: GridScreenSize.MOBILE,
      flexOrder: mobileOrder,
    });
  }

  private generateFlexSizeStyleSheetClass(
    param: IFlexViewGenerateFlexSizeStyleSheetClassParam
  ): void {
    const { flexScreenSize, flexSize, flexOrder } = param;

    this.flexClassName = [
      ...this.flexClassName,
      `flex-${flexScreenSize}-${flexSize}`,
    ];

    if (flexOrder !== undefined) {
      this.flexClassName.push(`flex-order-${flexScreenSize}-${flexOrder}`);
    }
  }
}
