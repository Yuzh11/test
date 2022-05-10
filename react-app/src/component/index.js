
import { Component } from 'react';
// import Data from './data.js';
import Datas from './data1.js';

export default class CptIndex extends Component {
    render() {
        return (
            <div>
                <div className='mbox'>
                    <Datas calendar={{ year: 2022, mouthIndex: 4 }} />
                </div>

            </div>
        )
    }
}


