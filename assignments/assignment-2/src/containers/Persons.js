import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAdd} />
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
        onAdd: () => dispatch({type: actionTypes.ON_ADD}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
