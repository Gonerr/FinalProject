import React, {Fragment} from 'react';
import style from './FormBooking.module.css';

const FormBoking = (props) => {
    return (
        <div className={style.container1}>
            <div className={style.purchaseTicket}>
                <h1 className={`${style.text10} ${style.text18}`}>
                    {props.heading ?? ("Ticket purchase")}
                </h1>
                <div className={style.container2}>
                    <div className={style.movie1}>
                        <label htmlFor="contact-form-2-email" className={style.text11}>
                            The movie:
                        </label>
                        <select className={`${style.select1} thq-input`}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                    <div className={style.container3}>
                        <div className={style.date}>
                            <label htmlFor="contact-form-2-email" className={style.text12}>
                                Date:
                            </label>
                            <input
                                type="date"
                                placeholder={props.textinputPlaceholder}
                                className={`${style.textinput1} thq-input`}
                            />
                        </div>
                        <div className={style.time}>
                            <label htmlFor="contact-form-2-email" className={style.text13}>
                                Select a time:
                            </label>
                            <input
                                type="time"
                                placeholder={props.textinputPlaceholder1}
                                className={`${style.textinput2} thq-input`}
                            />
                        </div>
                    </div>
                    <div className={style.name}>
                        <label htmlFor="contact-form-2-name" className={`${style.text14} thq-body-small`}>
                            Enter your Name
                        </label>
                        <input
                            type="text"
                            id="contact-form-2-name"
                            placeholder="Name"
                            className={`${style.textInput1} thq-input`}
                        />
                    </div>
                    <div className={style.email}>
                        <label htmlFor="contact-form-2-name" className={`${style.text15} thq-body-small`}>
                            Enter your Email
                        </label>
                        <input
                            type="email"
                            id="contact-form-2-email"
                            placeholder="Email"
                            className={`${style.textInput2} thq-input`}
                        />
                    </div>
                    <div className={style.movie2}>
                        <div className={style.container4}>
                            <label htmlFor="contact-form-2-email" className={style.text16}>
                                Number of tickets
                            </label>
                            <select className={`${style.select2} thq-input`}>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                        <h1 className={style.text17}>
                            {props.heading1 ?? (
                                <Fragment>
                                  <span className={style.text20}>
                                    <span>
                                      Payable:
                                    </span>
                                    <span className={style.text22}>$500</span>
                                  </span>
                                </Fragment>
                            )}
                        </h1>
                    </div>
                    <button
                        type="submit"
                        className={`${style.button} thq-button-filled`}
                    >
                        <span className={`${style.action1} thq-body-small ${style.text19}`}>
                          {props.action ?? ("Book a ticket")}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

FormBoking.defaultProps = {
    heading: undefined,
    textinputPlaceholder: 'placeholder',
    textinputPlaceholder1: 'placeholder',
    action: undefined,
    heading1: undefined,
}


export default FormBoking;