import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';

import { Label } from 'office-ui-fabric-react/lib/Label';

import PromotedLinkItem from './SpfxPromotedLinkItem';

// randomItem = samplePics[Math.floor(Math.random()*samplePics.length)];
var samplePics = [
  "https://amp.businessinsider.com/images/5698198de6183e50008b98a1-1334-1001.jpg",
  "https://www.charlottefive.com/wp-content/uploads/2018/10/Signature-Shot-Pavilion-Pool-and-Beach.jpg",
  "https://www.xtns.org/wp-content/uploads/2014/06/all-inclusive-resorts-island-resort-exquisite-us-virgin-islands-all-inclusive-resorts-deals-us-virgin-islands-resorts-st-croix-us-virgin-islands-resorts-st-johns-us-virgin-islands-resorts-st-thom.jpg",
  "https://i.kinja-img.com/gawker-media/image/upload/qjmdguwovtcsjszqqgqt.jpg",
  "https://i.pinimg.com/474x/d1/93/2a/d1932afb0987d71a61b2bf7df8735cd4.jpg",
  "https://i.pinimg.com/474x/95/1c/c3/951cc398063945df92d7d0258e3db5a3.jpg"
]
// randomItem = sampleCats[Math.floor(Math.random()*sampleCats.length)];
var sampleCats = [
  "People",
  "Places",
  "Things"
]
// randomItem = sampleLinks[Math.floor(Math.random()*sampleLinks.length)];
var sampleLinks = [
  "https://www.google.com",
  "https://www.bing.com",
  "https://www.microsoft.com",
  "https://www.cnn.com",
  "https://www.amazon.com"
]

// https://css-tricks.com/snippets/javascript/select-random-item-array/
// randomItem = myArray[Math.floor(Math.random()*myArray.length)];

const pivtTitles = [
  "People",
  "Places",
  "Things"
];

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {


  public createPivotItem(){
    var thisPiv = pivtTitles[Math.floor(Math.random()*pivtTitles.length)];
    return <PromotedLinkItem
    imageUrl={samplePics[Math.floor(Math.random()*samplePics.length)]}
    title={thisPiv + " " + Math.floor(Math.random() * 100)}
    description={"Description " + Math.floor(Math.random() * 10000) + " --- " + thisPiv}
    href={sampleLinks[Math.floor(Math.random()*sampleLinks.length)]}
    category={thisPiv} />

  }

  public createPivot(pivT) {
    //http://react.tips/how-to-create-reactjs-components-dynamically/ - based on createImage
    return (
      <PivotItem headerText={pivT} />
    )
  }

  public createPivots(pivtTitles){
    //http://react.tips/how-to-create-reactjs-components-dynamically/ - based on createImages
    return (
      pivtTitles.map(this.createPivot)
    )
  }

  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
  
    return (
      <div className={styles.spfxPromotedLinks}>
        <div className={styles.container}>
        {console.log(pivtTitles)}
          {/*//https://developer.microsoft.com/en-us/fabric#/controls/web/pivot*/}
          <Pivot linkSize={PivotLinkSize.large} onLinkClick={this.onLinkClick}>
            {this.createPivots(pivtTitles)}
          </Pivot>
          <br/>
          <div>
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
            {this.createPivotItem()}
          </div>
        </div>
      </div>
    );
  }

  public onLinkClick(item: PivotItem): void {
    console.log(item.props.headerText);
  }

}
