
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
import React from 'react';
import './CourseCard.css';

export const CourseCard = (props) => {

    const {
        imgLink,
        title,
        price,
        language,
        duration,
        location,
        isNew,
        score,
        reviews } = props;

    return (
        <div className={`course-card ${isNew && 'course-card__badge'}`}>
            <div className="course-card__image" style={{ '--imgLink': `url(${imgLink})` }} ></div>
            <div className="course-card__content">
                <h3 className="course-card__title">{title}</h3>
                <div className="course-card__details">
                    <p className="course-card__tags">{language} · {duration} · {location}</p>
                    <div className="course-card__row">
                        <i className="fa-regular fa-star"></i>
                        <p className="course-card__score">{score}</p>
                        <p className="course-card__reviews">({reviews} reviews)</p>
                        <h3 className="course-card__price">${price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export class CourseCardClass extends React.Component {

    render() {
        return (
            <div className={`course-card ${this.props.isNew && 'course-card__badge'}`}>
                <div className="course-card__image" style={{ '--imgLink': `url(${this.props.imgLink})` }} ></div>
                <div className="course-card__content">
                    <h3 className="course-card__title">{this.props.title}</h3>
                    <div className="course-card__details">
                        <p className="course-card__tags">{this.props.language} · {this.props.duration} · {this.props.location}</p>
                        <div className="course-card__row">
                            <i className="fa-regular fa-star"></i>
                            <p className="course-card__score">{this.props.score}</p>
                            <p className="course-card__reviews">({this.props.reviews} reviews)</p>
                            <h3 className="course-card__price">${this.props.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}