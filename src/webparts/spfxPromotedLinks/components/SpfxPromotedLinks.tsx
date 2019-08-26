import * as React from 'react';
import styles from './SpfxPromotedLinks.module.scss';
import { ISpfxPromotedLinksProps } from './ISpfxPromotedLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxPromotedLinks extends React.Component<ISpfxPromotedLinksProps, {}> {
  public render(): React.ReactElement<ISpfxPromotedLinksProps> {
    return (
      <div className={ styles.spfxPromotedLinks }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>

              </a>
              adding some text
            </div>
          </div>
        </div>
      </div>
    );
  }
}
