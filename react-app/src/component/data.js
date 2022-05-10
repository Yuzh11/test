import React, { Component } from 'react';
import {
    dataList
} from '../utils/dataList';
import moment from 'moment'
import chunk from 'lodash/chunk'
// import { wrap } from 'module';
const a = moment().daysInMonth()

// function getArr() {
//     for (let i = 0; i <= a; i++) {
//         arr.push(i)
//     }
// }
class Banner extends Component {
    state = {
        list: dataList,
        day: [],
        chunk
    }
    componentDidMount() {
        let arr = []
        for (let i = 1; i <= a; i++) {
            arr.push(i)
        }
        this.setState({
            day: arr
        })
    }
    render() {
        console.log(this.state.list)
        console.log(this.state.day);
        return (
            <div>
                <div>
                    <span>上个月</span>
                    <span>下个月</span>
                </div>
                <div style={{ display: "flex", width: '100%' }}>
                    {
                        this.state.list.map((l, i) => (
                            <div className="box" key={i} style={{ height: '50px', background: 'yellow', textAlign: 'center', flex: 1 }}>
                                {l.value}
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: "flex", width: '100%', flexWrap: 'wrap' }}>
                    {
                        this.state.day.map((l, i) => {
                            // console.log(l, i);
                            return (
                                <div className="bigbox" key={i} style={{ width: '200px', height: "200px", background: "blue", textAlign: 'center', flex: 1 }}>
                                    {l}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Banner;