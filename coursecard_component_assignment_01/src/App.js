import './App.css';
import { CourseCard } from './components/CourseCard';
import { CourseCardClass } from './components/CourseCard';

function App() {
  const courseList = [
    {
      id: 0,
      imgLink: 'https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mastering Full-Stack Development: From Frontend to Backend', price: 49.98, language: 'English', duration: '1 month', location: 'remote', isNew: true, score: 4.1, reviews: 300
    },
    { id: 1, imgLink: 'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Introduction to Machine Learning with Python', price: 99.98, language: 'English', duration: '3 month', location: 'remote', isNew: false, score: 3.9, reviews: 102 },
    { id: 2, imgLink: 'https://images.unsplash.com/photo-1645113748341-64d608cb29f2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Building Responsive Web Applications with React', price: 109.98, language: 'English', duration: '2 month', location: 'remote', isNew: false, score: 4.5, reviews: 403 },
    { id: 3, imgLink: 'https://images.unsplash.com/photo-1601543461574-3a431aefc27d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Deep Dive into Database Management with SQL and NoSQL', price: 69.98, language: 'Mandarin', duration: '1 month', location: 'remote', isNew: true, score: 4.9, reviews: 599 },
    { id: 4, imgLink: 'https://images.unsplash.com/photo-1588912914074-b93851ff14b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Fundamentals of Mobile App Development: iOS and Android', price: 29.98, language: 'English', duration: '1 month', location: 'remote', isNew: true, score: 4.2, reviews: 290 },
  ];
  return (
    <div className="App">
      <div className="course-cards">
        {courseList.map((course) => {
          return <CourseCard key={course.id} {...course} />
        })}
        {courseList.map((course) => {
          return <CourseCardClass key={course.id} {...course} />
        })}
      </div>
    </div>
  );
}

export default App;
