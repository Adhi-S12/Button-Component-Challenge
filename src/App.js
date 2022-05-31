import Button from './components/Button';
import './App.scss';

function App() {
	return (
		<main className="wrapper">
			<div className="row">
				<h1 className="title">Buttons</h1>
			</div>
			{/* Row1 */}
			<div className="row">
				<Button title="<Button />" />
				<Button title={`&:hover, &:focus`} titleColor="#828282" />
			</div>
			{/* Row 2 */}
			<div className="row">
				<Button variant="outline" title={`<Button variant=”outline”`} />
				<Button variant="outline" title={`&:hover, &:focus`} titleColor="#828282" />
			</div>
			{/* Row 3 */}
			<div className="row">
				<Button variant="text" title={`<Button variant=text`} />
				<Button variant="text" title={`&:hover, &:focus`} titleColor="#828282" />
			</div>
			{/* Row 4 */}
			<div className="row">
				<Button title={`<Button disableShadow />`} variant="outline" disableShadow color="primary" />
			</div>
			{/* Row 5 */}
			<div className="row">
				<Button title={`<Button disabled />`} disabled value="Disabled" />
				<Button
					title={`<Button variant=”text” disabled />`}
					variant="text"
					titleColor="#828282"
					disabled
					value="Disabled"
				/>
			</div>
			{/* Row 6 */}
			<div className="row">
				<Button title={`<Button startIcon=”local_grocery_store” />`} startIcon="local_grocery_store" color="primary" />
				<Button title={`<Button endIcon=”local_grocery_store” />`} endIcon="local_grocery_store" color="primary" />
			</div>
			{/* Row 7 */}
			<div className="row">
				<Button title={`<Button size=”sm” />`} color="primary" />
				<Button title={`<Button size=”md” />`} size="md" color="primary" />
				<Button title={`<Button size=”lg” />`} size="lg" color="primary" />
			</div>
			{/* Row 8 */}
			<div className="row">
				<Button title={`<Button color=”default” />`} />
				<Button title={`<Button color=”primary” />`} color="primary" />
				<Button title={`<Button color=”secondary” />`} color="secondary" />
				<Button title={`<Button color=”danger” />`} color="danger" />
			</div>
			{/* Row 9 */}
			<div className="row">
				<Button title={`&:hover, &:focus`} titleColor="#828282" />
				<Button color="primary" />
				<Button color="secondary" />
				<Button color="danger" />
			</div>
		</main>
	);
}

export default App;
