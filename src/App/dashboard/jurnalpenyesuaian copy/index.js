import React from 'react';
import 'moment-timezone';
// import moment from 'moment';

class JurnalPenyesuaian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: ['a', 'b', 'c'],
            umur: [12, 13, 14]
        };
    }
    onClearArray = () => {
        this.setState({ list: [] });
    };

    onResetArray = () => {
        this.setState({ list: ['a', 'b', 'c'] });
    };

    onChangeValue = event => {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    };
    
    onAddItem = () => {
        this.setState(state => {
            // const list = state.list.concat(state.value);
            const list = [...state.list, state.value];
            return {
                list,
                value: '',
            };
        });
        console.log(this.state.list);
    };

    onRemoveItem = i => {
        this.setState(state => {
            const umur = state.umur.filter((item, j) => i !== j);
            return {
                umur,
            };
        });
    };

    // onUpdateItems = () => {
    //     this.setState(state => {
    //         const umur = state.umur.map(item => item + 1);
    //         return {
    //             umur,
    //         };
    //     });
    // };

    onUpdateItem = i => {
        this.setState(
            state => {
                const umur = state.umur.map(
                    (item, j) => {
                        if (j === i) {
                            return item + 1;
                        } else {
                            return item;
                        }
                    }
                );
                return {
                    umur,
                };
            }
        );
        console.log(this.state.umur[2]);
    };


    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                {/* <ul>
                    {this.state.list.map(item => (<li key={item}>a letter {item}</li>) ) }
                </ul> */}
                <ul>
                    {this.state.umur.map(
                        (item,index) => (
                            <li key={item}>
                                umur {item}
                                <button type="button" onClick={() => this.onUpdateItem(index)}>
                                    Make me one year older
                                </button>
                                <button type="button" onClick={() => this.onRemoveItem(index)} >
                                    Remove
                                </button>
                            </li>
                            ) 
                        ) 
                    }
                </ul>
                <button
                    type="button"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                    >
                    Add
                </button>
                <button type="button" onClick={this.onClearArray}>
                    Clear Array
                </button>
                <button type="button" onClick={this.onResetArray}>
                    Reset Array
                </button>
                
                
            </div>
        );
    }
  }
  

export default JurnalPenyesuaian;