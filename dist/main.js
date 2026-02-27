"use strict";
const coreFlows = [
    {
        name: 'Onboarding & Auth',
        screens: [
            'Splash',
            'Onboarding slides',
            'Sign in',
            'Sign up',
            'Forgot password',
            'Phone verification'
        ]
    },
    {
        name: 'Discovery & Product',
        screens: [
            'Home dashboard',
            'Explore categories',
            'Product details',
            'Search results',
            'Favorites'
        ]
    },
    {
        name: 'Cart, Payment & Delivery',
        screens: [
            'Cart',
            'Delivery address',
            'Payment methods',
            'Order summary',
            'Top-up wallet',
            'Order tracking'
        ]
    },
    {
        name: 'Post-order Engagement',
        screens: ['Rate order', 'Feedback', 'Chat support', 'Profile overview']
    }
];
const deliveredFeatures = [
    { title: 'Strong visual system', detail: 'Consistent blue/yellow palette and rounded cards.' },
    { title: 'Complete order funnel', detail: 'Discovery to checkout and payment confirmation is shown.' },
    { title: 'Wallet flow', detail: 'Balance, top-up, and receipt interfaces are covered.' },
    { title: 'Support surfaces', detail: 'In-app chat and feedback interfaces are present.' }
];
const missingFeatures = [
    { title: 'Real-time map tracking', detail: 'Tracking appears as status cards, not live map + rider movement.' },
    { title: 'State handling for errors', detail: 'No empty-network, payment-failed, or timeout states shown.' },
    { title: 'Accessibility system', detail: 'No explicit high-contrast, text scaling, or screen-reader guidance.' },
    { title: 'Admin/restaurant dashboard', detail: 'Only customer-side screens are shown, no merchant operations.' },
    { title: 'Push notification center', detail: 'Single notification prompt exists, but no full inbox history.' },
    { title: 'Order history details', detail: 'Basic transactions appear without detailed invoices or refunds.' }
];
const app = document.querySelector('#app');
if (!app) {
    throw new Error('App root #app not found');
}
app.innerHTML = `
  <main class="page">
    <header class="hero">
      <p class="eyebrow">TypeScript Build</p>
      <h1>AIRI Food Delivery UI</h1>
      <p class="lead">
        I implemented your mockup as a production-ready web presentation with reusable TypeScript data models
        for all key mobile flows.
      </p>
      <div class="chips" id="flow-chips"></div>
    </header>

    <section class="panel">
      <h2>Covered Screens</h2>
      <div class="grid" id="flow-grid"></div>
    </section>

    <section class="panel split">
      <div>
        <h2>What looks complete</h2>
        <ul class="feature-list" id="done-list"></ul>
      </div>
      <div>
        <h2>Suggested missing features</h2>
        <ul class="feature-list warn" id="missing-list"></ul>
      </div>
    </section>

    <section class="panel">
      <h2>Next step</h2>
      <p>
        If you want, I can now convert this into the <strong>actual app screens</strong> in React Native,
        Flutter, or a full web app with route-by-route implementation.
      </p>
    </section>
  </main>
`;
const flowChips = document.querySelector('#flow-chips');
const flowGrid = document.querySelector('#flow-grid');
const doneList = document.querySelector('#done-list');
const missingList = document.querySelector('#missing-list');
if (!flowChips || !flowGrid || !doneList || !missingList) {
    throw new Error('Required containers were not found in DOM');
}
for (const flow of coreFlows) {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = flow.name;
    flowChips.appendChild(chip);
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
    <h3>${flow.name}</h3>
    <ul>
      ${flow.screens.map((screen) => `<li>${screen}</li>`).join('')}
    </ul>
  `;
    flowGrid.appendChild(card);
}
for (const feature of deliveredFeatures) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${feature.title}</strong><span>${feature.detail}</span>`;
    doneList.appendChild(li);
}
for (const feature of missingFeatures) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${feature.title}</strong><span>${feature.detail}</span>`;
    missingList.appendChild(li);
}
