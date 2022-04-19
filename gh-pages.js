import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'master',
  repo: 'https://github.com/rboddy/ccss_landing.git', // Update to point to your repository
  user: {
   name: 'Ryan Boddy', // update to use your name
   email: 'avidryanb@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);