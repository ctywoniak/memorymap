import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button
} from 'react-native';
import Field from '../components/Field.js';
import database from '../config/fire.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B7579'
  },
  fieldContainer: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 20
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  textInput: {
    fontSize: 16
  }

});

export default class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      name: '',
      address: '',
      description: '',
      category: '',
      rating: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (text, name) => {
    this.setState({ [name]: text }, () => console.log(this.state));
  }

  handleSubmit = () => {
    //get the length of this.state.markers(prev component)
    //endpoint/locations,   use set function to write to endpoint

    database.ref(`O1lGo3S8LiPus2rlxlRXTIE1gyY2/locations/`)
    .push()
    .set({
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      category: this.state.category,
      rating: this.state.rating
    })
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Field name={'name'} label={'Name'} handleChange={this.handleChange} />
        <Field name={'address'} label={'Address'}  handleChange={this.handleChange} />
        <Field name={'description'} label={'Description'}  handleChange={this.handleChange} />
        <Field name={'category'} label={'Category'}  handleChange={this.handleChange} />
        <Field name={'rating'} label={'Rating'}  handleChange={this.handleChange} />
        <Button title={'Submit'} onPress={this.handleSubmit}/>

      </SafeAreaView>

    );
  }
};

