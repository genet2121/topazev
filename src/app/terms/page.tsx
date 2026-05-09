import Link from 'next/link';
import LegalDocLayout from '../LegalDocLayout';

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms and conditions for using the AddisEV website and related marketing content.',
};

export default function TermsOfUsePage() {
  return (
    <LegalDocLayout
      title="Terms of Use"
      subtitle="By accessing addisev.com you agree to these terms. If you do not agree, please do not use the site."
      breadcrumbCurrent="Terms of Use"
      lastUpdated="May 9, 2026"
    >
      <section className="space-y-4">
        <h2>1. Agreement</h2>
        <p>
          These Terms of Use (“Terms”) govern your access to and use of the AddisEV website and
          related marketing materials (collectively, the “Site”). The Site is operated by AddisEV
          (“we”, “us”). Additional terms may apply to specific products, trials, or agreements; where
          they conflict with these Terms on a specific offering, those specific terms control for
          that offering.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Not professional advice</h2>
        <p>
          Content on the Site is for general information only. It is not legal, regulatory,
          engineering, or financial advice. You are responsible for your own compliance and
          decisions regarding EV charging, software, and infrastructure.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in violation of law or third-party rights;</li>
          <li>Attempt to gain unauthorized access to our systems, accounts, or data;</li>
          <li>Interfere with or disrupt the Site or other users (including malware, overload, or scraping that impairs service);</li>
          <li>Use automated means to access the Site in a way that sends more requests than a human reasonably would, except public search engines indexing for discovery as generally permitted;</li>
          <li>Misrepresent your identity or affiliation.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>4. Intellectual property</h2>
        <p>
          The Site, its design, text, graphics, logos, and other materials are owned by AddisEV or
          our licensors and are protected by intellectual property laws. Open-source software made
          available under separate licenses remains subject to those licenses. Except as expressly
          allowed (e.g. temporary copies in your browser, or rights under an open-source license),
          you may not copy, modify, distribute, or create derivative works without our prior written
          consent.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Third-party links</h2>
        <p>
          The Site may link to third-party sites or services. We are not responsible for their
          content, policies, or practices. Your use of third-party services is at your own risk.
        </p>
      </section>

      <section className="space-y-4">
        <h2>6. Disclaimers</h2>
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY LAW.
        </p>
      </section>

      <section className="space-y-4">
        <h2>7. Limitation of liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, ADDISEV AND ITS AFFILIATES, OFFICERS, DIRECTORS,
          EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM
          YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL
          LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE SITE WILL NOT EXCEED THE GREATER
          OF (A) THE AMOUNT YOU PAID US FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM IN THE
          TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED US DOLLARS (US$100), IF YOU HAVE NOT PAID
          US ANYTHING FOR THAT SERVICE.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those cases, our liability is
          limited to the maximum permitted by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>8. Indemnity</h2>
        <p>
          You will defend and indemnify AddisEV and its affiliates against claims, damages, losses,
          and expenses (including reasonable attorneys’ fees) arising from your misuse of the Site or
          violation of these Terms, to the extent permitted by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>9. Suspension and termination</h2>
        <p>
          We may suspend or terminate access to the Site at any time, with or without notice, for
          conduct that we believe violates these Terms or harms other users, us, or third parties.
        </p>
      </section>

      <section className="space-y-4">
        <h2>10. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which AddisEV primarily
          operates, without regard to conflict-of-law rules. Courts in that jurisdiction have
          exclusive jurisdiction over disputes, unless applicable law requires otherwise.
        </p>
      </section>

      <section className="space-y-4">
        <h2>11. Privacy</h2>
        <p>
          Our collection and use of personal data is described in the{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>12. Changes</h2>
        <p>
          We may modify these Terms by posting an updated version on the Site and updating the “Last
          updated” date. Continued use after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2>13. Contact</h2>
        <p>
          For questions about these Terms, use our <Link href="/contact">contact form</Link> or
          email <a href="mailto:sales@addisev.com">sales@addisev.com</a>.
        </p>
      </section>
    </LegalDocLayout>
  );
}
