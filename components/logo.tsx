import Image from "next/image"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/HumanIa-logo.png" // Asegúrate de tener esta imagen en /public
      alt="Logo HumIng"
      width={60}
      height={60}
      className={className}
    />
  )
}
