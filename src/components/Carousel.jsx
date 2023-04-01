import { useState } from 'react';
import { list, shortList, longList } from '../data.js';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson - 1 + people.length) % people.length;
      console.log(
        'prevPerson: ' +
          prevPerson +
          '- 1 + ' +
          'people.length: ' +
          people.length +
          ' % ' +
          'people.length: ' +
          people.length +
          ' = ' +
          'result:' +
          result
      );
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson + 1) % people.length;

      return result;
    });
  };

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className='slide '
            style={{
              transform: `translateX(${(personIndex - currentPerson) * 100}%)`,
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
