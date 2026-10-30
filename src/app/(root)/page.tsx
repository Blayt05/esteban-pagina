import { basePath } from "@/config/site";
import { defaultLocale } from "@/i18n/dictionaries";

// El export estático no admite redirecciones de servidor: se redirige con
// <meta http-equiv="refresh"> y un script, con enlace de respaldo.
const target = `${basePath}/${defaultLocale}/`;

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <link rel="canonical" href={target} />
      <script
        dangerouslySetInnerHTML={{ __html: `window.location.replace(${JSON.stringify(target)})` }}
      />
      <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        <a href={target}>Esteban Santamaría Hernández →</a>
      </p>
    </>
  );
}
