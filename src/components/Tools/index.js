import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
// import { tsConstructorType } from '@babel/types';

class Tools extends React.Component {
    constructor() {
        super();
        this.state = {
            location: "Mana saja",
            price: "Berapa saja",
            filter: "Tidak ada",
            sort: "Paling relevan",
            category: "Umum",
            time: "Kapan saja   "
        };
    }
    render() {
        return (
            <div className="sticky-top pt-2" style={{top: "3.5rem"}}>
                <div className="card shadow-sm rounded-lg tools-card">
                    <div className="card tools-item"><i className="fas fa-filter mx-2"></i>Filter <a className="tools-link" data-toggle="collapse" href="#toolsFilter" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.filter }</a>
                        <div className="collapse" id="toolsFilter">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                    <div className="card tools-item"><i className="fas fa-sort mx-2"></i>Urutan<a className="tools-link" data-toggle="collapse" href="#toolsRating" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.sort}</a>
                        <div className="collapse" id="toolsRating">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                    <div className="card tools-item"><i className="fas fa-layer-group mx-2"></i>Kategori<a className="tools-link" data-toggle="collapse" href="#toolsCategory" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.category}</a>
                        <div className="collapse" id="toolsCategory">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tools;