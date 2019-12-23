// import React from 'react';
// // import EventItem from '../../components/EventItem'
// import Tools from '../../components/Tools'
// import Profile from '../../components/Profile'
// import Trending from '../../components/Trending'
// // import List from '../../components/List'
// import eventList from '../../data/index.js'

// const API = 'http://192.168.43.219:5000/api/event/0';
// const DEFAULT_QUERY = '0';

// class Home extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data: []
//         };
//     }

//     componentDidMount(){
//         fetch(eventList)
//             .then( res => res.json())
//             .then( resJson => this.setState({data: resJson.events}))
//             // .then( resJson => console.log(resJson))
//             ;

//         // code buat fetch dari url
//         // fetch('http://192.168.43.219:5000/api/event/')
//         //     .then( res => res.json())
//         //     .then( resJson => this.setState({data: resJson.events}));
//     }

//     render() {
//         return (
//         <div>
//             <div className="my-3 mx-5">
//                 {/* <p>{source.data_2.eventName}wkwk</p> */}
//                 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
//                     <ol className="carousel-indicators">
//                         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                     </ol>
//                     <div className="carousel-inner" style={{height: "13rem"}}>
//                         <div className="carousel-caption d-md-block">
//                             <h1 className="display-4 text-shadow">TAPTIX</h1>
//                         </div>
//                         <div className="carousel-item active">
//                             <img src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=540" className="d-block w-100 img-middle" alt="..."/>
//                         </div>
//                         <div className="carousel-item img-middle">
//                             <img src="https://images.pexels.com/photos/2167139/pexels-photo-2167139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
//                         </div>
//                         <div className="carousel-item img-middle">
//                             <img src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940    " className="d-block w-100" alt="..."/>
//                         </div>
//                         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="sr-only">Previous</span>
//                         </a>
//                         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="sr-only">Next</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="row my-1 mx-5">
//                 <div className="col-lg-3 p-2">
//                     <div className="sticky-top" style={{top:"4.5rem"}}>
//                         <Tools/>
//                     </div>
//                 </div>
//                 <div className="col-lg-6 pt-2">
//                     <div className="mx-auto sticky-top z-front d-block sticky-center">
//                         <form className="row m-0 p-0 rounded-lg border shadow-sm">
//                             <input className="col form-control border-0 rounded-left m-0" type="search" placeholder="Telusuri"/>
//                             <button className="btn btn-light border-0 rounded-right m-0 px-3" type="submit"><i className="fas fa-search"></i></button>
//                         </form>
//                     </div>
//                     <h4 className="m-3">Acara untukmu</h4>
//                     <div className="row m-0">
//                         {/* <List data={eventList} component={EventItem}/> */}
//                     </div>
//                 </div>
//                 <div className="col-lg-3 p-2">
//                     <div className="sticky-top" style={{top:"4.5rem"}}>
//                         <Trending/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// const List = () => {
//     let items = Object.keys(eventList);
//     console.log(eventList);

//     return(
//         <div>
//         {
//             items.map(key => {
//                 let value = eventList[key];
//                 // return <EventItem data={value} component="wkwk"/>
//                 })
//         }
//         </div>
//     )
// }

// export default Home;
