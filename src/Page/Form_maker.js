import { uuid } from 'uuidv4'; 
import React, {useState, useEffect} from 'react';
import Question from '../components/Question'
import {Link, useHistory} from 'react-router-dom';
import './Form_maker.css';
import {useDispatch} from 'react-redux';
import {setQuestion} from '../reducers/question';

function App() {
  const history = useHistory();
  const dispatch = useDispatch(); 
  const [list, setList] = useState([])
  const [selectType,setSelectType] = useState('radio');
  const onQuestionTypeChange = (evt) => {
    setSelectType(evt.target.value);
  }

  const addQuestion = (event) => { 
    let defaultQuestionData={}
    switch(selectType) { 
      case "text" : 
        defaultQuestionData = {
          questionType : "text", 
          title : 'default', 
          description : 'default', 
          id : uuid(), 
          textQuestion:'default',
          options: []}
        break;
      
      case "radio" : 
        defaultQuestionData = {
          questionType : "radio", 
          title : 'default', 
          description : 'default', 
          id : uuid(), 
          options: []}
        break;
      
      case "checkbox" : 
        defaultQuestionData = {
          questionType : "checkbox", 
          title : 'default', 
          description : 'default', 
          id : uuid(), 
          options: []}
        break;
    }
    setList(prev => ([...list, defaultQuestionData]));
  }

  const removeQuestion = (searchId) => { // 지우는거는 어디를 지워야 하는지 알아야 
      const index = list.findIndex(el => el.index === searchId)
      const copiedList = [...list]

      copiedList.splice(index, 1)

      setList(copiedList)
  }
  const onClickSubmit = () => {
    alert("제출되었습니다.")
    console.log(list)
    dispatch(setQuestion(list))
    history.push("/QuestionConfirmPage")
  }
  return (
    <div className="Form_maker" >
      <div class="size_title1">Question Form Maker</div>
      <div class='smaller_size'>Choose Type :&nbsp;&nbsp;</div>
      <select className="form-select-form-maker"  onChange={onQuestionTypeChange} value={selectType}>
        <option value={"text"}>Text</option>
        <option value={"radio"}>Radio</option>
        <option value={"checkbox"}>CheckBox</option>
      </select><br/><br/>

      <button class='btn btn-primary' onClick={addQuestion}>Add Question</button>&nbsp;&nbsp;
      <button class='btn btn-primary' onClick={removeQuestion}>Remove Question</button>

      {
        list.map((question,index) => {
          return <Question 
              key={index} 
              question={question} 
              list={list} 
              setList={setList}
            />
        }) 
      }
      <br/><br/>
      <button class='btn btn-primary' onClick={onClickSubmit}>Submit Questions</button>
    </div>
  );
}

export default App;