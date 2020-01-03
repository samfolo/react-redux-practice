import React from 'react';
import './AddPerson.css';

class AddPerson extends React.Component {
    render() {
        return (
            <div className='AddPerson'>
                <input type='text' placeholder='Name' onChange={(e) => this.props.onChange(e, 'name')} value={this.props.name} />
                <input type='number' placeholder='Age' onChange={(e) => this.props.onChange(e, 'age')} value={this.props.age} />
                <button onClick={this.props.personAdded}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;