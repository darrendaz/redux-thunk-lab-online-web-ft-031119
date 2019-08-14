import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map((cat, index) => <img key={index} src={cat.url} />)}
      </div>
    )
  }
}
