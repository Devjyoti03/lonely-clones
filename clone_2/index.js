// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form data
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  
  // Create data object
  const formData = {
    name: name,
    email: email,
    timestamp: new Date().toISOString()
  };
  
  // Store in localStorage
  const existingData = JSON.parse(localStorage.getItem('subscriptions')) || [];
  existingData.push(formData);
  localStorage.setItem('subscriptions', JSON.stringify(existingData));
  
  // Show success message
  alert('Subscription data saved successfully!');
  
  // Clear form
  this.reset();
});

// Get all subscriptions
function getSubscriptions() {
  return JSON.parse(localStorage.getItem('subscriptions')) || [];
}

// Display stored data
function displaySubscriptions() {
  const subscriptions = getSubscriptions();
  console.log('Stored subscriptions:', subscriptions);
  
  subscriptions.forEach((sub, index) => {
    console.log(`${index + 1}. Name: ${sub.name}, Email: ${sub.email}`);
  });
}

// Get single entry
function getSingleSubscriber() {
  const name = localStorage.getItem('subscriberName');
  const email = localStorage.getItem('subscriberEmail');
  return { name, email };
}

console.log(displaySubscriptions())
