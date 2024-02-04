export interface IShareBoxProperties {
  description: string;
  absoluteLink: string;
  embeddedLink: string;
  isShareBoxOpen: boolean;
  isExpanded?: boolean;
  onEmbedButtonClick(): void;
}

export interface IShareBoxState {
  copyLinkText: string;
}
