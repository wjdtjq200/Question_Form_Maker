import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

function QuestionConfirmPage () {
  const questionData = useSelector((state) => state.question.questionData);
  const history = useHistory();


  return <div class='Form_maker_Confirm'>
          <div class="size2">Please, Check out your question.</div>

            {questionData.map(function(element, idx){
              if (element.questionType !== 'text') {
                return (
                  <div id={idx}><br/>
                    Title : {element.title}<br/>
                    Description : {element.description}<br/>
                    Options : 
                    {element.options.map(function(element,index){
                      return(<div class="options">{index+1} : {element.title}</div>)})
                    } <hr/>
                  </div>
                )
              }else if(element.questionType === 'text'){ 
                return (
                  <div id={idx}><br/>
                    Title : {element.title}<br/>
                    Description : {element.description}<br/>
                    Question : {element.textQuestion} <hr/>
                  </div>
                )
              }
            })}
          <button class="btn btn-primary" onClick={(e) => {history.push("/");}}>Home</button><hr/>
  </div>
}

export default QuestionConfirmPage