import React from 'react';

const style = {
    width: '60%',
    margin: '20px auto',
    padding: '10px',
    backgroundColor: '#ccc',
    fontFamily: 'sans-serif',
    border: '1px solid #eee',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.2)'
};

const userOutput = (props) => {
    return (
        <div style={style}>
            <p>{props.username}</p>
            <p>Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. My placeholder text, I think, is going to end up being very good with women.</p>
            <p>This placeholder text is gonna be HUGE. My text is long and beautiful, as, it has been well documented, are various other parts of my website.</p>
        </div>
    );
};

export default userOutput;