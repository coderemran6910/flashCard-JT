const Faq = () => {
  return (
    <div className="">
      <h2 className="font-bold text-[#06286E] text-5xl ">FAQ</h2>
      <div className="mt-10">

        <div className="collapse collapse-arrow  mb-5 border border-[#06286E] ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Can education flashcards be used for all age groups?
          </div>
          <div className="collapse-content">
            <p>Yes Of course </p>
          </div>
        </div>


        <div className="collapse collapse-arrow mb-5 border border-[#06286E] ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How do education flashcards work?
          </div>
          <div className="collapse-content">
            <p> At first create flashcard then use  </p>
          </div>
        </div>


        <div className="collapse collapse-arrow mb-5 border border-[#06286E] ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Can education flashcards be used for test preparation?
          </div>
          <div className="collapse-content">
            <p>Yes Of Course </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
