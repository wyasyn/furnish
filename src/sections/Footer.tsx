import Logo from "@/components/Logo";
import { footerDetails } from "@/constants/footerDetails";

export default function Footer() {
  return (
    <footer className="mt-auto bg-black py-12 lg:py-[5rem]">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Logo footer />
            <p className="mt-4 max-w-[300px] text-muted/60">
              {footerDetails.introduction}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <p className="text-muted/60">{footerDetails.address}</p>
              <p className="text-muted/60">{footerDetails.phone}</p>
              <p className="text-muted/60">{footerDetails.email}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {footerDetails.siteInfo.map((info) => {
                return (
                  <div key={info.title}>
                    <h3 className="font-medium mb-3 text-background">
                      {info.title}
                    </h3>
                    <ul className="space-y-1 text-muted/60">
                      {info.links.map((link) => (
                        <li key={link}>
                          <a href="/">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-8 text-muted/60">{footerDetails.copyright}</p>
      </div>
    </footer>
  );
}
