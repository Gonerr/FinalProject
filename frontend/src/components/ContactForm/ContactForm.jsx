import React from 'react';
import PropTypes from 'prop-types'
import style from './ContactForm.module.css';

const ContactForm = (props) => {
    return (
        <div className={`${style.contact5} ${props.rootClassName}`}>
            <span className={`${style.text1} thq-body-small`}>
              Share your thoughts about the movie with us
            </span>
            <form className={style.form}>
                <div className={style.container}>
                    <div className={style.input1}>
                        <label htmlFor="contact-form-2-name"
                               className={`${style.text2} thq-body-small`}>
                            Name
                        </label>
                        <input
                            type="text"
                            id="contact-form-2-name"
                            placeholder="Name"
                            className={`${style.textInput} thq-input`}
                        />
                    </div>
                    <div className={style.input2}>
                        <label htmlFor="contact-form-2-email"
                               className={`${style.text3} thq-body-small`}>
                            Rate
                        </label>
                        <select className={`${style.select} thq-input`}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                </div>
                <div className={style.input3}>
                  <textarea
                      id="contact-form-2-message"
                      rows="3"
                      placeholder="Share your opinion about the movie"
                      className={`${style.textarea} thq-input`}
                  ></textarea>
                </div>
                <button type="submit" className={`${style.button} thq-button-filled`}>
                  <span className={style.buttontext}>Submit</span>
                </button>
            </form>
        </div>
    );
};

ContactForm.defaultProps = {
    rootClassName: '',
}

ContactForm.propTypes = {
    rootClassName: PropTypes.string,
}
export default ContactForm;