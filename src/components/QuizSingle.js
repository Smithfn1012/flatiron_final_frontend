import React, { Component } from 'react';
import cx from 'classnames';
import Button from './Button';
import SelectableAnswer from './SelectableAnswer'

class QuizSingle extends Component {

  state = {
    selected: null,
    choice: false,
    disabled: false,
    answerShow: false,
    hiding: false
  }

  handleSelected = (e) => {
    if (this.state.disabled === false) {
      this.setState({
        selected: e,
        disabled: true
      })
      this.setState({
        hiding:true
      })
      setTimeout(()=> {
        this.setState({
          answerShow: true
        })
      }, 700)
      setTimeout(()=> {
        this.setState({
          choice: true,
          hiding: false
        })
      }, 500)
    }
  }

  handleNext = () => {
    return setTimeout(()=>{
      if (this.state.selected){
        return this.props.pushAnswer(this.props.next())
      } else {
        return this.props.next()
      }
    }, 100)
  }

  render(){
    const { selected, choice, hiding, answerShow } = this.state
    //number is activeIndex, item is questionAnswer[activeIndex]
    const { item, number } = this.props
    const { question, fact, image } = item

    return (
      <div className='quiz__main'>
      <div className='quiz__container container--xl mha'>
        {(choice && !hiding) ? (
          <div className='px2 quiz__material anwser container--q mha'>
          <span className='cw quiz__material_qstep quiz-nums'>Question {number} of 8</span>
          <div className={cx('quiz__material_answer', {
              'active': choice && answerShow
            })}>
            <div>
                <h3 className='cw quiz-ans'>{selected ? `Correct!` : `Nope`}</h3>
                <img className="question-image" src={image} alt="" />
                <div className='cw quiz-fact' dangerouslySetInnerHTML={{__html: fact}} />
              </div>
            </div>
          </div>
        ) : (
          <div className={cx('px2 quiz__material question container--q mha')}>
            <span className='cw quiz__material_qstep quiz-nums'>Question {number} of 8</span>
            <h4 className={cx('cw quiz__material_question quiz-questions', { 'hiding': hiding })}>
              <img className="question-mark" src="/images/question-mark.png" alt="" /><br />
            {question}
            </h4>
          </div>
        )}
        <div className='quiz__selections'>
          <div className='quiz__selections_nest'>
            <div className={cx('px1 f jcc aic mha')}>
            {this.props.choices.map((singleChoice) => (
              <SelectableAnswer
                key={singleChoice.id}
                topSelected={selected}
                choice={singleChoice}
                disabled={this.state.disabled}
                size={singleChoice.fontSize}
                onClick={(e) => this.handleSelected(e)} />
            ))}
            </div>
            <div className='f jcc aic'>
              {choice && (
                <div className={cx('f jce quiz__options_next', {
                  'visible': choice && answerShow
                })}>
                  <Button classes={`f jcb cw`} clickHandle={() => this.handleNext()}>
                    {number === 8 ? `Calculate Score` : `Next Question`}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    )
  }
}
export default QuizSingle;