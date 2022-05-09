import React, {
    Component
} from 'react';
import {
    dataList
} from '../utils/dataList';
class Banner extends Component {
    state = {
        list: dataList
    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <div>
                    {
                        this.state.list.map((l, i) => (
                            <div className="box" key={i} style={{ width: '200px', height: '50px', background: 'yellow', float: 'left', textAlign: 'center' }}>
                                {l.value}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="bigbox" style={{ width: '200px', height: "200px", background: "bule" }}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;