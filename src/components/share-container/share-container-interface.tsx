import { HTMLAttributes } from 'react';

export interface IShareContainerProperties
  extends HTMLAttributes<HTMLDivElement> {
  readonly shareName: string;
}
