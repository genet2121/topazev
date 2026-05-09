import Link from 'next/link';
import LegalDocLayout from '../LegalDocLayout';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How AddisEV collects, uses, and protects personal data when you use our website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocLayout
      title="Privacy Policy"
      subtitle="This policy explains how we handle personal information when you visit addisev.com or contact us. It is meant to be clear and practical—not a substitute for legal advice."
      breadcrumbCurrent="Privacy Policy"
      lastUpdated="May 9, 2026"
    >
      <section className="space-y-4">
        <h2>1. Who we are</h2>
        <p>
          <strong>AddisEV</strong> (“we”, “us”) provides information and communications about an
          open-source EV charging platform. When this policy refers to “the site”, we mean our public
          marketing website and related pages operated under the AddisEV brand.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. What data we collect</h2>
        <p>Depending on how you use the site, we may process:</p>
        <ul>
          <li>
            <strong>Contact and inquiry data</strong> — name, email, phone, company, and message
            content you submit via forms or email.
          </li>
          <li>
            <strong>Technical and usage data</strong> — IP address, browser type, device type,
            approximate location derived from IP, pages viewed, and timestamps. Some of this may be
            collected via cookies or similar technologies.
          </li>
          <li>
            <strong>Communications</strong> — records of correspondence when you email us or we
            respond to a request.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>3. How we use your data</h2>
        <p>We use personal data to:</p>
        <ul>
          <li>Respond to inquiries and provide information you requested;</li>
          <li>Operate, secure, and improve the site;</li>
          <li>Analyze aggregate usage to understand performance and interest in our content;</li>
          <li>Comply with law and protect our rights and users.</li>
        </ul>
        <p>
          We do not sell your personal information. Marketing communications, if any, will be sent
          only where permitted and with a way to opt out.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. Legal bases (where GDPR-style rules apply)</h2>
        <p>
          If applicable law requires a “legal basis”, we rely on: <strong>contract</strong> or{' '}
          <strong>pre-contract steps</strong> (responding to your request);{' '}
          <strong>legitimate interests</strong> (secure operation, analytics that do not override
          your rights); and <strong>consent</strong> (e.g. non-essential cookies or mailing lists,
          where we ask for it). You may withdraw consent where processing is consent-based.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Sharing and processors</h2>
        <p>
          We may share data with service providers who host the site, deliver email, or provide
          analytics—only as needed for those services and under appropriate safeguards. We may
          disclose information if required by law or to protect safety and rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2>6. International transfers</h2>
        <p>
          Our providers may process data in countries other than yours. Where required, we use
          appropriate transfer mechanisms (such as standard contractual clauses) or rely on
          exemptions permitted by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>7. Retention</h2>
        <p>
          We keep personal data only as long as needed for the purposes above, including legal,
          accounting, or reporting requirements. Inquiry data is typically retained for a limited
          period unless a longer relationship or obligation applies.
        </p>
      </section>

      <section className="space-y-4">
        <h2>8. Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete, restrict, or
          object to certain processing, and to data portability. You may also lodge a complaint with
          a supervisory authority. To exercise rights, contact us using the details at the bottom of
          this page.
        </p>
      </section>

      <section className="space-y-4">
        <h2>9. Cookies</h2>
        <p>
          We may use cookies and similar technologies for essential site function, preferences, and
          analytics. You can control cookies through your browser and through any cookie banner we
          provide. See also our{' '}
          <Link href="/terms">Terms of Use</Link> for general rules on using the site.
        </p>
      </section>

      <section className="space-y-4">
        <h2>10. Children</h2>
        <p>
          The site is not directed at children under 16. We do not knowingly collect personal
          information from children. If you believe we have, please contact us and we will take
          appropriate steps.
        </p>
      </section>

      <section className="space-y-4">
        <h2>11. Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the top will change
          when we do. Material changes may be highlighted on the site or by other reasonable means.
        </p>
      </section>
    </LegalDocLayout>
  );
}
