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
	margin-bottom: 1em;	
	@media (max-width: 1270px) {
		width: 100%;
		margin-left: .5em;
	}			
	@media (max-width: 875px) {
		width: 100%;
		margin-left: 0;
		text-align: center;
	}			
`
const ImagePanel = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	@media (max-width: 1270px) {
		width: 100%;
	}				
	@media (max-width: 875px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
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

const Image = styled.img`
	align-self: center;
	width: 90%;
	@media (max-width: 1270px) {
		width: 90%;
	}	
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
	@media (max-width: 1270px) {
		width: 50%;
		position: relative:
		left: 1em;
		margin-left:-1em;
	}	
	@media (max-width: 875px) {
		width: 70%;
		margin-left: 0;
	}		
`
const SliderText = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;		
	justify-content: space-between;
	@media (max-width: 1270px) {
		display: none;
	}		
`
const SliderTextMobile = styled.div`
	display: none;
	@media (max-width: 1270px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 2em;
	}
	@media (max-width: 875px) {
		display: none;
	}	
`

const ExhibitionDetail = styled.div`
	display: flex;
	flex-direction: column;
`

const ExhibitionDetailMobile = styled.div`
	display: none;
	@media (max-width: 875px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-left: .5em;
		margin-bottom: 1em;		
	}	
`
const ExampleDetail = styled.div`
	display: flex;
	flex-direction: column;
`
const ExampleDetailMobile = styled.div`
	display: none;
	@media (max-width: 875px) {
		display: flex;
		flex-direction: column;
		margin-left: .5em;
		margin-top: 1em;
	}	
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
					<span>Chicago, IL</span>
					<span>Th - Sun / 11 - 6</span>
					<a href="">mail@gallerysabine.com</a>
				</AddressPanel>
				<ImagePanel>
					<ExhibitionDetailMobile>
						<span><i>{currentExhibition.title}</i></span>
						<span>{currentExhibition.date}</span>
					</ExhibitionDetailMobile>				
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
						<ExampleDetailMobile>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].artist}</span>
							<span><i>{currentExhibition.examples[this.state.currentExampleIndex].title}</i></span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].year}</span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].dimensions}</span>
						</ExampleDetailMobile>					
					<SliderTextMobile>
						<ExhibitionDetail>
							<span><i>{currentExhibition.title}</i></span>
							<span>{currentExhibition.date}</span>
						</ExhibitionDetail>
						<ExampleDetail>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].artist}</span>
							<span><i>{currentExhibition.examples[this.state.currentExampleIndex].title}</i></span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].year}</span>
							<span>{currentExhibition.examples[this.state.currentExampleIndex].dimensions}</span>
						</ExampleDetail>
					</SliderTextMobile>
				</ImagePanel>
				<Panel>
					<SliderText>
						<ExhibitionDetail>
							<span><i>{currentExhibition.title}</i></span>
							<span>{currentExhibition.date}</span>
						</ExhibitionDetail>
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