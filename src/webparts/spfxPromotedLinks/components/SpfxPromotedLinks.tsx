import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { ISpfxPromotedLinksState } from './ISpfxPromotedLinksState';
import { IPromotedLinkItemProps } from './SpfxPromotedLinkItem';

import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';

import { Label } from 'office-ui-fabric-react/lib/Label';

import PromotedLinkItem from './SpfxPromotedLinkItem';

import * as tileItems from './SampleData';

import { TileService } from '../../../services';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, ISpfxPromotedLinksState> {

  constructor(props: ISpfxPromotedLinksProps){
    super(props);
    this.state = {
      allTiles: [],
      showAllTiles: false
    }
  }

  public componentDidMount(): void {
    this.setState({
      allTiles: TileService.getAllTiles()
    });
    console.log(this.state.allTiles);
  }

  public createPivotItem(newTile){



    /*
    let newTile = {} as IPromotedLinkItemProps;
    

    newTile.category = tileItems.pivtTitles[Math.floor(Math.random()*tileItems.pivtTitles.length)];
    newTile.imageUrl = tileItems.samplePics[Math.floor(Math.random()*tileItems.samplePics.length)];
    newTile.title = newTile.category + " " + Math.floor(Math.random() * 100);
    newTile.description = "Description " + Math.floor(Math.random() * 10000) + " --- " + newTile.category;
    newTile.href = tileItems.sampleLinks[Math.floor(Math.random()*tileItems.sampleLinks.length)];
    */
    // concatenating state object arrays:  https://www.robinwieruch.de/react-state-array-add-update-remove
        /*
    this.setState(state => {
      const allTiles = state.allTiles.concat(newTile);
      return {
        allTiles
      };
    });


    */
    // Why does this NOT work instead???      return <PromotedLinkItem newTile />

    return <PromotedLinkItem
    imageUrl={newTile.imageUrl}
    title={newTile.title}
    description={newTile.description}
    href={newTile.href}
    category={newTile.category} />

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

/*
  public componentDidMount(): void {
    this.setState({
      tiles: MissionService.getMissions()
    });
  }
*/


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

            {
              /* 
              *  for each mission passed into this component,
              *    bind it to the ApolloMission component
              * 
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}
              {this.createPivotItem()}

                              <ApolloMission key={ this._getMissionUniqueId(mission) } 
                              mission={ mission }
                              onRemoveMission={ this.props.onDeleteMission } />

              */

              this.props.allTiles.map(newTile => (
                <PromotedLinkItem
                  imageUrl={newTile.imageUrl}
                  title={newTile.title}
                  description={newTile.description}
                  href={newTile.href}
                  category={newTile.category} />
                ))
              
              }

          </div>
        </div>
      </div>
    );
  }

  private onLinkClick = (item: PivotItem): void => {
    //This sends back the correct pivot category which matches the category on the tile.
    console.log(item.props.headerText);
    //debugger;

    const filteredTiles: IPromotedLinkItemProps[] = this.state.allTiles.filter(tile => tile.category === item.props.headerText);

    /*
//    const filteredTiles: PromotedLinkItem[] = this.props.allTiles.filter(tile => {   
    var filteredTiles = this.props.allTiles.filter(tile => {
      if (
          (tile.category.toLowerCase().indexOf(item.props.headerText) === 0)
      ){
        return tile;
      }
    });
*/
    console.log(filteredTiles);

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
