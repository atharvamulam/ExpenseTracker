import { atom } from "recoil";

export const stateAtom = atom({
  key: "stateAtom",
  default: 0,
});

export const isVisibleAtom = atom({
  key: "isVisibleAtom",
  default: false,
});

export const data = [
  {
    screen: 1,
    money: 50,
    happiness: 50,
    mcq: "What is your goal?",
    ans1: "To Become Rich",
    ans2: "To Become Wealthy",
    exp1: (
      <>
        <p>
          Being rich means having a lot of money right now, like from a big
          salary or lottery win, for luxury spending.
        </p>
      </>
    ),
    exp2: (
      <>
        <p>
          Being wealthy means having investments and assets that keep making
          money over time, allowing for long-term financial security.
        </p>
      </>
    ),
    desc: (
      <>
        <p>
          You just received a ₹1,00,000{" "}
          <a
            href="#"
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="A dividend is a share of profits and retained earnings that a company pays out to its shareholders and owners."
          >
            dividend
          </a>{" "}
          from{" "}
          <a
            href="#"
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="A share represents a unit of equity ownership in a company. Shareholders are entitled to any profits that the company may earn in the form of dividends."
          >
            shares
          </a>{" "}
          your father invested in years ago.
        </p>
        <p>
          Now, it's up to you to grow this money. Can you invest wisely, save
          smartly, and make the most of this windfall to secure a brighter
          financial future for your family?
        </p>
        <p>
          Join the journey in "Finance Made Easy" to convert it into a fortune
        </p>
      </>
    ),
    i1: 1,
    i2: 3,
  },
  {
    screen: 2,
    money: 30,
    happiness: 70,
    mcq: (
      <>
        <p>Make the best choice !!!</p>
      </>
    ),
    ans1: <>Buy A BMW</>,
    ans2: <>Buy Expensive Clothes & Party Weekends</>,
    exp1: "",
    exp2: "",
    desc: (
      <>
        <p>So you want to become rich and live a lavish life</p>
      </>
    ),
    i1: 2,
    i2: 2,
  },
  {
    screen: 3,
    money: 30,
    happiness: 30,
    mcq: <>Better decisions better life, Choose wisely</>,
    ans1: "Change The Goal",
    ans2: "Exit",
    exp1: (
      <>
        <p>
          Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.
        </p>
        <p>~ Warren Buffett</p>
      </>
    ),
    exp2: (
      <>
        <p>
          The Depression taught me what frugality means and the importance of
          not losing money.
        </p>
        <p>~ Irving Kahn</p>
      </>
    ),
    desc: (
      <>
        <p>
          Any of the choice increased your happiness to a great extent but for
          only a certain period of time
        </p>
        <p>
          You lost a substantial amount of money and in the long term its a
          disastrous decision
        </p>
        <p> Let's Try Again</p>
      </>
    ),
    i1: 0,
    i2: 0,
  },
  {
    screen: 4,
    money: 70,
    happiness: 60,
    mcq: <>What do you choose to attain this goal?</>,
    ans1: (
      <>
        <p>Liabilities</p>
        <p>(Let's see how you work for money)</p>
      </>
    ),
    ans2: (
      <>
        <p>Assets</p>
        <p>(Let's see how your money works for you)</p>
      </>
    ),
    exp1: (
      <>
        <p>
          Liabilities are debts you owe, like loans and credit card balances,
          that require future payments.
        </p>
      </>
    ),
    exp2: (
      <>
        <p>
          Assets are valuable resources you own, like cash, investments, and
          property, that can generate income or be sold.
        </p>
      </>
    ),
    desc: (
      <>
        <p style={{ color: "lightgreen" }}>
          'Pursuing Wealth through hard Work and perseverance - path to
          fulfillment'
        </p>
      </>
    ),
    i1: 4,
    i2: 6,
  },
  {
    screen: 5,
    money: 40,
    happiness: 40,
    mcq: <>So what do you want to buy</>,
    ans1: (
      <>
        <p>
          Buy a car using{" "}
          <a
            href="#"
            style={{ color: "white" }}
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="Car loan is money borrowed from a bank or lender to buy a car, repaid over time with interest."
          >
            car Loan
          </a>
        </p>
      </>
    ),
    ans2: (
      <>
        <p>
          Buy a home using{" "}
          <a
            href="#"
            style={{ color: "white" }}
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="Home loan is money borrowed from a bank or lender to purchase a house or property, repaid over time with interest."
          >
            home Loan
          </a>
        </p>
      </>
    ),
    exp1: (
      <>
        <p>
          Debt is like any other trap, easy enough to get into, but hard enough
          to get out of.
        </p>
        <p>HENRY WHEELER SHAW</p>
      </>
    ),
    exp2: (
      <>
        <p>Debt is the slavery of the free.</p>
        <p>Publilius Syrus</p>
      </>
    ),
    desc: (
      <>
        <p style={{ color: "Red" }}>
          "Chains of habit are too light to be felt until they are too heavy to
          be broken." - Warren Buffet
        </p>
      </>
    ),
    i1: 5,
    i2: 5,
  },
  {
    screen: 6,
    money: 30,
    happiness: 35,
    mcq: <>Better decisions better life, Choose wisely</>,
    ans1: (
      <>
        <p>Try Again</p>
      </>
    ),
    ans2: (
      <>
        <p>Exit</p>
      </>
    ),
    exp1: (
      <>
        <p>
          Debt is like any other trap, easy enough to get into, but hard enough
          to get out of.
        </p>
        <p>Henry Wheller Shaw</p>
      </>
    ),
    exp2: (
      <>
        <p>Debt is the slavery of the free.</p>
        <p>Publilius Syrus</p>
      </>
    ),
    desc: (
      <>
        <p>
          As you can see, buying any of the above things reduced your money.
        </p>
        <p>
          Upon that you are paying extra money than required in the form of{" "}
          <a
            href="#"
            data-bs-toggle="tooltip"
            title="Interest is the cost of borrowing money, or the return on invested capital, expressed as a percentage of the amount borrowed or invested."
          >
            interest
          </a>{" "}
          and its value is{" "}
          <a
            href="#"
            data-bs-toggle="tooltip"
            title="Depreciation is the decrease in value of an asset over time due to wear and tear, usage, age, or other factors."
          >
            depreciating
          </a>
        </p>
        <p> And most importantly, Money that could have been invested is wasted !!!</p>
      </>
    ),
    i1: 3,
    i2: 0,
  },
  {
    screen: 7,
    money: 65,
    happiness: 65,
    mcq: <>Which is a better asset</>,
    ans1: (
      <>
        <p>Fixed Deposit</p>
      </>
    ),
    ans2: (
      <>
        <p>Stocks</p>
      </>
    ),
    exp1: (
      <>
        <p>
          Fixed deposits are secure bank investments where you deposit money for
          a set period and earn guaranteed interest.
        </p>
      </>
    ),
    exp2: (
      <>
        <p>
          Stocks are investments where you buy shares in a company, potentially
          earning profits or losses based on the company's performance.
        </p>
      </>
    ),
    desc: (
      <>
        <p style={{ color: "lightgreen" }}>
          "I will tell you how to become wealthy. Close the doors. Be fearful
          when others are greedy. Be greedy when others are fearful." — Warren
          Buffett
        </p>
      </>
    ),
    i1: 7,
    i2: 8,
  },
  {
    screen: 8,
    money: 64,
    happiness: 64,
    mcq: <>Choose wisely</>,
    ans1: (
      <>
        <p>Try Again</p>
      </>
    ),
    ans2: (
      <>
        <p>Exit</p>
      </>
    ),
    exp1: (
      <>
        <p>
          Fixed deposits are secure bank investments where you deposit money for
          a set period and earn guaranteed interest.
        </p>
      </>
    ),
    exp2: (
      <>
        <p>
          Stocks are investments where you buy shares in a company, potentially
          earning profits or losses based on the company's performance.
        </p>
      </>
    ),
    desc: (
      <>
        <p>
          You invested in FD's and your friend Alex invested in stocks he got a
          whooping return of 20% and you were barely able to beat the{" "}
          <a
            href="#"
            data-bs-toggle="tooltip"
            title="Inflation is the gradual increase in prices of goods and services over time, reducing the purchasing power of money."
          >
            inflation
          </a>
        </p>
        <p> as you can see your money is nearly constant !!!</p>
      </>
    ),
    i1: 6,
    i2: 0,
  },
  {
    screen: 9,
    money: 70,
    happiness: 70,
    mcq: <>So what do you choose</>,
    ans1: (
      <>
        <p>Diversify your money</p>
      </>
    ),
    ans2: (
      <>
        <p>Put all your money in stocks</p>
      </>
    ),
    exp1: (
      <>
        <p>
          Diversified investing involves spreading investments across different
          assets or sectors to reduce risk and improve potential returns.
        </p>
      </>
    ),
    exp2: (
      <>
        <p>Don't put all your eggs in the same basket</p>
      </>
    ),
    desc: (
      <>
        <p>
          It's a great option to start with as it can give high returns. But
          with high returns comes high risk!!!
        </p>
      </>
    ),
    i1: 9,
    i2: 10,
  },
  {
    screen: 10,
    money: 90,
    happiness: 90,
    mcq: <>You are a Star Investor</>,
    ans1: (
      <>
        <p>Play again</p>
      </>
    ),
    ans2: (
      <>
        <p>Exit</p>
      </>
    ),
    exp1: <></>,
    exp2: <></>,
    desc: (
      <>
        <p>
          WooHoo !!! you have succeeded in significantly increasing your fortune
          from 1,00,000 to 10,00,000,
        </p>
        <p>by taking safe bets and diversifying your money in various assets</p>
      </>
    ),
    i1: 0,
    i2: 0,
  },
  {
    screen: 11,
    money: 30,
    happiness: 30,
    mcq: <>Investments are subjected to market risk, read all policies carefully !!!!!</>,
    ans1: (
      <>
        <p>Try again</p>
      </>
    ),
    ans2: (
      <>
        <p>Exit</p>
      </>
    ),
    exp1: <></>,
    exp2: <></>,
    desc: (
      <>
        <p>
          <p style={{ color: "red" }}>OOPs You have lost 50% of money</p>
        </p>
      </>
    ),
    i1: 6,
    i2: 0,
  },
];
