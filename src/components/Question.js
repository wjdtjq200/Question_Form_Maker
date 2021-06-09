import '../Page/Form_maker.css';

const Question = ({question, list, setList, removeQuestion}) => {
    const common = () => {
        const onChangeTitle = (evt) => {
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
    
            copiedQuestion.title = evt.target.value;
    
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 
    
            setList(copiedList)
        }
    
        const onChangeDescription = (evt) => {
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
    
            copiedQuestion.description = evt.target.value;
    
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 
    
            setList(copiedList)
        }

      return <>
        <br/><hr/>
        <input class='form-control-Title'placeholder="Default Title" onChange={evt=>onChangeTitle(evt)}/><br/>
        <input class='form-control-Description' placeholder="Initial value" onChange={evt=>onChangeDescription(evt)}/>
      </>
    }



    const renderUserInput = () => { 
  
        const addRadioOption = () => { 
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
            const options = copiedQuestion.options

            options.push({title : ""})  
            copiedQuestion.options = options 
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 

            setList(copiedList) //set
        }

        const addCheckOption = () => { 
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
            const options = copiedQuestion.options

            options.push({title : ""})  
            copiedQuestion.options = options 
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 

            setList(copiedList) //set
        }

        const deleteOption = (_index) => { 
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
            const options = copiedQuestion.options

            options.splice(_index,1)  

            copiedQuestion.options = options 
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 
            console.log(copiedQuestion)
            setList(copiedList)
        }

        const onChange = (evt,_index) => { 
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
            const options = copiedQuestion.options

            options[_index].title=evt.target.value;

            copiedQuestion.options = options 
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 
            
            setList(copiedList)
        }

        const onChangeTextQuestion = (evt) => {
            const index = list.findIndex(_question => _question.id === question.id)
            const copiedQuestion = {...list[index]}
    
            copiedQuestion.textQuestion = evt.target.value;
    
            const copiedList = [...list] 
            copiedList[index] = copiedQuestion 
    
            setList(copiedList)
            console.log(list)
        }

        if(question.questionType==="text"){
            return <><br/>        
                <input class='form-control-Question' placeholder="Please input your question" onChange={evt=>onChangeTextQuestion(evt)}/>
            </>

        }else if(question.questionType==="radio"){
            return <>
                <button class="btn-secondary" onClick={e=>addRadioOption(e)}>+</button> 
                {question.options.map ((option, index)=> { 
                    return <div>
                        <input class="form-radio-input"type="radio"></input>
                        <input class='form-control-Question' value={option.title} placeholder="Please input your question" onChange={e=>onChange(e,index) }></input>
                        <button class="btn-secondary"placeholer="about options"onClick={e=>deleteOption(index)}>-</button>
                    </div>
                })}        
            </>

        }else if(question.questionType==="checkbox"){
            return <>
                <button class="btn-secondary" onClick={e=>addCheckOption(e)}>+</button>
                {question.options.map ((option, index)=> { 
                    return <div>
                        <input class="form-check-input" type="checkbox" ></input>
                        <input class='form-control-Question' value={option.title} placeholder="Please input your question" onChange={e=>onChange(e,index)}></input>
                        <button class="btn-secondary" onClick={e=>deleteOption(index)}>-</button>
                    </div>
                })}
            </>

        }else{
            return <></>
        }
    }
  
    return <div>
    {common()}
    {renderUserInput()}
    </div>
    }

export default Question;
