import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import PromotedLinkItem from './SpfxPromotedLinkItem';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {
  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
    return (
      <div className={styles.spfxPromotedLinks}>
        <div className={styles.container}>
          <PromotedLinkItem
            imageUrl={`https://www.andrewconnell.com/assets/events/201912-espc-spfx-workshop.jpg#align-right-thumb350`}
            title={`The Beach`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />

          <PromotedLinkItem
            imageUrl={`https://www.andrewconnell.com/assets/events/201912-espc-spfx-ninja.jpg#align-right-thumb350`}
            title={`The Beach2`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />

          <PromotedLinkItem
            imageUrl={`https://www.andrewconnell.com/assets/events/201912-espc-spfx-appinsights.jpg#align-right-thumb350`}
            title={`The Beach3`}
            description={`Nice place to visit`}
            href={`http:www.google.com`} />
        </div>
      </div>
    );
  }
}
