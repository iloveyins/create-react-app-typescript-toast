import React from 'react';
import './index.scss';
import { Header, Toast } from '../../componets/index';

// export interface Props {
//     name: string;
//     enthusiasmLevel?: number;
// }

interface IProps {

}

interface IState {
    header: IHeader;
}

interface IHeader {
    onOpen?(): void;
    isOpen?: boolean;
    title?: String;
}

export default class ApplyJoin extends React.Component<IProps, IState>{

    private header = {
        isOpen: true,
        onOpen: () => {
            Toast.fail("打开成功", 2, () => {
                this.setState({ header: { title: "sdf" } })
            });
        },
    }

    constructor(props: IProps, context: IState) {
        super(props, context);

        this.state = {
            header: this.header
        }
    }



    render() {
        return (
            <div id="apply-join">
                <Header {...this.state.header} />
            </div>
        )
    }
}