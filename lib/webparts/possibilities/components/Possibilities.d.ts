/// <reference types="react" />
import * as React from 'react';
import { IPossibilitiesProps } from './IPossibilitiesProps';
import '../components/Custom.css';
export interface IPossibilitiesState {
    PossibilitiesData: any;
}
export default class Possibilities extends React.Component<IPossibilitiesProps, IPossibilitiesState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<IPossibilitiesProps>;
    getItems(): Promise<any>;
}
