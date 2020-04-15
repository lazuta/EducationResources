// import React from 'react';

// class Test extends React.Component{
//     constructor(props) {
//         super(props);
        
//         this.checkAnswer = this.checkAnswer.bind(this);

//         this.state = {
//             checked: false,
//             counter: 0
//         }
//     }

//     checkAnswer(event) {
//         let count = 0;
//         event.preventDefault();

//         this.props.data.Test.map(function(el, index) {
//             let answers = document.querySelectorAll('.' + el.id);

//             el.variants.map(function(e, i) {
//                 answers.forEach(element => {
//                     if((element.checked && e.flag) &&
//                         e.title == element.value) {
//                         count++;
//                     }
//                 });
//             });

//         });

        
//         this.setState({ 
//             checked: true,
//             counter: count
//         })
//     }

//     render() {
//         let j = 0;

//         let test = {
//             display: this.state.checked ? "none" : "block"
//         }
        
//         let result = {
//             display: this.state.checked ? "block" : "none",
//             color: "white"
//         }
        
//         let total = this.props.data.totalTest;

//         let Test = this.props.data.Test;
//         Test = Test.map(function(el, index) {

//             j++;

//             let variants = el.variants.map(function(e, i) {
//                 return (
//                     <div className = "q-Input">
//                         <div>
//                             <input type = "radio" id = {'id' + j} name = {el.id} className = {el.id} value = {e.title}/>
//                         </div>
//                         <div>
//                             <label for = {'id' + j}> {e.title} </label>
//                         </div>
//                     </div>
//                 );
//             });

//             return (
//                 <div>
//                     <li> <h3 className = "q-question"> { el.title } </h3> </li>
//                     <div className = "variants">
//                         { variants }
//                     </div>
//                 </div>
//             );
//         });

//         return(
//             <div>
//                 <div style = { test }>
//                     <h2 className = "q-Title"> Тест по теме <br/> <i> {this.props.data.testName} </i> </h2>
//                     <div className = "q-container">
//                         <ol type = "1" className = "q-list">
//                             {Test}
//                         </ol>
//                         <input
//                             type = "button"
//                             value = "Завершить выполнение" 
//                             className = "q-Button"
//                             onClick = {this.checkAnswer}
//                         />
//                     </div>
//                 </div>
//                 <div style = { result }>
//                     {this.state.counter} / {total}
//                     <input
//                             type = "button"
//                             value = "Пройти тест еще раз" 
//                             className = "q-Button"
//                             // onClick = {this.checkAnswer} 
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Test;