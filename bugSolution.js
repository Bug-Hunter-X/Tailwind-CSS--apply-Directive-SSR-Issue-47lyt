This solution uses Next.js's `getStaticProps` or `getServerSideProps` to ensure that Tailwind has processed all CSS before the component renders. This approach also uses the `purge` option in `tailwind.config.js` to specifically target the necessary CSS classes.

**tailwind.config.js**
```javascript
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'], // Add paths to your components
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

**pages/index.js (or your page component)**
```javascript
import MyComponent from '../components/MyComponent';

export async function getStaticProps() {
  return {
    props: {}
  };
}

function MyPage() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default MyPage;
```

**components/MyComponent.js**
```javascript
function MyComponent() {
  return (
    <div class="bg-blue-500 p-4 text-white @apply rounded-lg">
      This component should have a blue background and rounded corners.
    </div>
  );
}

export default MyComponent;
```