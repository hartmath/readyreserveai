import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    ReadyReserve AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automation platform.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Name and email address</li>
                    <li>Company information</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Account credentials</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Usage Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We automatically collect certain information about your use of our platform:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Log data (IP address, browser type, pages visited)</li>
                    <li>Automation usage and execution logs</li>
                    <li>Performance and analytics data</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Detect and prevent fraud and abuse</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                    <li>End-to-end encryption for data in transit</li>
                    <li>Encrypted storage for data at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>GDPR compliance for EU users</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With your consent or at your direction</li>
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>To comply with legal obligations or respond to lawful requests</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict certain processing of your data</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">AI and Data Processing</h2>
                  <p className="text-muted-foreground">
                    We do not use your data to train AI models. Your automation data is used solely to execute the workflows you configure. We integrate with third-party AI providers (OpenAI, Google, Azure) who process data according to their respective privacy policies and our data processing agreements with them.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to improve your experience. You can control cookie preferences through your browser settings. Essential cookies are necessary for the platform to function and cannot be disabled.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                  <p className="text-muted-foreground">
                    Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>Email: privacy@readyreserve.ai</li>
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

export default PrivacyPolicy;