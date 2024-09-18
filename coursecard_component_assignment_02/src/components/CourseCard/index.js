
// Assignment (1)
// ### **Requirements - The CourseCard component should:**
/*
- ** Display the course title, price, language, duration, location.**
- ** Optionally display a "New" badge if the course is recently added.**
- ** Optionally display a course Image.**
- ** Use ES6 features such as destructuring, template literals, and arrow functions.**

### ** Optional Requirements:**

- ** Research how to style a component **
- ** Create a new file named CourseCard.css in the src directory.**
- ** Add styles to enhance the appearance of the CourseCard component.**
- *** Write this component again in Class Component ***
*/

// Assignment (2)
/**
 * - **Add a Difficulty Level Prop**
    - **Add a new prop called difficulty to the CourseCard component. This prop should represent the difficulty level of the course (e.g., "Beginner", "Intermediate", "Advanced").**
    - **Display the difficulty level on each course card.**
    - **Hint: You will pass the difficulty prop from the parent component (e.g., App.js).**

- **Change Button Text Based on Difficulty Level**
    - **Modify the button text to reflect the course difficulty:**
        - **For "Beginner" courses, the button should display "Start Learning Now!"**
        - **For "Intermediate" and "Advanced" courses, the button should display "Enroll Now".**
    - **Hint: You can use conditional rendering within the CourseCard component.**
- **Add a Review Button with State**
    - **Add a new button labeled "Leave a Review" to the CourseCard.**
    - **Use state to toggle between showing the "Leave a Review" button and a simple text input where the user can enter a review. After the user submits the review, show "Review Submitted" instead of the button.**
    - **Hint: You’ll need a second piece of state to track whether the review input is visible or not.**
- **Bonus (Optional): Track and Display Enrollment Count**
    - **Keep track of how many times a course has been enrolled in using state.**
    - **Each time a user clicks the "Enroll Now" button, the enrollment count for that course should increase.**
    - **Display the enrollment count below the button, e.g., "Enrolled: 3 times".**
 */
import React, { useState } from 'react';
import './courseCard.css';

export const CourseCard = (props) => {
    const [showReviewInput, setShowReviewInput] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [enrollCounter, setEnrollCounter] = useState(0);
    const {
        imgLink,
        title,
        price,
        language,
        duration,
        location,
        isNew,
        score,
        reviews,
        difficulty
    } = props;

    const handleEnrollIncrement = () => {
        setEnrollCounter(prev => prev + 1);
    }
    const handleReviewSubmit = () => {
        setReviewSubmitted(true);
    }
    const handleShowReviewInput = () => {
        setShowReviewInput(true);
    }
    const difficultyText = difficulty === 'Beginner' ? 'Start Learning Now !' : 'Enroll Now !';

    return (
        <div className={`course-card ${isNew && 'course-card__badge'}`}>
            <div className="course-card__image" style={{ '--imgLink': `url(${imgLink})` }} ></div>
            <div className="course-card__content">
                <h3 className="course-card__title">{title}</h3>
                <div className="course-card__details">
                    <div className="course-card__row">
                        <p className='course-card__difficulty'>{difficulty}</p>
                        <button onClick={handleEnrollIncrement} className='course-card__button course-card__button-enroll'>{
                            difficultyText
                        }</button>
                    </div>
                    <p className='course-card__font-small'>
                        Enrolled: {enrollCounter} time{enrollCounter > 1 ? 's' : ''}
                    </p>
                    <p className="course-card__tags">{language} · {duration} · {location}</p>
                    <div className="course-card__line"></div>
                    <div className="course-card__row">
                        <i className="fa-regular fa-star"></i>
                        <p className="course-card__score">{score}</p>
                        <p className="course-card__font-small">({reviews} reviews)</p>
                        <h3 className="course-card__price">${price}</h3>
                    </div>
                    {
                        reviewSubmitted ?
                            <p className='course-card__reviews-submitted'>Review Submitted</p>
                            :
                            showReviewInput ?
                                <form>
                                    <input type="text" />
                                    <input type="submit" onClick={handleReviewSubmit} />
                                </form>
                                :
                                <button onClick={handleShowReviewInput} className='course-card__button course-card__button-review'>
                                    Leave a review
                                </button>
                    }
                </div>
            </div>
        </div>
    );
}