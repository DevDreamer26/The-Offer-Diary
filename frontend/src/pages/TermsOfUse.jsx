import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm">
        <header className="mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
          <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Agreement
          </span>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mt-4 mb-2">Terms of Use</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Effective Date: March 2026</p>
        </header>

        <article className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              By accessing <strong>The Offer Diary</strong>, you agree to be bound by these Terms of Use and all applicable laws 
              and regulations. If you do not agree, you are prohibited from using this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Content Guidelines</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When sharing interview experiences, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Provide honest and accurate information.</li>
              <li>Not share NDA-protected (Non-Disclosure Agreement) specific questions that violate legal contracts.</li>
              <li>Avoid hate speech, harassment, or defamatory content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. User Responsibility</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept 
              responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              The Offer Diary is provided "as is." We do not guarantee that the interview experiences shared will 
              lead to a job offer or represent the current hiring bar of any specific company.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}