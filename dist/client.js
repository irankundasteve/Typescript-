"use strict";
const screens = [
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
const missing = [
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
    return (React.createElement("main", { className: "page" },
        React.createElement("section", { className: "hero" },
            React.createElement("p", { className: "kicker" }, "React Frontend + Express Backend"),
            React.createElement("h1", null, "AIRI Food Mockup Rebuild"),
            React.createElement("p", null, "Implemented as a React UI and designed for an Express API/backend integration. The cards below map the screens visible in your provided mockup.")),
        React.createElement("section", { className: "panel" },
            React.createElement("h2", null, "Screen Coverage"),
            React.createElement("div", { className: "screen-grid" }, screens.map((screen) => (React.createElement("article", { key: screen.title, className: `screen-card ${screen.tone === 'blue' ? 'blue' : ''}` },
                React.createElement("h3", null, screen.title),
                React.createElement("p", null, screen.subtitle)))))),
        React.createElement("section", { className: "panel" },
            React.createElement("h2", null, "Missing Features to Implement Next"),
            React.createElement("ul", { className: "feature-list" }, missing.map((item) => (React.createElement("li", { key: item.feature },
                React.createElement("strong", null, item.feature),
                React.createElement("span", null, item.whyItMatters))))))));
}
const rootEl = document.getElementById('root');
if (!rootEl) {
    throw new Error('Root element not found');
}
ReactDOM.createRoot(rootEl).render(React.createElement(App, null));
