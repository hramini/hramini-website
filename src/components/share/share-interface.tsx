export interface IShareProperties {
  readonly embeddedLink?: string;
  readonly absoluteLink: string;
  readonly imageResourceFileName: string;
  readonly description?: string;
  readonly isExpanded?: boolean;
}

export interface IShareState {
  readonly isShareBoxOpen: boolean;
  readonly isEmbedModelOpen: boolean;
  // readonly copyLinkText: string;
}
