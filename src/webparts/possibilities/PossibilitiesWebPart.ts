import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PossibilitiesWebPartStrings';
import Possibilities from './components/Possibilities';
import { IPossibilitiesProps } from './components/IPossibilitiesProps';

export interface IPossibilitiesWebPartProps {
  description: string;
  ListName: string;
  SiteUrl: string;
}

export default class PossibilitiesWebPart extends BaseClientSideWebPart<IPossibilitiesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPossibilitiesProps > = React.createElement(
      Possibilities,
      {
        description: this.properties.description,
        ListName: this.properties.ListName,
        SiteUrl: this.properties.SiteUrl,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('ListName', {
                  label: 'List Name'
                }),
                PropertyPaneTextField('SiteUrl', {
                  label: 'Root Site Url'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
