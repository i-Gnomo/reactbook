import React from 'react';
import PropTypes from 'prop-types';

/*无状态组件函数式组件 可以用箭头函数定义 */
const Actions = (props) => {
    return (<div className="Actions">
            <span 
                className="ActionsInfo" 
                tabIndex="0" 
                title="More info" 
                onClick={props.onAction.bind(null,'info')}>&equiv;</span>
            <span 
                className="ActionsEdit" 
                tabIndex="0" 
                title="Edit" 
                onClick={props.onAction.bind(null,'info')}>&#10000;</span>
            <span 
                className="ActionsDelete" 
                tabIndex="0" 
                title="Delete" 
                onClick={props.onAction.bind(null,'info')}>x</span>
        </div>)
}

Actions.propTypes = {
    onAction: PropTypes.func
}

Actions.defaultProps = {
    onAction: ()=>{}
}

export default Actions