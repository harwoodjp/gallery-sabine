import React from "react"
import styled from 'styled-components'

import data from "../../library.json"

const AddressPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-bottom: 1em; 
  @media (max-width: 1270px) {
    width: 100%;
    margin-left: 2em;
    text-align: center;
    margin-top: .5em;
    margin-bottom: 2em;
  }     
  @media (max-width: 875px) {
    width: 100%;
    margin-bottom: 1em;
    margin-left: 0;
  }     
`

const Wrapper = styled.div`
  // background: #efffe3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.2;   
  padding: 1em;
  overflow: hidden;
  width: 95%;
  @media (max-width: 1270px) {
    flex-direction: column;
    padding: .5em;
  } 
`

const Book = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  margin-right: 1em;
  padding: 1em;
  img {
    width: 70%;
    margin: 1em;
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
      <AddressPanel>
        <span>Gallery Sabine</span>
        <span>1002 W 18th St</span>
        <span>Chicago, IL</span>
        <span>Th - Sun / 11 - 6</span>
        <a href="">mail@gallerysabine.com</a>
        <div style={{display: "flex"}}>
            <a style={{color: "#81a7e3"}} href="/">Exhibition</a>
        </div>
      </AddressPanel>      
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