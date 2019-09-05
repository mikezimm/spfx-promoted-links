import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

import { Label } from 'office-ui-fabric-react/lib/Label';

import PromotedLinkItem from './SpfxPromotedLinkItem';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {
  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
    return (
      <div className={styles.spfxPromotedLinks}>
        <div className={styles.container}>
          <Pivot linkSize={PivotLinkSize.large}>
          <PivotItem headerText="Tiles 1-2">
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
            
          </PivotItem>
          <PivotItem headerText="Tiles 3">
            <PromotedLinkItem
              imageUrl={`https://www.andrewconnell.com/assets/events/201912-espc-spfx-appinsights.jpg#align-right-thumb350`}
              title={`The Beach3`}
              description={`Nice place to visit`}
              href={`http:www.google.com`} />
            </PivotItem>
          </Pivot>
        </div>
      </div>
    );
  }
}
