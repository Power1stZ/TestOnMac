import React, {Component} from 'react';
import './Message.css';

var deleteBtnStyle = {
  float:"right"
}

class Message extends Component {
  constructor(props){
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(e){
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();
  }
  render(){
    return (
      <div className="element">
        <div>{this.props.message}</div>
        <button className="button-is-danger"  onClick={this.onClickDelete}  >
        Delete
        </button>
     </div>
    )
  }
}
export default Message