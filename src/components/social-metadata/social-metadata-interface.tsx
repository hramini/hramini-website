import { SocialMetadataType } from "./social-metadata-enum";

export interface ISocialMetadataProperties {
  readonly title: string;
  readonly imageResourceFileName: string;
  readonly description: string;
  readonly type: SocialMetadataType;
}
