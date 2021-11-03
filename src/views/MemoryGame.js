import React, { useEffect, useState } from "react";
import "../assets/css/memoryGame.css";

function MemoryGame() {
	const [cardArray,setCardArray]=useState([...Array(12).keys()]);
	const [showCardArray,setShowCardArray]=useState([...Array(12).fill(false)]);
	const generatedMemoryAnswer=[1,2,3,4,5,6,1,2,3,4,5,6].sort(() => Math.random() - 0.5);

	const [memoryAnswer,setMemoryAnswer]=useState(generatedMemoryAnswer);

	const [pairAnswer,setPairAnswer]=useState([]);
	const [pairAnswerIndex,setPairAnswerIndex]=useState([]);

	useEffect(()=>{
		if(pairAnswer.length === 2){
			document.querySelectorAll('.memoryCard').forEach(item => item.classList.add('disabledCard'));
			
			if(pairAnswer[0] === pairAnswer[1]){

				let newShowCardArray1=showCardArray;
				newShowCardArray1[pairAnswerIndex[0]]=true;
				newShowCardArray1[pairAnswerIndex[1]]=true;
				setShowCardArray([...newShowCardArray1]);
				setPairAnswer([]);
				setPairAnswerIndex([]);
				document.querySelectorAll('.memoryCard').forEach(item => item.classList.remove('disabledCard'));

			}
			else{
				setTimeout(() => {
					let newShowCardArray2=showCardArray;
					newShowCardArray2[pairAnswerIndex[0]]=false;
					newShowCardArray2[pairAnswerIndex[1]]=false;
					setShowCardArray([...newShowCardArray2]);
					setPairAnswer([]);
					setPairAnswerIndex([]);
					document.querySelectorAll('.memoryCard').forEach(item => item.classList.remove('disabledCard'));

				}, 2000);
			}
		}

	},[pairAnswer])

	useEffect(()=>{
		if(showCardArray.filter(item => item === true).length === 12){
			window.alert('You won');
			setMemoryAnswer([...generatedMemoryAnswer]);
			setShowCardArray([...Array(12).fill(false)]);
			setCardArray([...Array(12).keys()]);
		}
	},[showCardArray])

	function handleShowCard(index){
		if(showCardArray[index] === false){
			let newShowCardArray=showCardArray;
			newShowCardArray[index]=true;
			setShowCardArray([...newShowCardArray]);
			let selectedCardAnswer=memoryAnswer[index];

			if(pairAnswer.length < 2){
				setPairAnswer([...pairAnswer,selectedCardAnswer]);
				setPairAnswerIndex([...pairAnswerIndex,index]);
			}
		}
	}
	
	return (
		<React.Fragment>
			<div>
				<div className="d-flex justify-content-center align-items-center mt-4">
					<div className="card col-lg-5 col-md-6 col-11 rounded shadow-sm">
						<div className="p-3">
							<div className="row">
								{cardArray.map((index)=>{
									return (
										<div className="col-4 px-1 px-sm-2 my-2" key={index}>
											<div className={`p-3 shadow-sm rounded memoryCard ${!showCardArray[index] ? 'hideCard' : ''}`} 
											onClick={()=>handleShowCard(index)}
											>
												{showCardArray[index] && (
												<div className="memoryAnswer display-6">{memoryAnswer[index]}</div>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default MemoryGame;
