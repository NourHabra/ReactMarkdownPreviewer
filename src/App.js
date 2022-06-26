import "./App.css";
import React from "react";
import { marked } from "marked";

marked.use({
	breaks: true,
});

const initMarkup = `
# Hello World!
## I am Nour Habra and this is my React Markdown Previewer.

[Cute Cat](https://www.youtube.com/watch?v=dQw4w9WgXcQ) 

\`const veryCoolProject = true;\`

I also created this autopilot for cars:
\`\`\`
if (aboutToCrash()){
	dont();
}
\`\`\`
### Things I'd never do:
- give you up
> never gonna give you up.
> -Rick Astley

![Cute Cat](https://i.pinimg.com/564x/c5/8a/d4/c58ad46c9e1a1d3272ab6eb4b55dc06f.jpg)
**Thanks for visiting**
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markup: initMarkup,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState((state) => ({ markup: event.target.value }));
	}

	render() {
		return (
			<div className="App">
				{/* <div className="header">
					<p>pre-markdown</p>
				</div> */}
				<div className="editors">
					<div className="left">
						<div className="iconbar">
							<p>Editor</p>
						</div>
						<textarea
							type="textbox"
							onChange={this.handleChange}
							className="premarkdown"
							id="editor"
						>
							{this.state.markup}
						</textarea>
					</div>
					<div
						className="right"
						id="preview"
						dangerouslySetInnerHTML={{
							__html: marked.parse(this.state.markup),
						}}
					></div>
				</div>
			</div>
		);
	}
}

export default App;
