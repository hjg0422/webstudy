import Counter from './counter/counter'

const App = connect(mapStateToProps ,mapDispatchProps)(Counter);
export default App;
const mapStateToProps = state =>{
	return {
		value : state
	}
}
const mapDispatchProps	= state =>{
	return	{
		onAdd: () => {
			store.dispatch({
				type:'INCREMENT'
			});
		},
		onDec:()=>{
			store.dispatch	({
				type:'DECREMENT'
			});
		}
	}
}