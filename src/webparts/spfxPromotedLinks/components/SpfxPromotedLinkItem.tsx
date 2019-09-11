import * as React from 'react';
import { Image, ImageFit, } from 'office-ui-fabric-react/lib/Image';

import { css, IImageProps, } from 'office-ui-fabric-react';

import styles from './SpfxPromotedLinkItem.module.scss';

//Category may need to be defined optionally here
//https://www.logicbig.com/tutorials/misc/typescript/interface-to-describe-object-with-optional-properties.html

export interface IPromotedLinkItemProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
  category:string;
  parentCat:string;
}
export interface IPromotedLinkItemState {
  hovering: any;
  visible: any;
}
export default class PromotedLinkItem extends React.Component<IPromotedLinkItemProps, IPromotedLinkItemState> {

  constructor(props: IPromotedLinkItemProps, state: IPromotedLinkItemState) {
    super(props);

    this.state = {
      hovering: 10,
      visible:10
    };

    console.log("PromotedLinkItem constructor:  this - before setState");
    console.log(this);

  }

  public mouseOver(event): void {
    this.setState({ hovering: true });
  }

  public mouseOut(event): void {
    this.setState({ hovering: false });
  }

  public render(): JSX.Element {

    /*    main wrapper was this:
             //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator#Conditional_chains

             <div className={[
          styles.pLinkItemWrapper,
          this.state.visible === true  ? styles.pLinkItemWrapperExpanded
          : this.state.visible === false  ? styles.pLinkItemWrapperNotExpanded
          : ""
          ].join(" ")}>

          this.props.parentCat === this.props.category  ? styles.pLinkItemWrapperExpanded
          : styles.pLinkItemWrapperNotExpanded
          ].join(" ")}>


    */


    return (
      <a href={this.props.href} 
         className={styles.promotedLinks}
         target="_top" 
         role="listitem" 
         onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
        <div className={ [styles.pLinkItemWrapper,           
          this.props.parentCat === this.props.category  ? styles.pLinkItemWrapperExpanded
          : styles.pLinkItemWrapperNotExpanded
          ].join(" ")}>

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
