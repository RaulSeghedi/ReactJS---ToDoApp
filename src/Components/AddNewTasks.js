import React, { Component } from 'react';

class AddNewTasks extends Component {

    justSubmitted(event){
        // console.log('testing');
        event.preventDefault();
        let input = event.target.querySelector('input');
        let value = input.value;
        input.value = '';
        this.props.updatedList(value);
    }

    render() {
        return (
            <form onSubmit={this.justSubmitted.bind(this)}>
                <input type="text" placeholder="add text then press 'Enter'"/>
            </form>
        );
    }
}

export default AddNewTasks;
