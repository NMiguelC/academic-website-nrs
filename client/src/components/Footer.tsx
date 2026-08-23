import { siteConfig, colors } from "@/config";
import { MapPin, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-white/80 font-opensans text-sm leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">{t("contact.title")}</h4>
            <div className="space-y-3 font-opensans text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-white/80">
                  {siteConfig.institution}, {siteConfig.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a href="/contact" className="hover:underline text-white/80 hover:text-white transition-colors">
                  {t("contact.sendMessage")}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">{t("contact.professionalNetworks")}</h4>
            <div className="flex gap-4">
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {siteConfig.socialLinks.googleScholar && (
                <a
                  href={siteConfig.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  title="Google Scholar"
                >
                  <Globe size={20} />
                </a>
              )}
              {siteConfig.socialLinks.orcid && (
                <a
                  href={siteConfig.socialLinks.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  title="ORCID"
                >
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-opensans text-sm text-white/70">
            <p>
              © {currentYear} {siteConfig.name}. {t("footer.allRights")}
            </p>
            <p className="text-right">
              {t("footer.signature")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
