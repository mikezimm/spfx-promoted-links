
import {IPromotedLinkItemProps} from './SpfxPromotedLinkItem'

export interface ISpfxPromotedLinksState {
  allTiles?: IPromotedLinkItemProps[],
  showAllTiles: boolean,
  filteredCategory?:string,
  filteredTiles?: IPromotedLinkItemProps[],
}
