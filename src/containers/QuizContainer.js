import React, { Component } from 'react';
import { Strider, Step } from 'react-strider';
import cx from 'classnames'
import QuizSingle from '../components/QuizSingle'
import QuizStart from '../components/QuizStart'
import QuizEnd from '../components/QuizEnd'

class QuizContainer extends Component{

  state = {
    correct: 0
  }

  pushAnswer = (next) => {
    let count = this.state.correct
    this.setState({
      correct: count += 1
    })
  }


  render() {
    return(
      <div className='f jcc aic site quiz-body'>
        <div>
          <h1 className="quiz-head">Animal Quiz</h1>
          <Strider activeIndex='0' transitionSpeed={300} >
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizStart next={next} />
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}
                     />
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    choices={this.props.choices[activeIndex-1]}/>
                </div>
              )}
            </Step>

            <Step>
              {({ active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizEnd {...this.props} score={this.state.correct} />
                </div>
              )}
            </Step>

          </Strider>
        </div>
      </div>
    )
  }
}
export default QuizContainer;