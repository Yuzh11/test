import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { buildDayNames, buildWeeks } from './build'
import { getDate } from 'date-fns'


function Data1(props) {
    const { year, mouthIndex } = props.calendar
    const weeks = useMemo(() => buildWeeks(year, mouthIndex), [year, mouthIndex])
    console.log(weeks);
    const dayNames = useMemo(() => buildDayNames(1), [])
    return (
        <table>
            <thead>
                <tr>
                    {
                        dayNames.map((l, i) => (
                            <th key={i}>{l}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    weeks.map((l, i) => (
                        <tr key={i}>
                            {
                                l.map((item, j) => (
                                    <td key={j}>
                                        {getDate(item)}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

Data1.propTypes = {
    calendar: PropTypes.shape({
        year: PropTypes.number,
        mouthIndex: PropTypes.number
    })
}

export default Data1
