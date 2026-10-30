import { basePath } from "@/config/site";
import { defaultLocale } from "@/i18n/dictionaries";

export default function RootPage() {
  return (
    <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <a href={`${basePath}/${defaultLocale}/`}>Esteban Santamaría Hernández →</a>
    </p>
  );
}
