import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IPossibilitiesWebPartProps {
    description: string;
    ListName: string;
    SiteUrl: string;
}
export default class PossibilitiesWebPart extends BaseClientSideWebPart<IPossibilitiesWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
