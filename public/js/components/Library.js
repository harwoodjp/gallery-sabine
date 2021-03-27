import React from "react"
import styled from 'styled-components'

import data from "../../library.json"

const Wrapper = styled.div`
  // background: #efffe3;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 1.2;   
  padding: 1em;
  overflow: hidden;
  width: 100%;
  @media (max-width: 1270px) {
    flex-direction: column;
    padding: .5em;
  } 
`

const Book = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30em;
  margin-right: 1em;
  padding: 1em;
  text-align: center;
  img {
    width: 70%;
    margin: 0 auto;
  }
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
				{data.map((data, i) => { 
          return <Book key={i}>
            <img src={data.image}/>
            <span><i>{data.title}</i></span>
            <span>{data.year}</span>
            <span>{data.author}</span>
            <a href={data.link}>Read</a>
          </Book>
        })}
			</Wrapper>
    );
  }
}

export default Library