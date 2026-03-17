export default function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[#E8621A] text-[12px] font-semibold tracking-[0.18em] uppercase mb-4">
      <span className="w-5 h-[2px] bg-[#E8621A]" />
      {text}
      <span className="w-5 h-[2px] bg-[#E8621A]" />
    </span>
  );
}
