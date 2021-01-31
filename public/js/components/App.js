import React from "react"
import styled from 'styled-components'

import data from "../../data.json"

const Links = styled.div`
	display: flex;
	flex-direction: row;
	a {
		margin-right: .5em;
	}
`
const Panel = styled.div`
	display: flex;
	flex-direction: column;
`
const AddressPanel = styled.div`
	display: flex;
	flex-direction: column;
	width: 15%;
`
const ImagePanel = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`
const Wrapper = styled.div`
	// background: #efffe3;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	line-height: 1.2;		
	padding: 1em;
	overflow: hidden;
	width: 100%;
`

const Image = styled.img`
		align-self: center;
		width: 90%;
`
const Previous = styled.div`
	align-self: center;
	cursor: pointer;
	padding: 1em;	
`
const Next = styled.div`
	align-self: center;
	cursor: pointer;
	padding: 1em;
`

const Slider = styled.div`
	display: flex;
	flex-direction: row;
`
const SliderText = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;		
	justify-content: space-between;
`

const ExhibitionDetail = styled.div`
	display: flex;
	flex-direction: column;
`
const ExampleDetail = styled.div`
	display: flex;
	flex-direction: column;
`

const currentExhibition = data[0]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentExampleIndex: 0 }
  }
	componentDidMount() {
		console.log(data)
	}
	
	incrementExampleIndex() {
		this.setState({ currentExampleIndex: this.state.currentExampleIndex + 1 })
	}
	decrementExampleIndex() {
		this.setState({ currentExampleIndex: this.state.currentExampleIndex - 1 })
	}

  render() {
    return (
			<Wrapper>
				<AddressPanel>
					<span>Gallery Sabine</span>
					<span>1002 W 18th St</span>
					<span>Th - Sun / 11 - 6</span>
					<a href="">mail@gallerysabine.com</a>
				</AddressPanel>
				<ImagePanel>
					<Slider>
						{this.state.currentExampleIndex != 0 &&
							<Previous onClick={this.decrementExampleIndex.bind(this)}>{"<"}</Previous>}
						{this.state.currentExampleIndex == 0 &&
							<Previous>&nbsp;</Previous>}
						<Image src={currentExhibition.examples[this.state.currentExampleIndex].image}></Image>
						{this.state.currentExampleIndex != currentExhibition.examples.length - 1 &&
							<Next onClick={this.incrementExampleIndex.bind(this)}>{">"}</Next>}
						{this.state.currentExampleIndex == currentExhibition.examples.length - 1 &&
							<Next>&nbsp;</Next>}							
					</Slider>
				</ImagePanel>
				<Panel>
					<SliderText>
						<ExhibitionDetail>
							<span><i>{currentExhibition.title}</i></span>
							<span>{currentExhibition.date}</span>
{/*							<br/>
							<span>Featuring: Penelope Rosemont, Eve Garrison,</span>
							<span>Richard Koppe, Andrés de la Riva, Paris Bezanis,</span>
							<span>Megan Leach, Steven Cline</span>
*/}						</ExhibitionDetail>
						<ExampleDetail>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].artist}</span>
							<span><i>{currentExhibition.examples[this.state.currentExampleIndex].title}</i></span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].year}</span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].dimensions}</span>
						</ExampleDetail>
					</SliderText>
				</Panel>
			</Wrapper>
    );
  }
}

export default App