//class Car extends React.Component{
//	render(props) {
//		return (
//			<div className="auto__item">
//				<h3>{props.name}</h3>
//				<p>Year: <span>2020</span></p>
//			</div>
//		)
//	}
//}

function Car(props){
	return (
			<div className="auto__item">
				<h3>{props.name}</h3>
				<p>Year: <span>{props.year}</span></p>
			</div>
		)
}