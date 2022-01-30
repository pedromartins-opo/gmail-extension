import React from 'react';
import axios from 'axios';

export default class TemplateList extends React.Component {
    state = {
        isLoading: true,
        templates: []
    }

    componentDidMount() {
        axios.get('/api')
        .then(res => {
            const templates = res.data;
            this.setState({ 
                templates: templates, 
                isLoading: false 
            });
        })
    }

    handleTemplateClick(message) {
        window.top.postMessage(message, '*');
    }

    render() {
        let content;
        if (this.state.isLoading) {
            content = <span>Loading...</span>;
          } else {
            content = 
                <ul className='templateList'>
                    {
                        this.state.templates.map(template =>
                            <li onClick={() => this.handleTemplateClick(template.message)} id={"template" + template.id} key={template.id}>{template.title}</li>
                        )
                    }
                </ul>;
            }
        return (
            <div className='wrapper'>{content}</div>
        )
    }
}