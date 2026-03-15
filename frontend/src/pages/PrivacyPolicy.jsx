import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm">
        <header className="mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Legal
          </span>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mt-4 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Last Updated: March 2026</p>
        </header>

        <article className="prose dark:prose-invert prose-blue max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At <strong>The Offer Diary</strong>, we collect information you provide directly to us when you create an account, 
              post an interview experience, or communicate with us. This may include your username, email address, and the 
              professional details shared in your "diaries."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Use Your Data</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use the information to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Provide and maintain our community platform.</li>
              <li>Authenticate your identity via JWT for secure access.</li>
              <li>Display your interview experiences to other community members.</li>
              <li>Send technical notices and support messages.</li>
            </ul>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">3. Data Sharing</h3>
            <p className="text-blue-800 dark:text-blue-400 text-sm italic">
              "We do not sell your personal data. Your interview experiences are public by design to help the community, 
              but your private account details remain secure."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use local storage and cookies to remember your theme preferences (Dark/Light mode) and your login session status.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}