import {IPromotedLinkItemProps} from './SpfxPromotedLinkItem'

export interface ISpfxPromotedLinksProps {
  description: string;
  allTiles?: IPromotedLinkItemProps[];
  filteredTiles?: IPromotedLinkItemProps[];
  filteredCategory?: string;

}
