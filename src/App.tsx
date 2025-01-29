import Accordion from "./components/Accordion";

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="bg-Dark-purple bg-[url(/images/background-pattern-mobile.svg)] h-62 w-full bg-no-repeat"></div>
      <section className="bg-White p-6 rounded-2xl text-left m-7 absolute top-22">
        <div className="flex gap-4 items-center">
          <img src="/images/icon-star.svg" alt="" />
          <h1 className="text-4xl text-Dark-purple font-bold">FAQs</h1>
        </div>
        <Accordion
          title={"What is Frontend Mentor, and how will it help me?"}
          description={
            "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. it´s suitable for all levels and ideal for portfolio building."
          }
        />
        <Accordion
          title={"Is Frontend Mentor free?"}
          description={
            "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels"
          }
        />
        <Accordion
          title={"Can i use Frontend Mentor projects in my portfolio?"}
          description={
            "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          }
        />
        <Accordion
          title={"How can i get help if i´m stuck on a challenge?"}
          description={
            "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          }
        />
      </section>
    </main>
  );
}

export default App;
