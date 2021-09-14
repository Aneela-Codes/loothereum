import {React,useState} from 'react'

const AccordianCard = ({question, answer}) => {
  const [show, setShow] = useState(false);

    return (
        <div className="card" >
        <div className="question_heading">
          {" "}
          <h3>{question}</h3>{" "}
          <button onClick={() => setShow(!show)}>

          { show?   <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>
          } 
          </button>{" "}
        </div>
        
        {
            show && <p>{answer}</p>
        }
    
        
      </div>
    )
}

export default AccordianCard
