var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'PossibilitiesWebPartStrings';
import Possibilities from './components/Possibilities';
var PossibilitiesWebPart = (function (_super) {
    __extends(PossibilitiesWebPart, _super);
    function PossibilitiesWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PossibilitiesWebPart.prototype.render = function () {
        var element = React.createElement(Possibilities, {
            description: this.properties.description,
            ListName: this.properties.ListName,
            SiteUrl: this.properties.SiteUrl,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    PossibilitiesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    PossibilitiesWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return PossibilitiesWebPart;
}(BaseClientSideWebPart));
export default PossibilitiesWebPart;

//# sourceMappingURL=PossibilitiesWebPart.js.map
