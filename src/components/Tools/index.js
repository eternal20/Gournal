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
                <div className="tools-component">
                    <div className="card shadow-sm rounded-lg tools-card">
                        <div class="card tools-item"><i class="fas fa-map-marked-alt mx-2"></i>Lokasi <a className="tools-link" data-toggle="collapse" href="#toolsLocation" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.location}</a>
                            <div class="collapse" id="toolsLocation">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="card tools-item"><i class="fas fa-money-bill-wave mx-2"></i>Harga <a className="tools-link" data-toggle="collapse" href="#toolsPrice" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.price}</a>
                            <div class="collapse" id="toolsPrice">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="card tools-item"><i class="fas fa-filter mx-2"></i>Filter <a className="tools-link" data-toggle="collapse" href="#toolsFilter" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.filter }</a>
                            <div class="collapse" id="toolsFilter">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="card tools-item"><i class="fas fa-sort mx-2"></i>Urutan<a className="tools-link" data-toggle="collapse" href="#toolsRating" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.sort}</a>
                            <div class="collapse" id="toolsRating">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="card tools-item"><i class="fas fa-layer-group mx-2"></i>Kategori<a className="tools-link" data-toggle="collapse" href="#toolsCategory" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.category}</a>
                            <div class="collapse" id="toolsCategory">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="card tools-item"><i class="fas fa-calendar-alt mx-2"></i>Waktu<a className="tools-link" data-toggle="collapse" href="#toolsTime" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.time}</a>
                            <div class="collapse" id="toolsTime">
                                <div class="card-body">
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