import React from 'react';

export default class AddOption extends React.Component {
    
    state = {
        error: undefined
    };    

    handleAppOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.add.value.trim();
        
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {            
            e.target.elements.add.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAppOption}>
                    <input className="add-option__input" type="text" name="add" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}