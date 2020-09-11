import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

class App extends React.Component
{
	render()
	{
		return <Router>
					<Header/>
					<Switch>
						<Route exact  path="/" component={Home} />
						<Route exact  path="/contact" component={Contact} />
						<Route exact  path="/about" component={About} />
						<Route exact  path="/services" component={Services} />
						<Route exact  path="/services/:tech" component={Single} />
						<Route  component={Errorpage} />
					</Switch>
			 </Router>
	}
}

export default App;


let Home=()=><h1>home page</h1>
let Contact=()=><h1>Contact page</h1>
let About=()=><h1>About page</h1>
let Single=(props)=><h1>Single page {props.match.params.tech}</h1>
let Errorpage=()=><h1>page u are looking for is not found</h1>

let Header=function(){
	return <ol>
			<li><Link to="/">home</Link></li>
			<li><Link to="/about">about</Link></li>
			<li><Link to="/contact">contact</Link></li>
			<li><Link to="/services">services</Link></li>
	</ol>
}
let Services=(props)=><ol>
		<li>
			<h1>welcome to our services</h1>
		</li>
		<li><Link to="/services/html">html</Link></li>
		<li><Link to="/services/css">css</Link></li>
		<li><Link to="/services/javascript">javascript</Link></li>
		<li><Link to="/services/react">react</Link></li>
		<li><Link to="/services/redux">redux</Link></li>
		<li><Link to="/services/routing">routing</Link></li>
		<li><Link to="/services/state">state</Link></li>
		<li><Link to="/services/props">props</Link></li>
		<li>
			<button onClick={e=>props.history.push('/about')}>go to about page</button>
		</li>
		<li><Link to="/failsafe">erro page is: failsafe</Link></li>
		<li><Link to="/start">erro page is: start</Link></li>
		<li><Link to="/othe">erro page is: othe</Link></li>
		<li><Link to="/new">erro page is: new</Link></li>
		<li><Link to="/extra">erro page is: extra</Link></li>
		<li><Link to="/hello">erro page is: hello</Link></li>
		<li><Link to="/world">erro page is: world</Link></li>

</ol>