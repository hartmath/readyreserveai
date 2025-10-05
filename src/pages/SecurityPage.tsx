import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Security & Compliance
              </h1>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade security to protect your data and automations
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Data Security */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">Data Encryption</h2>
                      <p className="text-muted-foreground mb-4">
                        Your data is protected with industry-standard encryption at every stage.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="shrink-0">TLS 1.3</Badge>
                          <span>All data in transit is encrypted using TLS 1.3</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="shrink-0">AES-256</Badge>
                          <span>Data at rest is encrypted using AES-256 encryption</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline" className="shrink-0">Zero Trust</Badge>
                          <span>End-to-end encryption for sensitive automation data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">Compliance Certifications</h2>
                      <p className="text-muted-foreground mb-4">
                        We maintain the highest standards of compliance with global regulations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <p className="font-semibold mb-1">GDPR Compliant</p>
                          <p className="text-sm text-muted-foreground">Full compliance with EU data protection regulations</p>
                        </div>
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <p className="font-semibold mb-1">SOC 2 Type II</p>
                          <p className="text-sm text-muted-foreground">Independently verified security controls</p>
                        </div>
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <p className="font-semibold mb-1">ISO 27001</p>
                          <p className="text-sm text-muted-foreground">Information security management certified</p>
                        </div>
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <p className="font-semibold mb-1">CCPA Ready</p>
                          <p className="text-sm text-muted-foreground">California privacy law compliant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">Privacy Guarantees</h2>
                      <p className="text-muted-foreground mb-4">
                        Your data belongs to you. We never share, sell, or use it for training AI models.
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>Your automation data is never shared with third parties</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>We do not train AI models using your data</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>Data deletion requests processed within 30 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>Regular third-party security audits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">Infrastructure Security</h2>
                      <p className="text-muted-foreground mb-4">
                        Built on enterprise-grade cloud infrastructure with 99.9% uptime SLA.
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>Automated backups every 6 hours with 30-day retention</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>Multi-region redundancy for disaster recovery</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>DDoS protection and WAF (Web Application Firewall)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span>24/7 security monitoring and incident response</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Responsible Disclosure */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">Responsible Disclosure</h2>
                      <p className="text-muted-foreground mb-4">
                        We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.
                      </p>
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Report Security Issues:</p>
                        <p className="text-sm text-muted-foreground mb-2">Email: security@readyreserve.ai</p>
                        <p className="text-sm text-muted-foreground">We commit to acknowledging reports within 24 hours and providing updates every 72 hours.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;