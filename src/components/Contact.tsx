// import { useEffect, useRef } from "react";

function Contact() {

  // trying to make seeing the thing change the NavSelectedThing
  // use redux? redux toolkit? react context?

  // const componentRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         onVisible(); // Call the provided function when the component becomes visible
  //       }
  //     });
  //   });

  //   observer.observe(componentRef.current);

  //   return () => {
  //     observer.unobserve(componentRef.current);
  //   };
  // }, [onVisible]);

  const handleMouseOver = () => {
    console.log('Contact Page!')
  } 
  
  return (
    <section onMouseOver={handleMouseOver} onFocus={handleMouseOver} className="section-container__contact" id="contact">
      <div className="section-container__contact__content">
        <h1>Contact!</h1>
      </div>
    </section>
  )
}

export default Contact

