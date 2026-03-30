import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center">
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-light text-foreground/60">
          © {new Date().getFullYear()} Raphael Krebs
        </p>
        <div className="relative w-8 h-8">
          <Image
            src="/images/Footer/RK_Footer.png"
            alt="RK"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
