import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import PromotedLinkItem from './SpfxPromotedLinkItem';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {
  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
    return (
      <div className={ styles.spfxPromotedLinks }>
        <div className={ styles.container }>
        <PromotedLinkItem
            imageUrl={`https://mcclickster.sharepoint.com/sites/Templates/SPFx/Shared%20Documents/111.jpg`}
            title={`The Beach`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />

          <PromotedLinkItem
            imageUrl={`https://mcclickster.sharepoint.com/sites/Templates/SPFx/Shared%20Documents/222.jpg`}
            title={`The Beach2`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />

          <PromotedLinkItem
            imageUrl={`https://mcclickster.sharepoint.com/sites/Templates/SPFx/Shared%20Documents/333.jpg`}
            title={`The Beach3`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />
        </div>
      </div>
    );
  }
}
