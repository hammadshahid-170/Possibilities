import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IPossibilitiesProps {
  description: string;
  context: WebPartContext;
  ListName: string;
  SiteUrl: string;
}
