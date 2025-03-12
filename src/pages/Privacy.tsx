
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: August 2023
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-6">
              WowPromo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our platform. Please read this
              Privacy Policy carefully. By using our platform, you consent to the data practices described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-1">
                <strong>Personal Identification Information:</strong> Name, email address, phone number, business
                information, and other similar information.
              </li>
              <li className="mb-1">
                <strong>Account Information:</strong> Login credentials and preferences.
              </li>
              <li className="mb-1">
                <strong>Transaction Information:</strong> Records of promotions created, redeemed, or viewed.
              </li>
              <li className="mb-1">
                <strong>Usage Information:</strong> How you use our platform, including pages visited, time spent,
                and other similar statistics.
              </li>
              <li className="mb-1">
                <strong>Device Information:</strong> IP address, browser type, operating system, and other
                technology on the devices you use to access our platform.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-1">Provide, maintain, and improve our platform.</li>
              <li className="mb-1">Process transactions and send related information.</li>
              <li className="mb-1">Send administrative messages, such as confirmations and updates.</li>
              <li className="mb-1">Respond to your comments, questions, and requests.</li>
              <li className="mb-1">Provide customer service and support.</li>
              <li className="mb-1">Send promotional communications, such as special offers or other promotions.</li>
              <li className="mb-1">Monitor and analyze usage, trends, and activities.</li>
              <li className="mb-1">Detect, prevent, and address technical issues, fraud, or other illegal activities.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-3">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-1">
                <strong>With Businesses and Customers:</strong> To facilitate the functionality of our platform, such as
                connecting customers with business promotions.
              </li>
              <li className="mb-1">
                <strong>With Service Providers:</strong> To help us provide our services, such as hosting, maintenance,
                analytics, customer service, email delivery, and payment processing.
              </li>
              <li className="mb-1">
                <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.
              </li>
              <li className="mb-1">
                <strong>For Legal Reasons:</strong> To comply with legal obligations, enforce our terms of service,
                protect our rights, privacy, safety, or property, or respond to a government request.
              </li>
              <li className="mb-1">
                <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing,
                or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
            <p className="mb-6">
              You can choose to access, update, or delete your account information at any time by logging into your account.
              You can also opt-out of receiving promotional communications from us by following the unsubscribe instructions
              included in our communications.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Security of Your Information</h2>
            <p className="mb-6">
              We use appropriate technical and organizational measures to protect the security of your information.
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="mb-6">
              Our platform is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and you believe your child has
              provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
              new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at
              <a href="mailto:privacy@wowpromo.com" className="text-primary hover:underline"> privacy@wowpromo.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
