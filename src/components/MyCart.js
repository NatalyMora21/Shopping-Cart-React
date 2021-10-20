import React, { Component } from 'react';
import Phone from './Phone'
import { connect } from 'react-redux'

class MyCart extends Component {
    render() {

        const { inCart_phones, phones } = this.props

        //const { phones, displayPhones } = this.props

        console.log(phones + "-------------dd");


        return (

            <div>
                <div>

                    {inCart_phones.map(phone => {

                        return(
                            <div class="ui cards">
                            <div class="ui card centered">
                                <div class="content">
                                    <img
                                        src="/images/phone.jpg"
                                        class="ui mini right floated image"
                                    />


                                    <div class="header">{phone}</div>
                                    <div class="meta">$ 80</div>
                                    <div class="meta">12 minutes</div>
                                    <div class="description">
                                        8G RAM, 16G memory
                                    </div>
                                </div>
                                <div class="extra content">
                                    <div class="ui two buttons">
                                        <button class="ui green basic button">Buy</button>
                                        <button class="ui red basic button">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )

                    })}

                </div>


            </div>
        )
    }
}

function mapStateToProps({ phones }) {
    console.log(phones + "phones")
    const inCart_phones = Object.keys(phones).filter((phone) => phones[phone].inCart == 'true')
    const outCart_phones = Object.keys(phones).filter((phone) => !inCart_phones.includes(phone))

    return {
        inCart_phones,
        outCart_phones,
    }
}

export default connect(mapStateToProps)(MyCart)