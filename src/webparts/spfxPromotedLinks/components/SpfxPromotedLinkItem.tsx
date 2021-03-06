import * as React from 'react';
import { Image, ImageFit, } from 'office-ui-fabric-react/lib/Image';

import { css, IImageProps, } from 'office-ui-fabric-react';

import styles from './SpfxPromotedLinkItem.module.scss';

export interface IPromotedLinkItemProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}
export interface IPromotedLinkItemState {
  hovering: any;
}
export default class PromotedLinkItem extends React.Component<IPromotedLinkItemProps, IPromotedLinkItemState> {

  constructor(props: IPromotedLinkItemProps, state: IPromotedLinkItemState) {
    super(props);

    this.state = {
      hovering: 10
    };
  }

  public mouseOver(event): void {
    this.setState({ hovering: true });
  }

  public mouseOut(event): void {
    this.setState({ hovering: false });
  }

  public render(): JSX.Element {
    return (
      <a href={this.props.href} 
         className={styles.promotedLinks}
         target="_top" 
         role="listitem" 
         onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
        <div className={styles.pLinkItemWrapper}>
          <Image className={styles.pLinkItemImage} src={this.props.imageUrl} shouldFadeIn={true} imageFit={ImageFit.centerCover} />
          <div className={[styles.pLinkItemHoverPanel, 
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator#Conditional_chains
            this.state.hovering === true  ? styles.pLinkItemHoverPanelExpanded
            : this.state.hovering === false  ? styles.pLinkItemHoverPanelNotExpanded
            : ""
            ].join(" ")}>
            <div className={styles.pLinkItemTitle}>{this.props.title}</div>
            <div className={styles.pLinkItemDesc}>{this.props.description}</div>
          </div>
        </div>
      </a>
    );
  }

}
