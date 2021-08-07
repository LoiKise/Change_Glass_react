import React, { Component } from 'react'





export default class Component_Glasses extends Component {




    state = {
        imgSrc: `./img/v8.png`
    }

    handleChangeGlass = (style) => {
        this.setState({
            imgSrc: `./img/${style}.png`
        })
    }




    render() {
        return (
            <div className="background">
                <h3>TRY GLASS WITH APP ONLINE</h3>
                <div className="container " /*style= {{ backgroundImage : 'url(./img/background.jpg)'}}*/>
                    <div className="row model1">
                        <div className="col-6 model">
                            <img src="./img/model.jpg" />
                        </div>
                        <div className="col-6 model_glass model">
                            <img src="./img/model.jpg" />
                            <img src={this.state.imgSrc} />
                        </div>
                    </div>
                    <div className="glass">
                        <div className="row glass1">
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v1')
                                }}>

                                    <img src="./img/v1.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v2')
                                }}>

                                    <img src="./img/v2.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v3')
                                }}>

                                    <img src="./img/v3.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v4')
                                }}>

                                    <img src="./img/v4.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v5')
                                }}>

                                    <img src="./img/v5.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v6')
                                }}>

                                    <img src="./img/v6.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v7')
                                }}>

                                    <img src="./img/v7.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v8')
                                }}>

                                    <img src="./img/v8.png" />
                                </button>

                            </div>
                            <div className="col-2">
                                <button type="button" className="btn_add" onClick={() => {
                                    this.handleChangeGlass('v9')
                                }}>

                                    <img src="./img/v9.png" />
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
