import React, { Component } from 'react';
import { Field, formValues, reduxForm } from 'redux-form';




class StreamForm extends Component{

    renderError({touched, error}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // input destructu de formProps, label recup en props de Field
    renderInput = ({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error' : ""}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input}/> {/* formProps.input ou {input} => Recupere tte les propriete de input et les donne en props a l element input */}  
                {this.renderError(meta)}
            </div>
            
        ) 
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className=" ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Descriptionn"/>
                <button className="ui button primary">Submit</button>
            </form> 
       )
    };
};

const validate = formValues =>{
    const errors = {};
    
    if(!formValues.title){
        errors.title = "You must enter a title";
    }

    if(!formValues.description){
        errors.description = "You must enter a description";
    }

    return errors;
}

export default reduxForm({
    form: 'formStream',
    validate
})(StreamForm);
