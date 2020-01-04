import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        name: '',
        age: '',
    }

    handleChange = (e, field) => {
        const updatedState = {...this.state};
        updatedState[field] = e.target.value;
        this.setState(updatedState);
    }

    render () {
        return (
            <div>
                <AddPerson 
                    personAdded={() => this.props.onAdd(this.state.name, this.state.age)}
                    name={this.state.name}
                    age={this.state.age}
                    onChange={this.handleChange} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons.persons,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch({type: actionTypes.ON_DELETE, id: id}),
        onAdd: (name, age) => dispatch({
            type: actionTypes.ON_ADD, 
            payload: {
                name: name,
                age: age,
            }
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
