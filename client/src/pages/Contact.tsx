import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Globe, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOMeta from "@/components/SEOMeta";

export default function Contact() {
  const { t, language } = useLanguage();
  const pt = language === "pt";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website?.trim()) {
      // Honeypot: silently succeed for bots without sending anything.
      toast.success(t("contact.success"));
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@nunoribeirosilva.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[Website] ${formData.subject}`,
          message: formData.message,
          _cc: "contacto@nunoribeirosilva.com",
          _template: "table",
        }),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      toast.success(t("contact.success"));
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      toast.error(pt ? "Não foi possível enviar a mensagem. Tente novamente." : "The message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOMeta title={t("contact.title")} description={t("contact.subtitle")} />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-blue-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-montserrat text-4xl font-bold md:text-5xl">{t("contact.title")}</h1>
            <p className="max-w-2xl font-opensans text-lg text-blue-100">{t("contact.subtitle")}</p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-lightGray p-8 text-center dark:bg-card">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                  <Mail className="text-white" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-montserrat text-lg font-bold text-foreground">{t("contact.email")}</h3>
                <p className="font-opensans text-foreground/70">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              <div className="rounded-lg bg-lightGray p-8 text-center dark:bg-card">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                  <MapPin className="text-white" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-montserrat text-lg font-bold text-foreground">{t("contact.location")}</h3>
                <p className="font-opensans text-foreground/70">
                  {siteConfig.institution}<br />{siteConfig.city}, {siteConfig.country}
                </p>
              </div>

              <div className="rounded-lg bg-lightGray p-8 text-center dark:bg-card">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                  <Globe className="text-white" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-montserrat text-lg font-bold text-foreground">{t("contact.institution")}</h3>
                <p className="font-opensans text-foreground/70">{siteConfig.department}</p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl">
              <h2 className="mb-8 text-center font-montserrat text-3xl font-bold text-foreground">{t("contact.sendMessage")}</h2>
              <p className="mb-8 text-center font-opensans text-sm text-foreground/70">
                {pt
                  ? `Pode enviar-me um email diretamente para ${siteConfig.email}, ou usar o formulário abaixo.`
                  : `You can email me directly at ${siteConfig.email}, or use the form below.`}
              </p>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block font-opensans font-medium text-foreground">{t("contact.name")}</label>
                    <Input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder={pt ? "O seu nome" : "Your name"} required minLength={2} maxLength={100} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block font-opensans font-medium text-foreground">{pt ? "Email" : "Email"}</label>
                    <Input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder={pt ? "o.seu.email@exemplo.com" : "your.email@example.com"} required maxLength={320} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-2 block font-opensans font-medium text-foreground">{t("contact.subject")}</label>
                  <Input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={pt ? "Assunto da mensagem" : "Message subject"} required minLength={3} maxLength={160} />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block font-opensans font-medium text-foreground">{t("contact.message")}</label>
                  <Textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder={pt ? "A sua mensagem..." : "Your message..."} required minLength={10} maxLength={5000} rows={6} />
                </div>

                {/* Honeypot anti-spam: available to bots, invisible to regular visitors. */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <Input id="contact-website" type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 bg-primary font-opensans font-medium text-white transition-all duration-200 hover:bg-blue-900">
                  {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                  {isSubmitting ? t("contact.sending") : t("contact.send")}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-lightGray py-16 md:py-24 dark:bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 font-montserrat text-3xl font-bold text-foreground">{t("contact.professionalNetworks")}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {siteConfig.socialLinks.linkedin && (
                <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 transition-shadow hover:shadow-md dark:bg-card">
                  <Linkedin className="text-primary" size={20} aria-hidden="true" /><span className="font-opensans font-medium text-foreground">LinkedIn</span>
                </a>
              )}
              {siteConfig.socialLinks.googleScholar && (
                <a href={siteConfig.socialLinks.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 transition-shadow hover:shadow-md dark:bg-card">
                  <Globe className="text-primary" size={20} aria-hidden="true" /><span className="font-opensans font-medium text-foreground">Google Scholar</span>
                </a>
              )}
              {siteConfig.socialLinks.orcid && (
                <a href={siteConfig.socialLinks.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 transition-shadow hover:shadow-md dark:bg-card">
                  <Globe className="text-primary" size={20} aria-hidden="true" /><span className="font-opensans font-medium text-foreground">ORCID</span>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
