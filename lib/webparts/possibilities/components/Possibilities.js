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
import { SPHttpClient } from '@microsoft/sp-http';
import '../components/Custom.css';
import { SPComponentLoader } from '@microsoft/sp-loader';
var Possibilities = (function (_super) {
    __extends(Possibilities, _super);
    function Possibilities(props) {
        var _this = _super.call(this, props) || this;
        SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css");
        _this.state = {
            PossibilitiesData: []
        };
        return _this;
    }
    Possibilities.prototype.componentDidMount = function () {
        var _this = this;
        this.getItems().then(function (response) {
            console.log("response", response);
            var data = [];
            response.value.forEach(function (element) {
                var imageurl = element.AttachmentFiles.length > 0 ? _this.props.SiteUrl + element.AttachmentFiles[0].ServerRelativeUrl : '';
                data.push({
                    Image: imageurl, Id: element.ID, Heading: element.Title, DescriptionText: element.Description,
                    Link: element.UrlLink != null ? element.UrlLink : ''
                });
            });
            console.log("Data in Data ", data);
            _this.setState({ PossibilitiesData: data });
        });
    };
    Possibilities.prototype.render = function () {
        return (
        // <div className={styles.possibilities} >
        //   <div className={styles.container}>
        React.createElement("div", { className: "row customcss" }, this.state.PossibilitiesData.map(function (item) {
            if (item.Link != '') {
                return (React.createElement("div", { className: "col-lg-4 text-center pb-4" },
                    React.createElement("a", { href: item.Link, className: "customlink" },
                        React.createElement("div", { className: "box-bg p-4 pt-5 pb-5" },
                            React.createElement("img", { src: item.Image, width: "75" }),
                            React.createElement("p", { className: "box-p1 fontRegular mt-3" }, item.Heading),
                            React.createElement("p", { className: "box-p1 fontRegular" }, item.DescriptionText)))));
            }
            else {
                return (React.createElement("div", { className: "col-lg-4 text-center pb-4" },
                    React.createElement("div", { className: "box-bg p-4 pt-5 pb-5" },
                        React.createElement("img", { src: item.Image, width: "75" }),
                        React.createElement("p", { className: "box-p1 fontRegular mt-3" }, item.Heading),
                        React.createElement("p", { className: "box-p1 fontRegular" }, item.DescriptionText))));
            }
        })));
    };
    Possibilities.prototype.getItems = function () {
        try {
            var requestUrl = this.props.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + this.props.ListName + "')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles";
            console.log("requestUrl", requestUrl);
            return this.props.context.spHttpClient.get(requestUrl, SPHttpClient.configurations.v1)
                .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            });
        }
        catch (error) {
            console.log("Error while getting items", error);
        }
    };
    return Possibilities;
}(React.Component));
export default Possibilities;

//# sourceMappingURL=Possibilities.js.map
