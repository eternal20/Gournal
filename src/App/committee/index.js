import React from 'react';
// import EventItem from '../../components/EventItem'
import Tools from '../../components/Tools'
import Profile from '../../components/Profile'
import eventList from '../../data/index.js'

class Committee extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        fetch(eventList)
            .then( res => res.json())
            .then( resJson => this.setState({data: resJson.events}))
            // .then( resJson => console.log(resJson))
            ;

        // code buat fetch dari url
        // fetch('http://192.168.43.219:5000/api/event/')
        //     .then( res => res.json())
        //     .then( resJson => this.setState({data: resJson.events}));
    }

    render() {
        return (
        <div>
            <div className="">
                <div className="row my-3 mx-5">
                    <div className="col-lg-3 p-2">
                        <div className="sticky-top" style={{top:"4.5rem"}}>
                            <Tools/>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-2">
                        <div className="rounded-lg event-poster overflow-hidden shadow-sm w-100 mb-3" style={{height: "13rem"}}>
                            <div className="bg-light">
                                <img src={this.state.committeeHeader} className="w-100" />
                            </div>
                        </div>
                        <div class="mx-auto sticky-top shadow-sm z-front d-block sticky-center">
                            <form class="row m-0 p-0">
                                <input class="col-10 form-control rounded-left m-0" type="search" placeholder={"Telusuri " + this.state.committee}/>
                                <button class="col-2 btn btn-light rounded-right border m-0 p-1" type="submit">O</button>
                            </form>
                        </div>
                        <h2 className="m-3">Acara yang akan datang</h2>
                        <div className="row m-0">
                            <ListEvent data={eventList}/>
                        </div>
                        <h2 className="m-3">Acara yang lalu</h2>
                        <div className="row m-0">
                            <ListEvent data={eventList}/>
                        </div>
                    </div>
                    <div className="col-lg-3 p-2">
                        <div className="sticky-top" style={{top:"4.5rem"}}>
                            <Profile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const ListEvent = ({component},{data}) => {
    let items = Object.keys(eventList);
    console.log(eventList);

    return(
        <div>
        {
            items.map(key => {
                let value = eventList[key];
                // return <EventItem data={value}/>
                })
        }
        </div>
    )
}

export default Committee;
