import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using ReadyReserve AI's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                  <p className="text-muted-foreground">
                    ReadyReserve AI provides an AI automation platform that enables businesses to automate workflows using artificial intelligence. Our services include pre-built automations, custom automation development, and integrations with leading AI providers.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Account Creation</h3>
                  <p className="text-muted-foreground mb-4">
                    To use our services, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Account Responsibility</h3>
                  <p className="text-muted-foreground">
                    You are responsible for all activities that occur under your account. You must be at least 18 years old to create an account.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                  <p className="text-muted-foreground mb-4">You agree not to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Use the service for any illegal purpose or in violation of any laws</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Use the service to transmit malware or harmful code</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Resell or redistribute our services without authorization</li>
                    <li>Use the service to generate spam or unsolicited communications</li>
                    <li>Violate any third-party rights, including intellectual property rights</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Subscription Plans</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer multiple subscription tiers with different features and usage limits. Prices are subject to change with 30 days' notice.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Billing</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>Payment is due upon subscription or renewal</li>
                    <li>We accept major credit cards and other payment methods as indicated</li>
                    <li>All fees are non-refundable except as required by law</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Cancellation</h3>
                  <p className="text-muted-foreground">
                    You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds will be provided for partial periods.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Our Intellectual Property</h3>
                  <p className="text-muted-foreground mb-4">
                    The service and its original content, features, and functionality are owned by ReadyReserve AI and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain all rights to the data and content you submit to our service. You grant us a limited license to use, store, and process your content solely to provide and improve our services.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Data and Privacy</h2>
                  <p className="text-muted-foreground">
                    Your use of our service is also governed by our Privacy Policy. We are committed to protecting your data and maintaining the confidentiality of your automations and workflows.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                  <p className="text-muted-foreground mb-4">
                    We strive to provide reliable service but do not guarantee:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Uninterrupted or error-free service</li>
                    <li>That defects will be corrected immediately</li>
                    <li>That the service will be available at all times</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of the service with or without notice.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, ReadyReserve AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your use of or inability to use the service.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless ReadyReserve AI from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground mb-4">
                    We may terminate or suspend your account immediately, without prior notice, for any reason, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Breach of these Terms of Service</li>
                    <li>Non-payment of fees</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Excessive or abusive use of resources</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>Email: legal@readyreserve.ai</li>
                    <li>Address: [Your Company Address]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;