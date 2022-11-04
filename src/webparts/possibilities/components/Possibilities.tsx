import * as React from 'react';
import styles from './Possibilities.module.scss';
import { IPossibilitiesProps } from './IPossibilitiesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse, IHttpClientOptions, SPHttpClientConfiguration, ISPHttpClientOptions } from '@microsoft/sp-http';
import '../components/Custom.css';
import { SPComponentLoader } from '@microsoft/sp-loader';
export interface IPossibilitiesState {
  PossibilitiesData: any;
}
export default class Possibilities extends React.Component<IPossibilitiesProps, IPossibilitiesState> {
  constructor(props) {
    super(props);
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css");
    this.state = {
      PossibilitiesData: []
    };
  }


  public componentDidMount() {
    this.getItems().then((response) => {
      console.log("response", response);
      var data = [];
      response.value.forEach(element => {
        let imageurl = element.AttachmentFiles.length > 0 ? this.props.SiteUrl + element.AttachmentFiles[0].ServerRelativeUrl : '';
        data.push({
          Image: imageurl, Id: element.ID, Heading: element.Title, DescriptionText: element.Description
          , Link: element.UrlLink != null ? element.UrlLink : ''

        });
      });
      console.log("Data in Data ", data);
      this.setState({ PossibilitiesData: data });
    });
  }
  public render(): React.ReactElement<IPossibilitiesProps> {
    return (
      // <div className={styles.possibilities} >
      //   <div className={styles.container}>
          <div className="row customcss">
            {this.state.PossibilitiesData.map((item) => {
              if (item.Link !='') {
                return (
                  <div className="col-lg-4 text-center pb-4">
 <a href={item.Link} className="customlink">
                    <div className="box-bg p-4 pt-5 pb-5">
                      <img src={item.Image} width="75" />
                      <p className="box-p1 fontRegular mt-3">{item.Heading}</p>
                      <p className="box-p1 fontRegular">{item.DescriptionText}</p>
                    </div>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-4 text-center pb-4">
                    <div className="box-bg p-4 pt-5 pb-5">
                      <img src={item.Image} width="75" />
                      <p className="box-p1 fontRegular mt-3">{item.Heading}</p>
                      <p className="box-p1 fontRegular">{item.DescriptionText}</p>
                    </div>
                  </div>
                );
              }
              
            })
            }
          </div>
      //   </div>
      // </div >
    );
  }
  public getItems(): Promise<any> {
    try {
      var requestUrl = this.props.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + this.props.ListName + "')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles";
      console.log("requestUrl", requestUrl);

      return this.props.context.spHttpClient.get(requestUrl, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
        });

    } catch (error) {
      console.log("Error while getting items", error);
    }
  }
}
