import React from "react";
import "../styles/howToPlayStyle.scss";

const HowToPlay = () => {
  return (
    <div className="how-to-play-container">
      <div className="how-to-play-child-container">
        <div className="how-to-play-header-sentence">How to Play Yu-Gi-Oh!</div>
        <p className="how-to-play-ptags">
          Yu-Gi-Oh! (or just YuGiOh) is a card game in which two players attempt
          to defeat each other by decreasing their opponent's Life Points (down
          to 0) using a collection of monster, spell, and trap cards.
        </p>
        <div className="how-to-play-sub-header-sentences">Getting Started</div>
        <p className="how-to-play-ptags">
          Other than your decks (refer to the Decks section below), you're going
          to need a few extra items to assist in gameplay. These items include:
        </p>
        <ul className="how-to-play-ultags">
          <li>A coin - some cards require a coin flip</li>
          <li>Dice - some cards require a die roll</li>
          <li>Counters - any small object that can be used as a marker to keep track of certain metrics that may affect some cards</li>
          <li>Monster Tokens - (refer to Other Rules section below)</li>
        </ul>
        <p className="how-to-play-ptags">Some other items that can help but are not required include:</p>
        <ul className="how-to-play-ultags">
          <li>Calculator - to help track Life Points (optional)</li>
          <li>Card Sleeves - to protect cards from damage (optional)</li>
          <li>Game Mat - helps you organize your cards into the correct game zones during a duel</li>
        </ul>
        <div className="how-to-play-sub-header-sentences">Decks</div>
        <p className="how-to-play-ptags">Each player must have three different types of YuGiOh decks to be eligible for gameplay:</p>
        <ul className="how-to-play-ultags">
            <li>Main Deck</li>
            <li>Extra Deck</li>
            <li>Side Deck</li>
        </ul>
        <p className="how-to-play-ptags">It is required that your <strong>Main Deck</strong> contains between 40 and 60 cards.</p>
        <div className="pro-tip">Pro tip - keep your deck count close to the 40 card minimum so you draw your best cards at a higher frequency</div>

      </div>
    </div>
  );
};

export default HowToPlay;
