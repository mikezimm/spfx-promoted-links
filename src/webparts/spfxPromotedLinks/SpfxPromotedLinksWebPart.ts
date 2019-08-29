import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPromotedLinksWebPartStrings';
import SpfxPromotedLinks from './components/SpfxPromotedLinks';
import { ISpfxPromotedLinksProps } from './components/ISpfxPromotedLinksProps';

export interface ISpfxPromotedLinksWebPartProps {
  description: string;
}

export default class SpfxPromotedLinksWebPart extends BaseClientSideWebPart<ISpfxPromotedLinksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPromotedLinksProps > = React.createElement(
      SpfxPromotedLinks,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
