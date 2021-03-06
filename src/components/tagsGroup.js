import React, {Component} from 'react';
import { Tag, Input, Tooltip, Button } from 'antd';
import {connect} from "react-redux";
import {
  addTag,
  removeTag
} from '../actions/index';

class EditableTagGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: '',
    };
  }

  componentWillMount(){
    if(this.props.article.tags){
      console.log('tags: ', this.props.article.tags);
      this.setState({
        tags: this.props.article.tags
      });
    }
  }

  componentWillReceiveProps(props){
    console.log('this.is default tags: ', props);
    this.setState({
      tags: props.article.tags || []
    })
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.props.dispatch(removeTag(removedTag));
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });

    //redux
    this.props.dispatch(addTag(inputValue));
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        { tags && tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={index} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
      </div>
    );
  }
}

function select(store) {
  return {
    article: store.article.article,
  }
}
export default connect(select)(EditableTagGroup);
