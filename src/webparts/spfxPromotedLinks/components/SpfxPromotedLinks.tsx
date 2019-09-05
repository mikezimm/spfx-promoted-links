import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';

import { Label } from 'office-ui-fabric-react/lib/Label';

import PromotedLinkItem from './SpfxPromotedLinkItem';

import * as tileItems from './SampleData';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {

  public createPivotItem(){
    var thisPiv = tileItems.pivtTitles[Math.floor(Math.random()*tileItems.pivtTitles.length)];
    return <PromotedLinkItem
    imageUrl={tileItems.samplePics[Math.floor(Math.random()*tileItems.samplePics.length)]}
    title={thisPiv + " " + Math.floor(Math.random() * 100)}
    description={"Description " + Math.floor(Math.random() * 10000) + " --- " + thisPiv}
    href={tileItems.sampleLinks[Math.floor(Math.random()*tileItems.sampleLinks.length)]}
    category={thisPiv} />

  }

    //http://react.tips/how-to-create-reactjs-components-dynamically/ - based on createImage
    public createPivot(pivT) {
      return (
        <PivotItem headerText={pivT} />
      )
    }

  public createPivots(pivtTitles){
    return (
      pivtTitles.map(this.createPivot)
    )
  }

  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
  
    return (
      <div className={styles.spfxPromotedLinks}>
        <div className={styles.container}>
        {console.log(tileItems.pivtTitles)}
          {/*//https://developer.microsoft.com/en-us/fabric#/controls/web/pivot*/}
          <Pivot linkSize={PivotLinkSize.large} onLinkClick={this.onLinkClick}>
            {this.createPivots(tileItems.pivtTitles)}
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
