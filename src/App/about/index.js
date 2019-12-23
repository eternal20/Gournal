import React from 'react';

class About extends React.Component {
    constructor() {
        super();
        this.state = {title: "Landing"};
    }
    render() {
        return(
            <div>
                <h1 className="display-3 font-weight-bold">Ini halaman about</h1>
            </div>
        );
    }
}

export default About;
