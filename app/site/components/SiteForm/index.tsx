import "./SiteForm.css";
import { Input, TextArea, Typography } from "@components";

function SiteForm() {
  return (
    <form>
      <section>
        <Typography size="lg" text="SEO sozlamalari" />
        <Input name="title" type="text" label="Sayt sarlavhasi" />
        <TextArea name="description" label="Sayt haqida" />
        <Input type="file" name="image" label="Open Graph uchun rasm" />
      </section>
      <section>
        <Typography size="lg" text="Sayt sozlamalari" />
        <Input type="file" name="logo" label="Logotipni almashtirish" />
        <Input type="file" />
      </section>
    </form>
  );
}

export default SiteForm;
