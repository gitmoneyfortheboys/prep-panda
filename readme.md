# Prerequisites


After cloning from Git, run 'npm install' to generate the node_modules folder. This is necessary to run the app.

Run npm audit to see vulnerabilities. We need to address the 20 high and 9 critical attention vulnerabilities at some point. Ensure backup before running npm audit fix or npm audit fix --force.

# 10 Step UI creation plan

Consistent Spacing and Layout: Make sure your application has a consistent layout and spacing across all components. This includes the amount of space between components, text, and other elements on the page. You can achieve this by setting standard margin and padding rules across your app. Also, consider using CSS Grid or Flexbox layouts to ensure consistency.

Typography: Spend some time choosing and setting up the right typography for your app. A cohesive typographic hierarchy is important. Define your font-family, font-size, line-height, and font-weight for different elements (h1, h2, p, a etc.) in a global style sheet.

Buttons and Interactive Elements: Interactive elements like buttons should have hover, active, focus, and disabled states. This helps users understand what they can interact with and what the state of those elements is.

Animations and Transitions: Adding subtle animations and transitions can improve the overall UX and make your UI feel more polished. For instance, when a user answers a question, you could animate the transition to the next question. React has libraries such as react-spring and framer-motion that can help with this.

Feedback: It's important to provide users with feedback on their actions. This could be in the form of success messages, error messages, loaders, or even color changes.

Dark Mode: A lot of modern UIs provide a dark mode. You could consider adding a toggle switch that lets users switch to a dark mode if they prefer.

Icons: Using icons can enhance your UI's look and feel. They can make your application more intuitive and reduce the amount of text needed. Consider adding icons to the BottomNavBar.

Design System: Consider creating a design system. A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. Libraries like Storybook can help maintain this system.

Accessibility: Ensure your app is accessible to all users. This includes adding appropriate alt text to images, ensuring adequate color contrast, and making sure your app is keyboard navigable.

Performance: Make sure your app performs well and loads quickly. Use tools like Google Lighthouse to audit your app's performance and follow their recommendations for improvement.

Next prompt:
