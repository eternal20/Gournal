import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
// import { tsConstructorType } from '@babel/types';

class Trending extends React.Component {
    constructor() {
        super();
        this.state = {
            committee: "Nama Akun",
            committeeId: "idakun",
            avaSource: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg"
        };
    }
    render() {
        return (
            <div className="">
                <h4>Trending</h4>
                <div className="card shadow-sm rounded-lg mb-2">
                    <div className="p-3">
                        <div className="m-0 w-100">
                            <span className="">Sebuah acara</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Trending;