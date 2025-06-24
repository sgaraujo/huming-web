import Image from "next/image"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Humingbg.png" // Asegúrate de tener esta imagen en /public
      alt="Logo HumIng"
      width={40}
      height={40}
      className={className}
    />
  )
}
