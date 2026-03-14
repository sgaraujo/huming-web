import Image from "next/image"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/HumanIa-logo.webp" // Asegúrate de tener esta imagen en /public
      alt="Logo HumanIA"
      width={100}
      height={100}
      className={className}
    />
  )
}
