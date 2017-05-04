import React, { Component } from 'react';

class ToDoAppList extends Component {

    remove(element){
        let value = element.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {

        const styleButton = {
            height: 20,
            width: 30,
            borderRadius: 10,
            position: 'absolute',
            left: 200,
            textAlign: 'center',
            backgroundColor: 'red',
            color: 'white',
        };

        let items = this.props.tasks.map((element, i) => {
            return <li key={i}>
                <span>{element}</span>
                <button href="#" onClick={this.remove.bind(this)}  style={styleButton}>X</button>
            </li>
        })


        const style = {
            listStyle: 'none',
        };

        return (
            <ul style={style}>
                {items}
            </ul>
        );
    }
}

export default ToDoAppList;
