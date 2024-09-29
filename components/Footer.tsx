import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-12">
      <Image
        src="/images/edgy-kreative-logo.png"
        alt="Edgy Kreative Logo in black"
        className="w-full h-auto"
        width={1000}
        height={300}
      />
    </div>
  )
}