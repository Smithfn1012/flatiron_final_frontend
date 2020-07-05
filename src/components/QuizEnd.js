import React, { Component } from 'react';
import Button from './Button'

class QuizEnd extends Component {

  clickHandler = () => {
     window.location.reload()
   }


  render() {
    const { score } = this.props
    return (
      <div className='mha container--q'>
        <h4 className="quiz-score">You scored a {score}/8!</h4>
        <p>{score > 5 ? 'Good job, you know your animals!' : 'Study up and try again!'}</p>
        <Button classes={`f jcb cw`} clickHandle={() => this.clickHandler()}>
          Try Again
        </Button>
      </div>
    )
  }
}
export default QuizEnd;