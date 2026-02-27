type AppScreen = {
  title: string;
  subtitle: string;
  tone?: 'blue' | 'light';
};

type FeatureGap = {
  feature: string;
  whyItMatters: string;
};

const screens: AppScreen[] = [
  { title: 'Splash', subtitle: 'Brand landing and welcome animation', tone: 'blue' },
  { title: 'Onboarding', subtitle: 'Three-step product value walkthrough', tone: 'blue' },
  { title: 'Sign In', subtitle: 'Email/password entry with social options' },
  { title: 'Sign Up', subtitle: 'Registration with validation fields' },
  { title: 'Explore', subtitle: 'Category tabs, promotions, and top order cards' },
  { title: 'Product Detail', subtitle: 'Image, ingredients, quantity, and add-to-cart CTA' },
  { title: 'Cart', subtitle: 'Line items, subtotal, and checkout action' },
  { title: 'Payment', subtitle: 'Card picker, wallet top-up, and amount keypad' },
  { title: 'Delivery', subtitle: 'Address selector and delivery progress state' },
  { title: 'Rating', subtitle: 'Post-order review with stars and feedback form' },
  { title: 'Profile', subtitle: 'Favorites, history, and quick actions' },
  { title: 'Chat', subtitle: 'Live support conversation UI' }
];

const missing: FeatureGap[] = [
  {
    feature: 'Live map + courier tracking',
    whyItMatters: 'Users expect real-time rider location and ETA confidence after payment.'
  },
  {
    feature: 'Robust error/edge states',
    whyItMatters: 'Missing states for payment failures, offline mode, and empty API responses.'
  },
  {
    feature: 'End-to-end accessibility',
    whyItMatters: 'Need text scaling, keyboard navigation, ARIA labels, and contrast guarantees.'
  },
  {
    feature: 'Notification center',
    whyItMatters: 'A full inbox is needed beyond one-off notification screens.'
  },
  {
    feature: 'Refunds and issue resolution',
    whyItMatters: 'Users need clear post-order support for missing/wrong/damaged items.'
  }
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">React Frontend + Express Backend</p>
        <h1>AIRI Food Mockup Rebuild</h1>
        <p>
          Implemented as a React UI and designed for an Express API/backend integration. The cards below map the
          screens visible in your provided mockup.
        </p>
      </section>

      <section className="panel">
        <h2>Screen Coverage</h2>
        <div className="screen-grid">
          {screens.map((screen) => (
            <article key={screen.title} className={`screen-card ${screen.tone === 'blue' ? 'blue' : ''}`}>
              <h3>{screen.title}</h3>
              <p>{screen.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Missing Features to Implement Next</h2>
        <ul className="feature-list">
          {missing.map((item) => (
            <li key={item.feature}>
              <strong>{item.feature}</strong>
              <span>{item.whyItMatters}</span>
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
