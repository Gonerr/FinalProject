import React from 'react'
import PropTypes from 'prop-types'

import style from './Filter.module.css'

const Filter = (props) => {
    return (
        <div className={`item service ${props.rootClassName} `}>
            <div className={style.details}>
                <span className={style.text1}>Search BY</span>
                <span className={style.text4}>Enter title / genre / year</span>
            </div>
            <svg width="32" height="32" viewBox="0 0 32 32" className={style.icon1}>
                <path
                    d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                    fill="currentColor"
                ></path>
            </svg>
        </div>
    )
}

Filter.defaultProps = {
    rootClassName: '',
}

Filter.propTypes = {
    rootClassName: PropTypes.string,
}

export default Filter
