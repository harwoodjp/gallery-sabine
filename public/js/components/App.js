import React from "react"
import styled from 'styled-components'

import data from "../../data.json"

const Wrapper = styled.div`
  color: red;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentExampleIndex: 0 }
  }
	componentDidMount() {
	}

  render() {
    return (
			<Wrapper>
				foo
			</Wrapper>
    );
  }
}

export default App