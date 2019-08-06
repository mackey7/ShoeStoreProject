import React from 'react'

interface Iprops {
    DotTitle: string;
    DotDesc: string;
}

const Dot: React.SFC<Iprops> = ({ DotTitle, DotDesc }) => {
    return (
        <div>
            <div>
                <span></span>
            </div>
            <div>
                <p>{DotTitle}</p>
                <p>{DotDesc}</p>
            </div>
        </div>
    )
}

export default Dot