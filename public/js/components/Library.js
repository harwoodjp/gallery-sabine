import React from "react"
import styled from 'styled-components'

import data from "../../library.json"

const Wrapper = styled.div`
  color: red;
`

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
	componentDidMount() {
    console.log(data)
	}

  render() {
    return (
			<Wrapper>
				{data.forEach(d => "foo")}
			</Wrapper>
    );
  }
}

export default Library