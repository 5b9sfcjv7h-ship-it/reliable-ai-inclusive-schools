import { CalloutPanel } from "@/components/CalloutPanel";

export function SafetyNotice() {
  return (
    <CalloutPanel title="A note on what appears here" variant="accent">
      <p>
        This hub does not contain, and will never contain, any
        student-identifiable, school-identifiable, or confidential
        information. Examples, field notes, and workflows are written using
        de-identified, generalised descriptions of practice. Where material is
        still being developed, it is marked as{" "}
        <span className="font-medium text-foreground">draft</span> or{" "}
        <span className="font-medium text-foreground">private</span> and is
        not intended for external sharing.
      </p>
    </CalloutPanel>
  );
}
