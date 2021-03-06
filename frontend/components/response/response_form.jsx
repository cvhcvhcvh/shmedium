import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ResponseIndexItem from './response_index_item';

class ResponseForm extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.response

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    const ali = Object.assign({}, this.state, {story_id: this.props.story.id})
    this.props.createResponse(ali)
    this.setState({
      body: "", 
    })
    // .then((res) => this.props.history.push(`/response/${res.story.id}`))
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    })
  }

  render(){
    
    return(
      <> 
        <br/>
        <div className="response-form">
          
          {this.props.currentUser ? 
            <form onSubmit={this.handleSubmit} action="">
              <textarea placeholder="what are your thoughts?" className="textarea" onChange={this.updateBody} value={this.state.body}/>
                <input className="submit-button" type="submit" value="Respond" />
                
            </form>
          : 
            <button className="login-to-post" onClick={() => dispatch(openModal('signup'))}>
                            Login to Respond
            </button>
          }
        <div>
          
        </div>
        </div>
     
      </>
    )
  }
}

export default ResponseForm

