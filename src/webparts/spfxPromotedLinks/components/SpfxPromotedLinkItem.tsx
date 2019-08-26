import * as React from 'react';
import { Image, ImageFit, } from 'office-ui-fabric-react/lib/Image';

import { css, IImageProps, } from 'office-ui-fabric-react';

import styles from './SpfxPromotedLinks.module.scss';

export interface IPromotedLinkItemProps {
    imageUrl: string;
    title: string;
    description: string;
    href: string;

}

export default class PromotedLinkItem extends React.Component<IPromotedLinkItemProps, {}> {

    constructor(props: IPromotedLinkItemProps){
        super(props);
    }

    public render(): JSX.Element {
        return (
            <a href={this.props.href} target="_top">
                <div>
                    <Image src={this.props.imageUrl} shouldFadeIn={true} imageFit={ImageFit.cover} />
                    <div>
                        <div>{this.props.title}</div>
                        <div>{this.props.description}</div>
                    </div>
                </div>
            </a>
        );
    }

}