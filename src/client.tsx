type AppScreen = {
  id: string;
  title: string;
  flow: 'Onboarding' | 'Authentication' | 'Browse' | 'Checkout' | 'Account';
  highlights: string[];
};

type MissingFeature = {
  name: string;
  detail: string;
};

const screens: AppScreen[] = [
  { id: '01', title: 'Splash', flow: 'Onboarding', highlights: ['Brand intro', 'Minimal welcome state'] },
  { id: '02', title: 'Onboarding 1', flow: 'Onboarding', highlights: ['Fresh recipes message', 'Illustrated card'] },
  { id: '03', title: 'Onboarding 2', flow: 'Onboarding', highlights: ['Fast delivery message', 'Step indicator'] },
  { id: '04', title: 'Onboarding 3', flow: 'Onboarding', highlights: ['Easy payment message', 'Get started CTA'] },

  { id: '05', title: 'Sign In', flow: 'Authentication', highlights: ['Email/password', 'Social auth links'] },
  { id: '06', title: 'Sign Up', flow: 'Authentication', highlights: ['Registration fields', 'Create account CTA'] },
  { id: '07', title: 'Forgot Password', flow: 'Authentication', highlights: ['Email recovery', 'Send link CTA'] },
  { id: '08', title: 'Register Phone', flow: 'Authentication', highlights: ['Phone input', 'Country code selector'] },
  { id: '09', title: 'Phone Verification', flow: 'Authentication', highlights: ['OTP keypad', 'Code entry slots'] },

  { id: '10', title: 'Home Dashboard', flow: 'Browse', highlights: ['Delivery card', 'Popular offers'] },
  { id: '11', title: 'Explore', flow: 'Browse', highlights: ['Top orders', 'Category tabs'] },
  { id: '12', title: 'Search Result', flow: 'Browse', highlights: ['Dish listing', 'Prices + sort'] },
  { id: '13', title: 'Product Detail', flow: 'Browse', highlights: ['Large hero image', 'Ingredients + add to cart'] },
  { id: '14', title: 'Category Grid', flow: 'Browse', highlights: ['Taste filters', 'Dish cards'] },
  { id: '15', title: 'Favorites', flow: 'Browse', highlights: ['Saved items', 'Quick reorder'] },

  { id: '16', title: 'Transaction List', flow: 'Checkout', highlights: ['Recent top-ups', 'Order transaction card'] },
  { id: '17', title: 'Top Up Amount', flow: 'Checkout', highlights: ['Numeric keypad', 'Set amount'] },
  { id: '18', title: 'Select Funding Card', flow: 'Checkout', highlights: ['Saved cards', 'Add new card action'] },
  { id: '19', title: 'Top Up Success', flow: 'Checkout', highlights: ['Success state', 'Updated balance'] },
  { id: '20', title: 'Wallet Overview', flow: 'Checkout', highlights: ['Balance panel', 'Wallet options'] },
  { id: '21', title: 'Cart', flow: 'Checkout', highlights: ['Line items', 'Checkout total'] },
  { id: '22', title: 'Delivery Address', flow: 'Checkout', highlights: ['Address picker', 'Delivery method'] },
  { id: '23', title: 'Payment Method', flow: 'Checkout', highlights: ['Card selector', 'Payment summary'] },
  { id: '24', title: 'Order Review', flow: 'Checkout', highlights: ['Delivery + item review', 'Place order CTA'] },

  { id: '25', title: 'Add New Card', flow: 'Account', highlights: ['Card form fields', 'Save card CTA'] },
  { id: '26', title: 'Empty Payment', flow: 'Account', highlights: ['No card illustration', 'Add card action'] },
  { id: '27', title: 'Empty Cart', flow: 'Account', highlights: ['Zero items state', 'Go shopping CTA'] },
  { id: '28', title: 'Rate Order', flow: 'Account', highlights: ['Star rating', 'Submit review'] },
  { id: '29', title: 'Feedback', flow: 'Account', highlights: ['Emoji mood selector', 'Feedback text'] },
  { id: '30', title: 'Profile', flow: 'Account', highlights: ['Favorite list', 'Quick profile actions'] },
  { id: '31', title: 'Chat Support', flow: 'Account', highlights: ['Conversation thread', 'Composer input'] }
];

const missingFeatures: MissingFeature[] = [
  { name: 'Live map rider tracking', detail: 'Mockup shows progress cards, but not map + live courier movement.' },
  { name: 'Order issue workflow', detail: 'Missing screens for refunds, missing items, and dispute resolution.' },
  { name: 'Notification inbox', detail: 'No complete list/history of delivery, promo, and payment notifications.' },
  { name: 'Offline + error states', detail: 'No dedicated states for API failure, timeout, or network recovery.' },
  { name: 'Accessibility variants', detail: 'No large text, high contrast, or screen-reader-focused layouts.' }
];

const flowOrder: AppScreen['flow'][] = ['Onboarding', 'Authentication', 'Browse', 'Checkout', 'Account'];

function ScreenCard(props: { screen: AppScreen }) {
  const { screen } = props;
  return (
    <article className="phone-card">
      <div className="phone-notch" />
      <div className="phone-content">
        <p className="screen-id">#{screen.id}</p>
        <h3>{screen.title}</h3>
        <p className="screen-flow">{screen.flow}</p>
        <ul>
          {screen.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="phone-home-indicator" />
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="kicker">React + Express</p>
        <h1>AIRI Mockup — Screen by Screen</h1>
        <p>
          This implementation now follows your request: each UI is represented as an individual screen card, grouped
          by flow, instead of one summary-only page.
        </p>
      </header>

      {flowOrder.map((flow) => {
        const flowScreens = screens.filter((screen) => screen.flow === flow);
        return (
          <section className="panel" key={flow}>
            <h2>{flow}</h2>
            <div className="screen-grid">
              {flowScreens.map((screen) => (
                <div key={screen.id}>
                  <ScreenCard screen={screen} />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="panel missing">
        <h2>Missing Features (recommended next)</h2>
        <ul className="missing-list">
          {missingFeatures.map((feature) => (
            <li key={feature.name}>
              <strong>{feature.name}</strong>
              <span>{feature.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootEl).render(<App />);
