
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: August 2023
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using the WowPromo platform, you agree to be bound by these Terms of Service.
              If you do not agree to all the terms and conditions, you may not use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-6">
              WowPromo is a platform that connects local businesses and customers through promotional offers.
              We provide tools for businesses to create and manage promotional offers and for customers to discover
              and redeem these offers.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-6">
              To use certain features of our platform, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account information and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Business Responsibilities</h2>
            <p className="mb-6">
              Businesses are responsible for the accuracy of their promotional offers, including the description, terms,
              and expiration dates. Businesses agree to honor all valid promotional offers redeemed by customers.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Customer Responsibilities</h2>
            <p className="mb-6">
              Customers agree to use promotional offers in accordance with their terms and conditions.
              Customers may not reproduce, sell, or transfer promotional offers to third parties.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="mb-6">
              All content and materials available on the WowPromo platform, including but not limited to text, graphics,
              logos, button icons, images, audio clips, and software, are the property of WowPromo or its content suppliers
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall WowPromo be liable for any direct, indirect, incidental, special, consequential,
              or punitive damages arising out of or in any way connected with the use of our platform or services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="mb-6">
              You agree to indemnify and hold WowPromo harmless from any claim or demand, including reasonable attorneys' fees,
              made by any third party due to or arising out of your breach of these Terms of Service, your violation of any law,
              or your violation of the rights of a third party.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-6">
              WowPromo reserves the right to terminate or suspend your account and access to our services at any time,
              without notice, for conduct that we believe violates these Terms of Service or is harmful to other users,
              to WowPromo, or to third parties, or for any other reason at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="mb-6">
              WowPromo reserves the right to modify these Terms of Service at any time. We will provide notice of significant
              changes to these terms by posting a notice on our homepage or sending you an email. Your continued use of our
              platform after such modifications will constitute your acknowledgment of the modified terms.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at
              <a href="mailto:terms@wowpromo.com" className="text-primary hover:underline"> terms@wowpromo.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
