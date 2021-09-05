import React from 'react'

import '../module/blast/app/index'
import { Field } from '../module/blast/app/classes'

import '../module/blast/style/index.scss'

class Blast extends React.Component {
  state = {
    handleClick: 0,
  }
  handlerStartGame = () => {
    this.setState({ handleClick: 1 })
    this.startGame()
  }

  startGame = () => {
    let width = 9
    let height = 9

    let gameField = new Field({
      width,
      height,
    })
    gameField.fill()
    gameField.render()
  }

  render() {
    const displayModal = this.state.handleClick ? 'none' : 'block'
    console.log(this.handleClick)
    console.log(displayModal)
    return (
      <div className="contentGame">
        <div className="modal-window" style={{ display: displayModal }}>
          <div className="modal-window_text">
            Цель игры -- набрать 1000 очков за 10 ходов, иначе проигрыш
          </div>
          <div id="startGame" className="modal-window_button">
            <div id="again" className="inner">
              <button onClick={this.handlerStartGame}>Начать!</button>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="header_content">
            <div className="header_wrapper-loading">
              <div className="header_loading"></div>
            </div>
            {/* <div className="header_loading-button text_style">
              <div className="inner">Перемешать</div>
            </div> */}
          </div>
        </div>

        <div className="game">
          <div className="game_field">
            <div id="pole" className="game_wrapper"></div>
          </div>

          <div className="game-panel">
            <div className="game-panel_score">
              <div className="game-panel_content">
                <div
                  id="step"
                  className="text_style"
                  style={{ marginTop: '140px' }}
                >
                  10
                </div>
                <div
                  id="score"
                  className="text_style"
                  style={{ marginTop: '115px' }}
                >
                  0
                </div>
              </div>
            </div>

            <div
              className="text_style"
              style={{ width: '300px', height: '25px' }}
            >
              За сжигание тайла даётся:
            </div>

            <div className="game-panel_bonus">
              <div className="panel-bonus">
                <div className="panel-bonus_text">
                  <div className="text_style">2-3</div>
                </div>
                <div className="panel-bonus_score">
                  <div className="text_style">10</div>
                  <div className="panel-bonus_rectangle"></div>
                </div>
              </div>

              <div className="panel-bonus">
                <div className="panel-bonus_text">
                  <div className="text_style">4-5</div>
                </div>
                <div className="panel-bonus_score">
                  <div className="text_style">15</div>
                  <div className="panel-bonus_rectangle"></div>
                </div>
              </div>

              <div className="panel-bonus">
                <div className="panel-bonus_text">
                  <div className="text_style">6+</div>
                </div>
                <div className="panel-bonus_score">
                  <div className="text_style">20</div>
                  <div className="panel-bonus_rectangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blast
