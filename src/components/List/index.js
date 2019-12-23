import React from 'react';

class List extends React.Component{
    
    constructor() {
        super();
        this.state = {
            data: []
        };
    }


    static getDerivedStateFromProps(props, state) {
        console.log(props.data);
        console.log(props.component);
        return {data: props.component}


    }

    render(){
        return(
            core()
        )
    }
}


const core = (data) => {
    let items = Object.keys(eventList);
    console.log(eventList);

    return(
        <div>
        {
            items.map(key => {
                let value = eventList[key];
                return <EventItem data={value} component="wkwk"/>
                })
        }
        </div>
    )
}

export default List;