import React, {
    Component
} from 'react';
import {
    dataList
} from '../utils/dataList';
import moment from 'moment'
const a = moment().daysInMonth()
class Banner extends Component {
    state = {
        list: dataList,
        day: a
    }
    render() {
        console.log(this.state.list)
        console.log(this.state.day);
        return (
            <div>
                <div style={{ display: "flex", width: '100%' }}>
                    {
                        this.state.list.map((l, i) => (
                            <div className="box" key={i} style={{ height: '50px', background: 'yellow', textAlign: 'center', flex: 1 }}>
                                {l.value}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="bigbox" style={{ width: '200px', height: "200px", background: "blue" }}>
                        11
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;