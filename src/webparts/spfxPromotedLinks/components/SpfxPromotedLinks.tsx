import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { ISpfxPromotedLinksState } from './ISpfxPromotedLinksState';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';

import { Label } from 'office-ui-fabric-react/lib/Label';

import PromotedLinkItem from './SpfxPromotedLinkItem';

import * as tileItems from './SampleData';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, ISpfxPromotedLinksState> {

  constructor(props: ISpfxPromotedLinksProps){
    super(props);
    this.state = {
      allTiles: [],
      showAllTiles: false
    }
  }

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
    //This sends back the correct pivot category which matches the category on the tile.
    console.log(item.props.headerText);

    const filteredTiles: PromotedLinkItem[] = this.props.allTiles.filter(tile => {
      if (
          (tile.category.toLowerCase().indexOf(item.props.headerText) === 0)
      ){
        return tile;
      }
    });

    // I think in here for the return, I need to have it just update the state and not return anything.

    /*

    return filteredTiles.map(t => ({
      key: this._getTileUniqueId(t),
      name: `(${t.props.category}) ${ props.description}`
    }));


    */
  } //End onClick

  //Unique ID for now is just the Category, Title and Description
  private _getTileUniqueId(tile: PromotedLinkItem): string {
    return (`${ tile.props.category.replace(' ','_') } ${ tile.props.title.replace(' ','_') } ${tile.props.description.replace(' ','_') }`).toLowerCase();
  }


}
