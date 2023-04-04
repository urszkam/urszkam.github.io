import React from "react";
import './instructions.css';
import { ReturnBtn } from "../Components/instructions/returnBtn";
import { NextBtn } from "../Components/quiz/nextBtn";
import { useLocation, useNavigate } from "react-router-dom";


  const Instructions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const noOfQuestions = location.state.noOfQuestions;
    // const diffLvl = location.state.difficultyLvl;
    const noOfQuestions = 2;
    const diffLvl = 1;
    const handleClick = () => {
        navigate("/quiz", {state: {
                            difficultyLvl: diffLvl,
                            noOfQuestions: noOfQuestions}})

    }
    const returnHome = () => {
      navigate("/")
    }
    return (
    <div className="Instructions-page">
      
      <header className="Instructions-header">
      <h1 id="title1">Instructions</h1>
      </header>

      <body className="Instructions-body">
      <p1 id="body1">
        <p>
        <b>1.</b> Make sure that you're comfortable with your choice in difficulty and number of questions. 
        </p>

        <p>
        <b>NOTE:</b> The difficulty and number of questions chosen from the starting page cannot be changed after starting the quiz.
        In order to make changes, use the <b>'RETURN'</b> button on the bottom of the page to return to the main page and change the amount to your liking.
        </p>
        
        <p>
        <b>2.</b> The qustions will be randomly selected and will strictly revolve around the ocean life and the organisms living therein.
        </p>

        <p>
        <b>3.</b> Feel free to look up the answers, no judging from our end.
        Google is always lovely but try these sources at the bottom of the page for hints on the answers to some of the questions.
        </p>

        <p>
        <b>4.</b> Have fun guessing! You may be shocked by how lucky you actually are or by how much you actually know.
        </p>

        <p>
        <div className="buttonChoice__container">
          <NextBtn action={handleClick}
            id_div={"startDiv"}
            id_btn={"startBtn"}/>
        </div>
        </p>
        </p1>
      </body>

      <body className="Sources-body">
      <h2 id="title2">HELPFUL SOURCES:</h2>
      <p id="sourceParas">
      <p>
        <a
          className="Instructions-link"
          href="https://www.britannica.com/topic/Panama-Canal"
          target="_blank"
          rel="noopener noreferrer"
        >
          PANAMA CANAL by Norman J. Padelford et. al. for Encyclopedia Britannica, March 3, 2023.
        </a>
      </p>
      <p>Said literally no one: I yearn to know what <em>oceans</em> are connected by the Panama Canal!</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://www.worldwildlife.org/stories/unicorn-of-the-sea-narwhal-facts"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNICORN OF THE SEA: Narwhal Facts by WorldWildLife
        </a>
      </p>
      <p> Unicorn of the Sea!!! Don't even look like unicorns! And instead of unicorn horns, they have <em>tusks</em>. What a sham?!?</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://www.britannica.com/animal/walrus"
          target="_blank"
          rel="noopener noreferrer"
        >
          WALRUS by the Editors of Encyclopaedia for Encyclopedia Britannica, 18 Feb. 2023.
        </a>
      </p>
      <p>One nickname sounds like something out of Harry Potter! So where's the creativity in <em>the other one</em>?!?</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://oceanconservancy.org/blog/2019/06/05/biggest-animals-ocean/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who are the Biggest Animals in the Ocean?
        </a>
      </p>
      <p>Mirror, mirror! On the wall! Who's the <em>largest</em> of them all?</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://www.history.com/this-day-in-history/magellans-expedition-circumnavigates-globe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Magellan’s Expedition
        </a>
      </p>
      <p>I was looking for a word that <em>rhymes with euphoria</em>!!!</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://www.livescience.com/55412-whale-sharks.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facts About Whale Sharks By Alina Bradford
        </a>
      </p>
      <p>It's about the size of a WHAT!</p>
      <br></br>
      <p>
        <a
          className="Instructions-link"
          href="https://www.bbc.com/news/science-environment-22715018"
          target="_blank"
          rel="noopener noreferrer"
        >
          How the turtle got its unique hard shell By Melissa Hogenboom, Science reporter, BBC News
        </a>
      </p>
      <p>That's <em>a lot</em> of bones!</p>
      <br></br>
      </p>
      <ReturnBtn 
        action={returnHome}/>
      </body>

    </div>

  );
};

  
export default Instructions;
