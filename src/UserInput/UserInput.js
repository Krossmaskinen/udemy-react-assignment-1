import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input onInput={props.input} value={props.username} type="text"/>
        </div>
    );
};

export default userInput;