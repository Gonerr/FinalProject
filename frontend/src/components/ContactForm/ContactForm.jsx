import React, {useState} from 'react';
import style from './ContactForm.module.css';

const ContactForm = ({rootClassName, id}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [reviewText, setReviewText] = useState('');

    // This is for the text that tells you that the review has been successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Review template
        const review = {
            filmId: id,
            source: name,
            reviewText,
            rating: parseInt(rating),
            avatar: 'https://avatars.mds.yandex.net/i?id=44e5e380fd61f983c8450b6bcd9aa54e_l-5222125-images-thumbs&n=13',
            reviewDate: new Date().toISOString().split('T')[0] // current date in the format YYYY-MM-DD
        };

        try {
            const response = await fetch('http://localhost:3000/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });

            if (response.ok) {
                // Successful sending of data
                setIsSubmitted(true);
                // Cleaning the form
                setName('');
                setRating('');
                setReviewText('');
            } else {
                // Error
                alert('Failed to submit review.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review.');
        }
    };


    return (
        <div className={`${style.contact5} ${rootClassName}`}>
            <span className={`${style.text1} thq-body-small`}>
              Share your thoughts about the movie with us
            </span>
            <form className={style.form} onSubmit={handleSubmit}>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/*Select a rating*/}
                    <div className={style.input2}>
                        <label htmlFor="contact-form-2-rating"
                               className={`${style.text3} thq-body-small`}>
                            Rate
                        </label>
                        <select
                            id="contact-form-2-rating"
                            className={`${style.select} thq-input`}
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                </div>
                <div className={style.input3}>
                  <textarea
                      id="contact-form-2-message"
                      rows="3"
                      placeholder="Share your opinion about the movie"
                      className={`${style.textarea} thq-input`}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      required
                  ></textarea>
                </div>
                {isSubmitted ? (
                    <div className={style.sendtext}>
                        Your review has been successfully submitted!
                    </div>
                ) : (
                    <button type="submit" className={`${style.button} thq-button-filled`}>
                        <span className={style.buttontext}>Send</span>
                    </button>
                )}

            </form>
        </div>
    );
};


export default ContactForm;