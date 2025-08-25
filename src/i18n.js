import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Stay in the know": "Stay in the know",
      "Be the first to know about new arrivals, sales & promos!": "Be the first to know about new arrivals, sales & promos!",
      "Enter your email address": "Enter your email address",
      "Subscribe to newsletter": "Subscribe to newsletter",
      "Thank you for subscribing!": "Thank you for subscribing!",
      "Please enter a valid email address": "Please enter a valid email address",
      "Something went wrong. Please try again.": "Something went wrong. Please try again.",
      "Shop by Category": "Shop by Category",
      "Loading products...": "Loading products...",
      "Loading testimonials...": "Loading testimonials...",
      "Loading images...": "Loading images...",
      "Oops! Something went wrong": "Oops! Something went wrong",
      "Failed to load products. Please try again later.": "Failed to load products. Please try again later.",
      "Try Again": "Try Again",
      "Shop": "Shop",
      "Add to Cart": "Add to Cart",
      "Your Cozy Era": "Your Cozy Era",
      "Get peak comfy-chic with new winter essentials.": "Get peak comfy-chic with new winter essentials.",
      "SHOP NOW": "SHOP NOW"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;