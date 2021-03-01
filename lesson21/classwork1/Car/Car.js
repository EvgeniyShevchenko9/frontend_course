import './Car.css'

function Car(props){
	return (
			<div className="auto__item">
				<h3>{props.name}</h3>
				<p>Year: <span>{props.year}</span></p>
			</div>
		)
}

export default Car;