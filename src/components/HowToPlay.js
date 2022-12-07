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
          <li>
            Counters - any small object that can be used as a marker to keep
            track of certain metrics that may affect some cards
          </li>
          <li>Monster Tokens - (refer to Other Rules section below)</li>
        </ul>
        <p className="how-to-play-ptags">
          Some other items that can help but are not required include:
        </p>
        <ul className="how-to-play-ultags">
          <li>Calculator - to help track Life Points (optional)</li>
          <li>Card Sleeves - to protect cards from damage (optional)</li>
          <li>
            Game Mat - helps you organize your cards into the correct game zones
            during a duel
          </li>
        </ul>
        <div className="how-to-play-sub-header-sentences">Decks</div>
        <p className="how-to-play-ptags">
          Each player must have three different types of YuGiOh decks to be
          eligible for gameplay:
        </p>
        <ul className="how-to-play-ultags">
          <li>Main Deck</li>
          <li>Extra Deck</li>
          <li>Side Deck</li>
        </ul>
        <p className="how-to-play-ptags">
          It is required that your <strong>Main Deck</strong> contains between
          40 and 60 cards.
        </p>
        <div className="pro-tip">
          Pro tip - keep your deck count close to the 40 card minimum so you
          draw your best cards at a higher frequency.
        </div>
        <p className="how-to-play-ptags">
          Be aware that you can't just load your deck with multiple copies of
          the same card; you are limited to a maximum of three copies of the
          same card in your main deck.
        </p>
        <p className="how-to-play-ptags">
          The <strong>Extra Deck</strong> holds your Synchro and Fusion Monsters
          (refer to Monster Cards section below), which can be used during the
          game if certain requirements are met. This deck can hold anywhere from
          0 to 15 cards and is not considered toward the count of your Main
          Deck.
        </p>
        <p className="how-to-play-ptags">
          The <strong>Side Deck</strong> is another separate set of 0 to 15
          cards (not counting towards your Main Deck) that allows you to
          customize and adapt your deck to your specific opponent and/or the
          situation of the battle. Players are given the opportunity to swap any
          card from the Side to Main Deck after each duel in the battle, as long
          as both deck counts remain the same after the swap.
        </p>
        <div className="how-to-play-sub-header-sentences">Game Zones</div>
        <p className="how-to-play-ptags">
          Before playing YuGiOh, it is necessary to know where cards can and
          can't be placed in the battlefield. There are six different game zones
          in the field:
        </p>
        <ul className="how-to-play-ultags">
          <li>Monster Card Zone</li>
          <li>Spell & Trap Zone</li>
          <li>Graveyard</li>
          <li>Deck Zone</li>
          <li>Field Card Zone</li>
          <li>Extra Deck Zone</li>
        </ul>
        <p className="how-to-play-ptags">
          Up to five Monsters can be placed in the{" "}
          <strong>Monster Card Zone</strong>. These cards are positioned in the
          zone depending on what you want the card to do (more on this in the
          Monster Battle Rules section below).
        </p>
        <p className="how-to-play-ptags">
          Up to five Spell and/or Trap Cards can be placed in the{" "}
          <strong>Spell & Trap Zone</strong>. These cards can be activated by
          positioning them face-up in the zone, or they can just be laid
          face-down for use later.
        </p>
        <p className="how-to-play-ptags">
          Each player has a <strong>Graveyard</strong> where destroyed Monster
          Cards and used Spell & Trap Cards are sent. Graveyard cards are public
          knowledge, meaning that the cards are face-up and players can look
          through them at any time. The cards in the Graveyard should be in
          organized in the order in which they are sent there, and this order
          should not be changed.
        </p>
        <p className="how-to-play-ptags">
          Each player also has a <strong>Deck Zone</strong> where their Main
          Deck is located (face-down). Players draw cards for their hand from
          their deck in this zone.
        </p>
        <p className="how-to-play-ptags">
          The <strong>Field Card Zone</strong> is where special Spell Cards
          (Field Spell Cards) can be played. Only one can be played at a time by
          both players and any previously active Spell will be destroyed
          automatically upon the activation of a new Spell.
        </p>
        <p className="how-to-play-ptags">
          The <strong>Extra Deck Zone</strong> is where players put their Extra
          Deck (face-down). This deck is only viewable by the player that owns
          it.
        </p>
        <div className="how-to-play-header-sentence">Yu-Gi-Oh Cards</div>
        <div className="how-to-play-sub-header-sentences">Monster Cards</div>
        <p className="how-to-play-ptags">
          Here are the different types of Monster Cards (we'll get to how you
          summon them later):
        </p>
        <ul className="how-to-play-ultags">
          <li>Normal Monsters</li>
          <li>Effect Monsters</li>
          <li>Synchro Monsters</li>
          <li>Tuner Monsters</li>
          <li>Fusion Monsters</li>
          <li>Ritual Monsters</li>
        </ul>
        <p className="how-to-play-ptags">
          <strong>Normal Monsters</strong> have no special effects but typically
          have higher ATK (strength) and DEF (defense) points than Effect
          Monsters.
        </p>
        <p className="how-to-play-ptags">
          <strong>Effect Monsters</strong> are monsters with special abilities.
          There are five different types:
        </p>
        <ul className="how-to-play-ultags">
          <li>
            Flip Effect - activated when a face-down card is flipped face-up
          </li>
          <li>
            Continuous Effect - effect is active while monster is face-up in the
            battlefield and ends when monster is no longer active/face-up
          </li>
          <li>
            Ignition Effect - used by declaring activation during your Main
            Phase (more on this later), some have costs
          </li>
          <li>Trigger Effect - activated during a specified time</li>
          <li>
            Quick Effect - can be activated whenever, even during an opponent's
            turn
          </li>
        </ul>
        <p className="how-to-play-ptags">
          As part of the Extra Deck, <strong>Synchro Monsters</strong> are
          powerful cards that can be summoned either by a Special Summon or a
          Synchro Summon.
        </p>
        <p className="how-to-play-ptags">
          <strong>Tuner Monsters</strong> are cards that allow you to Synchro
          Summon a Synchro Monster. These monsters are considered Synchro
          Material Monsters because they are material cards required to Synchro
          Summon.
        </p>
        <p className="how-to-play-ptags">
          The other monster cards found in your Extra Deck are{" "}
          <strong>Fusion Monsters</strong>. To summon these cards, you must
          perform a Fusion Summon.
        </p>
        <p className="how-to-play-ptags">
          Out of the main deck, Ritual Monsters are monster cards that also
          require a Special Summon called a <strong>Ritual Summon</strong>. You
          must have all the required cards together in your hand or in the
          battlefield.
        </p>
        <div className="how-to-play-sub-header-sentences">
          Spell & Trap Cards
        </div>
        <p className="how-to-play-ptags">
          The main difference between Spell Cards and Trap Cards is that Spells
          are mainly used to boost offense while Traps are mainly used to
          disrupt opponent attacks. Also, Traps must be set in the field and
          can't be activated within the same turn, whereas most Spells can be
          activated on the same turn during which you play them. There are
          several different types of Spell and Trap cards:
        </p>
        <ul className="how-to-play-ultags">
          <li> Spell Cards</li>
          <ul>
            <li>Normal Spell Cards</li>
            <li>Ritual Spell Cards</li>
            <li>Continuous Spell Cards</li>
            <li>Equip Spell Cards</li>
            <li>Field Spell Cards</li>
            <li>Quick-Play Spell Cards</li>
          </ul>
          <li>Trap Cards</li>
          <ul>
            <li>Normal Trap Cards</li>
            <li>Continuous Trap Cards</li>
            <li>Counter Trap Cards</li>
          </ul>
        </ul>
        <p className="how-to-play-ptags">
          The effects of <strong>Normal Spells</strong> can only be used once,
          and once it is used it is sent to the graveyard. These cards are
          activated by making your opponent aware of its use and placing it
          face-up in the battlefield. The specific effect of the spell is
          described on the card.
        </p>
        <p className="how-to-play-ptags">
          The <strong>Ritual Spell Card</strong> is one of the cards necessary
          to perform a Ritual Summon. After it is used, it is sent to the
          Graveyard.
        </p>
        <p className="how-to-play-ptags">
          <strong>Continuous Spells</strong> are cards that stay in the
          battlefield and have a lasting, continuous effect on the game. This
          effect can either be positive for the user or negative for the user's
          opponent. Watch out though, there are cards the opponent can use to
          destroy these Continuous Spells.
        </p>
        <p className="how-to-play-ptags">
          <strong>Equip Spell Cards</strong> are attached to a monster in the
          field and improve that monster's abilities. These spells are
          continuous in the field, but they can only be attached to one monster.
          When this monster is destroyed, flipped face-down, or removed from the
          field, the Equip Spell is also destroyed.
        </p>
        <p className="how-to-play-ptags">
          <strong>Field Spell Cards</strong> are special spells that are
          activated in the Field Card Zone, which is a special area in the
          battlefield where only Field Spells can be played. Only one Field
          Spell can be active from both players and if somebody chooses to
          activate a new Field Spell, the previous one is destroyed.
        </p>
        <p className="how-to-play-ptags">
          <strong>Quick-Play Spells</strong> are special spells that can be
          played during any phase of your turn as well as your opponents turn.
        </p>
        <p className="how-to-play-ptags">
          To activate a <strong>Normal Trap Card</strong>, it must first be set
          in the field. Normal Traps, like Normal Spells, are single-use and
          after the effect takes action the card is then sent to the Graveyard.
        </p>
        <p className="how-to-play-ptags">
          <strong>Continuous Traps</strong> are great for limiting your
          opponent's options and some can even damage your opponent's Life
          Points (at a slow rate). So long as the card stays face-up its effects
          are continuous, much like a Continuous Spell.
        </p>
        <p className="how-to-play-ptags">
          Upon activation of other Spells or Traps,{" "}
          <strong>Counter Trap Cards</strong> have the ability to negate the
          effects of those cards.
        </p>
        <div className="how-to-play-sub-header-sentences">
          Summoning Monsters
        </div>
        <p className="how-to-play-ptags">
          In order to use your monster cards, you need to summon them. Some
          summon actions are simple, but others take multiple steps and cards to
          complete. The different types of summons are as follows:
        </p>
        <ul className="how-to-play-ultags">
          <li>Normal Summon</li>
          <li>Tribute Summon</li>
          <li>Flip Summon</li>
          <li>Special Summon</li>
          <ul>
            <li>Synchro Monsters</li>
            <li>Fusion Monsters</li>
            <li>Ritual Monsters</li>
          </ul>
        </ul>
        <p className="how-to-play-ptags">
          Normal Monsters and most Effect Monsters can be summoned simply by
          playing the card face-up into the battlefield. This is called a{" "}
          <strong>Normal Summon</strong>.
        </p>
        <p className="how-to-play-ptags">
          To summon monsters level 5 or higher, you must perform a{" "}
          <strong>Tribute Summon</strong>. A tribute is the action of sending
          one of the user's monsters to the Graveyard (like a sacrifice). If the
          monster you wish to summon is level 5 or 6, you must tribute one other
          monster. If the monster is level 7 or higher, it is required that you
          tribute two monsters!
        </p>
        <p className="how-to-play-ptags">
          When you set a monster in the battlefield (face-down in the defense
          position) it is not considered summoning. To actually summon these
          monsters, you must perform a <strong>Flip Summon</strong>. Set cards
          can only be Flip Summoned to the face-up attack position (not face-up
          defense) and you must wait until the next turn to do so if you just
          set the card.
        </p>
        <p className="how-to-play-ptags">
          Any monster that can't be Normal Summoned or set up for a Flip Summon
          has to be played to the field using a <strong>Special Summon</strong>.
          This includes Synchro, Fusion and Ritual Summons. When you perform a
          Special Summon, there is no restriction on the initial position of the
          monster in the battlefield. You may decide whether you want to face
          the monster up or down, and in the attack or defense position. Here
          are the step-by-step processes for each of the Special Summons:
        </p>
        <ul className="how-to-play-ultags">
          <li>
            Once the combined level of your controlled Tuner Monster and Normal
            Monster(s) is equal to the level of the Synchro Monster you wish to
            summon, you may declare a <strong>Synchro Summon</strong>. After
            declaring the summons, send the Synchro Material Monsters to the
            Graveyard and play your Synchro Monster from your Extra Deck.
          </li>
          <li>
            Once all of the Fusion Material Monsters listed on the card of the
            Fusion Monster you wish to <strong>Fusion Summon</strong> are in
            your control, you must activate the Polymerization card, send the
            Fusion Material Monsters and Polymerization to the Graveyard, then
            play the Fusion Monster from your Extra Deck in the face-up (either
            attack or defense) position.
          </li>
          <li>
            If you have the Ritual Monster and corresponding Ritual Spell and
            Tribute Card (shown on the Spell Card), activate the Spell Card and
            declare the <strong>Ritual Summon</strong>. Next, Tribute the
            necessary monsters and play the Ritual Monster from your hand in the
            face-up position.
          </li>
        </ul>
        <div className="pro-tip">
          *Some cards have effects with the ability to Special Summon, but you
          cannot use this effect to summon Special Summon Monsters because they
          must be summoned properly using the respective process above.
        </div>
        <div className="how-to-play-sub-header-sentences">Duel Preparation</div>
        <p className="how-to-play-ptags">
          Each match in YuGiOh consists of 3 duels in a best-of-3 format. During
          a duel, each player starts with 4000 Life Points and a winner is
          declared in one of the following ways:
        </p>
        <ul className="how-to-play-ultags">
          <li>Reduce your opponent's Life Points to 0</li>
          <li>
            If and when it is time to draw a card, your opponent is unable to do
            so
          </li>
          <li>With a card's special effect</li>
        </ul>
        <p className="how-to-play-ptags">
          Before you begin a duel, you must follow these steps:
        </p>
        <ol className="how-to-play-ultags">
          <li>
            Players should shuffle their decks (it is acceptable to shuffle and
            cut your opponent's deck)
          </li>
          <li>Place all decks face-down in their specified Deck Zones</li>
          <li>
            Players show their side deck to their opponent and count all the
            cards in each deck
          </li>
          <li>
            If this is the first duel, the winner of coin
            flip/rock-paper-scissors decides which turn they would like in the
            duel (or the loser of previous duel decides who goes first)
          </li>
          <li>Draw 5 cards from the top of the Main Deck and begin!</li>
        </ol>
        <div className="how-to-play-header-sentence">Playing Yu-Gi-Oh!</div>
        <div className="how-to-play-sub-header-sentences">Gameplay</div>
        <p className="how-to-play-ptags">
          Players take turns until the game winner is declared. Each turn
          contains six phases:
        </p>
        <ol className="how-to-play-ultags">
          <li>Draw Phase</li>
          <li>Standby Phase</li>
          <li>Main Phase 1</li>
          <li>Battle Phase</li>
          <li>Main Phase 2</li>
          <li>End Phase</li>
        </ol>
        <p className="how-to-play-ptags">
          <strong>Draw Phase</strong> - Player draws card and is given
          opportunity to activate Trap Cards or Quick-Play Spells.
        </p>
        <p className="how-to-play-ptags">
          <strong>Standby</strong> - Any effects that activate or costs that
          must be paid are completed in this phase.
        </p>
        <p className="how-to-play-ptags">
          <strong>Main Phase 1</strong> - Player may summon or set a monster,
          change monster battle positions, activate a card or effect, and/or set
          Spell & Trap cards.
        </p>
        <p className="how-to-play-ptags">
          <strong>Battle Phase</strong> - You can choose not to battle, in which
          case you will proceed to the end phase, but if you choose to enter in
          combat, follow these steps:
        </p>
        <ol className="how-to-play-ultags">
          <li>
            The player should announce "I'm entering the Battle Phase." (the
            player with first turn cannot conduct a Battle Phase on their first
            turn).
          </li>
          <li>
            Select one monster to attack with and choose your target. You can
            only perform a direct attack to your opponent's Life Points if your
            opponent has no monsters in the field. Each monster in the face-up
            attack position is allowed a single attack per turn (more about
            positions in the Monster Battle Rules section below).
          </li>
          <li>
            Calculate the result of the battle. (for questions about
            calculations, refer to Monster Battle Rules section further down).
          </li>
          <li>
            After you are done, announce to your opponent that you are ending
            the Battle Phase.
          </li>
        </ol>
        <p className="how-to-play-ptags">
          <strong>Main Phase 2</strong> - Same actions as Main Phase 1 unless
          you already summoned or set a monster within the current turn.
        </p>
        <p className="how-to-play-ptags">
          <strong>End Phase</strong> - Resolve card effects which activate in
          this phase and discard if you have more than six cards in your hand.
        </p>
        <div className="how-to-play-sub-header-sentences">
          Monster Battle Rules
        </div>
        <p className="how-to-play-ptags">
          There are 3 different positions cards can be in while on the
          battlefield:
        </p>
        <ul className="how-to-play-ultags">
          <li>Face-Up Attack Position</li>
          <li>Face-Up Defense Position</li>
          <li>Face-Down Defense Position</li>
        </ul>
        <p className="how-to-play-ptags">
          A monster card in the <strong>Face-up Attack</strong> position is able
          to declare attacks and can be attacked. In this position, the ATK
          value of the monster represents the card in a battle situation.
        </p>
        <p className="how-to-play-ptags">
          A monster card in the <strong>Face-up Defense</strong> position is not
          able to declare attacks, but it can be attacked. In this position, the
          DEF value of the monster represents the card in a battle situation.
          Monsters cannot be Normal Summoned in this position unless the effect
          of a card allows it.
        </p>
        <p className="how-to-play-ptags">
          A monster card in the <strong>Face-down Defense</strong> position goes
          by the same rules as the face-up Defense position except for two
          things; monsters CAN be summoned face-down but cannot be equipped. If
          a face-down monster is attacked, flip the card face-up during the
          damage step to calculate necessary damage, if any.
        </p>
        <p className="how-to-play-ptags">
          Attacking a monster in the Attack position is also different from
          attacking a Defense position monster. Here's how:
        </p>
        <ul className="how-to-play-ultags">
          <li>Attack vs Attack</li>
          <ul>
            <li>
              When your monster's ATK value is higher than the opponent's ATK
              value, the opponent's monster is sent to the Graveyard and the
              amount of excess ATK value is subtracted from the opponent's Life
              Points.
            </li>
            <li>
              When both monsters' ATK value is even, both monsters are sent to
              the Graveyard.
            </li>
            <li>
              When your monster's ATK value is lower than the opponent's ATK
              value, your monster is sent to the Graveyard and the amount of
              excess ATK value is subtracted from your Life Points.
            </li>
          </ul>
          <li>Attack vs Defense</li>
          <ul>
            <li>
              When your monster's ATK value is higher than your opponent's DEF
              value, the opponent's monster is sent to the Graveyard. No damage
              is done to Life Points.
            </li>
            <li>
              When both monsters' ATK and DEF value is even, it is a tie. No
              monsters are destroyed.
            </li>
            <li>
              When your monster's ATK value is lower than your opponent's DEF
              value, the amount of excess DEF value is subtracted from your Life
              Points. No monsters are destroyed.
            </li>
          </ul>
        </ul>
        <div className="how-to-play-sub-header-sentences">
          Card Effect Rules (Chains)
        </div>
        <p className="how-to-play-ptags">
          Every time a card with an effect is activated, the opponent of the
          player who activated the effect is given the opportunity to respond to
          that effect with an effect of their own. If they don't respond with an
          effect, the player that activated the first effect is given a chance
          to add another effect on top of the original and the cycle starts over
          again until both players choose to stop playing effects. When
          additional effects are added by either player, this creates a Chain.
        </p>
        <p className="how-to-play-ptags">
          If you want to respond to an effect and create a Chain, you must play
          an effect with a Spell Speed of 2 or higher and the respondent cannot
          be a lower Spell Speed than the effect played prior. Every card effect
          has a Spell Speed of 1 to 3. Here are the different types of Spell
          Speeds:
        </p>
        <ul className="how-to-play-ultags">
          <li>
            <strong>Spell Speed 1</strong> : Spells (Normal, Equip, Continuous,
            Field, Ritual), Monster Effects (Ignition, Trigger, and Flip)
          </li>
          <li>
            <strong>Spell Speed 2</strong> : Trap (Normal, Continuous),
            Quick-Play Spells, Effect Monster's Quick Effects
          </li>
          <li>
            <strong>Spell Speed 3</strong> : Counter Trap
          </li>
        </ul>
        <p className="how-to-play-ptags">
          The turn player always has priority with card effect activation. This
          means, they have the choice whether or not they want to use an effect
          and the opponent can only activate an effect if the turn player
          activates an effect and it creates a chain or if it is an effect that
          activates automatically, like a Trigger or Flip effect.
        </p>
        <div className="how-to-play-sub-header-sentences">Other Rules</div>
        <p className="how-to-play-ptags">
          Some cards have a higher restriction to the number of copies allowed
          in the deck (as opposed to the general 3 copy limit). A list of all
          card restrictions can be found on{" "}
          <a
            id="atag"
            href="https://www.yugioh-card.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.yugioh-card.com
          </a>
          .
        </p>
        <p className="how-to-play-ptags">
          <strong>Monster Tokens</strong> are monster cards that are summoned to
          the battlefield from the activation of a card's effect. It doesn't
          have to be a card, it just has to be a physical object that can show
          attack and defense position. Monster Tokens only exist in the
          battlefield and take up one of the five spots in the Monster Card
          Zone. When a Token is destroyed, it is removed from the field.
        </p>
        <p className="how-to-play-ptags">
          The number of cards in a player's hand, their decks, and their
          Graveyard, as well as a player's Life Points are all public knowledge.
        </p>
        <p className="how-to-play-ptags">
          A specific card effect takes priority over basic rules.
        </p>
        <p className="how-to-play-ptags">
          The Yu-Gi-Oh! card game is a complex one, but loads of fun once you're
          knee deep in monsters, spells, and good-old-fashioned duels. Now that
          you know how to play YuGiOh, you'll need to build up your deck. Check
          out our huge selection of YuGiOh cards and let the games begin!
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;
